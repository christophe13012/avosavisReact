import React, { Component } from "react";
import listeResto from "../listeResto.json";

class Map extends Component {
  state = { map: {} };
  componentDidMount() {
    console.log(this.props.restaurants);

    const map = new window.google.maps.Map(this.refs.map, {
      center: { lat: 41.0082, lng: 28.9784 },
      zoom: 5
    });
    const infoWindow = new window.google.maps.InfoWindow();
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          // on place une image personnelle comme icone
          var image = "icons/placeholder.png";
          var marker = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(
              position.coords.latitude,
              position.coords.longitude
            ),
            map: map,
            icon: image,
            animation: window.google.maps.Animation.DROP
          });
          infoWindow.open(map);
          map.setCenter(marker.getPosition());
        },
        function() {
          this.handleLocationError(true, infoWindow, map.getCenter(), map);
        }
      );
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, infoWindow, map.getCenter(), map);
    }
    // Ajout resto initiaux
    listeResto.forEach(resto => {
      this.props.placerMarker(resto, map);
    });
    this.setState({ map });
  }
  handleLocationError(browserHasGeolocation, infoWindow, pos, map) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }

  render() {
    const mapStyle = {
      width: "100%",
      height: "100%",
      border: "1px solid black"
    };
    return (
      <div style={{ width: "75%", backgroundColor: "white", borderRadius: 5 }}>
        <div ref="map" style={mapStyle}>
          I should be a map!
        </div>
      </div>
    );
  }
}

export default Map;
