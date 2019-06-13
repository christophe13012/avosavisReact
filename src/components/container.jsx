import React, { Component } from "react";
import Liste from "./liste";
import restaurants from "../listeResto.json";

class Container extends Component {
  state = {
    map: {},
    restaurants: [],
    markers: [],
    bounds: {},
    showDescription: false
  };
  componentDidMount() {
    const map = new window.google.maps.Map(this.refs.map, {
      center: { lat: 41.0082, lng: 28.9784 },
      zoom: 5
    });
    window.google.maps.event.addListener(map, "bounds_changed", () => {
      const bounds = map.getBounds();
      this.setState({ bounds });
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
    restaurants.forEach(resto => {
      resto.placeId = 0;
      this.placerMarker(resto, map);
      resto.marker = this.state.markers[this.state.markers.length - 1];
    });
    this.setState({ restaurants, map });
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
  placerMarker = (resto, map) => {
    let { markers } = this.state;
    const imageResto = "icons/resto.png";
    const markerResto = new window.google.maps.Marker({
      position: new window.google.maps.LatLng(resto.lat, resto.long),
      map: map,
      icon: imageResto,
      title: resto.restaurantName
    });
    markers.push(markerResto);
    markerResto.addListener("click", function() {
      map.setCenter(markerResto.getPosition());
      /*
          let indexMarker = markers.length - 1;
      infoResto.avis(resto);
      outils.bounce(markerResto);
      outils.clignoterResto(indexMarker);
      setTimeout(function() {
        outils.scrollTo(indexMarker);
      }, 1000);
      */
    });
    this.setState({ markers });
  };
  handleClose() {
    this.setState({ showDescription: false });
  }

  handleShow() {
    this.setState({ showDescription: true });
  }
  render() {
    const { restaurants, map, markers, bounds } = this.state;
    return (
      <div style={styles.containerStyle}>
        <div style={styles.divMap}>
          <div ref="map" style={styles.mapStyle}>
            I should be a map!
          </div>
        </div>
        <Liste
          restaurants={restaurants}
          map={map}
          markers={markers}
          bounds={bounds}
          showDescription={this.handleShow}
        />
      </div>
    );
  }
}
const styles = {
  containerStyle: {
    backgroundColor: "#ef6c00",
    margin: 20,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    padding: 5,
    height: 750
  },
  divMap: { width: "75%", backgroundColor: "white", borderRadius: 5 },
  mapStyle: {
    width: "100%",
    height: "100%",
    border: "1px solid black"
  }
};

export default Container;
