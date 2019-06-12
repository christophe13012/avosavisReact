import React, { Component } from "react";
import Liste from "./liste";
import Map from "./map";
import listeResto from "../listeResto.json";

class Container extends Component {
  state = { restaurants: [], markers: [] };
  componentDidMount() {
    listeResto.forEach(resto => {
      resto.placeId = 0;
    });
    this.setState({ restaurants: listeResto });
  }
  placerMarker = (resto, map) => {
    let { markers } = this.state;
    var imageResto = "icons/resto.png";
    var markerResto = new window.google.maps.Marker({
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
  render() {
    return (
      <div
        style={{
          backgroundColor: "#ef6c00",
          margin: 20,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: 5,
          height: 750
        }}
      >
        <Map
          placerMarker={this.placerMarker}
          restaurants={this.state.restaurants}
        />
        <Liste />
      </div>
    );
  }
}

export default Container;
