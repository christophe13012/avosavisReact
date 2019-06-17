import React, { Component } from "react";
import Liste from "./liste";
import restaurants from "../listeResto.json";
import DescriptionModal from "./descriptionModal";
import AvisModal from "./avisModal";
import AjoutModal from "./ajoutModal";

class Container extends Component {
  state = {
    map: {},
    restaurants: [],
    restaurant: {},
    markers: [],
    bounds: {},
    showDescription: false,
    showAvis: false,
    showAjout: false,
    rating: { stars: 0, comment: "" }
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
    // Ajout restaurants initiaux
    restaurants.forEach(restaurant => {
      restaurant.placeId = 0;
      this.placerMarker(restaurant, map);
      restaurant.averageStars = this.averageStars(restaurant);
      restaurant.marker = this.state.markers[this.state.markers.length - 1];
    });
    this.ajoutMarkerClick(map);
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
  placerMarker = (restaurant, map) => {
    let { markers } = this.state;
    const imageResto = "icons/resto.png";
    const position = restaurant.long
      ? new window.google.maps.LatLng(restaurant.lat, restaurant.long)
      : restaurant.latLng;
    const marker = new window.google.maps.Marker({
      position,
      map: map,
      icon: imageResto
    });
    markers.push(marker);
    marker.addListener("click", function() {
      map.setCenter(marker.getPosition());
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
  ajoutMarkerClick = map => {
    window.google.maps.event.addListener(map, "click", event => {
      this.placerMarker(event, map);
      this.setState({ showAjout: true });
    });
  };
  averageStars(restaurant) {
    let totalNotes = 0;
    const nombreNotes = restaurant.ratings.length;
    for (let i = 0; i < nombreNotes; i++) {
      totalNotes += Number(restaurant.ratings[i].stars);
    }
    // On arrondi la moyenne au 0.25 pres
    const moyStars = Math.round(2 * (totalNotes / nombreNotes)) / 2;
    return moyStars;
  }
  handleHideModals = () => {
    this.setState({
      showDescription: false,
      showAvis: false,
      showAjout: false
    });
  };
  handleClick = restaurant => {
    this.setState({ showDescription: true, restaurant });
    this.state.map.setCenter(restaurant.marker.getPosition());
    this.state.map.setZoom(16);
  };
  handleOpenRating = restaurant => {
    const rating = { stars: 0, comment: "" };
    this.setState({
      showAvis: true,
      restaurant,
      rating,
      showDescription: false
    });
  };
  handleStarClick = noteSaisie => {
    const { rating } = this.state;
    rating.stars = noteSaisie === rating.stars ? rating.stars - 1 : noteSaisie;
    this.setState({ rating });
  };
  handleChangeComment = e => {
    const { rating } = this.state;
    rating.comment = e.target.value;
    this.setState({ rating });
  };
  handleRating = () => {
    const { rating, restaurant, restaurants } = this.state;
    rating.comment =
      rating.comment.charAt(0).toUpperCase() + rating.comment.slice(1);
    const index = restaurants.indexOf(restaurant);
    restaurant.ratings = [rating, ...restaurant.ratings];
    restaurant.averageStars = this.averageStars(restaurant);
    restaurants[index] = restaurant;
    this.handleHideModals();
    this.setState({ rating, restaurants });
  };
  handleAjout = restaurant => {
    const restaurants = [...this.state.restaurants];
    let marker = this.state.markers[this.state.markers.length - 1];
    restaurant.lat = marker.getPosition().lat();
    restaurant.long = marker.getPosition().lng();
    restaurant.marker = marker;
    this.handleHideModals();
    restaurants.push(restaurant);
    this.setState({ restaurants, restaurant });
  };
  render() {
    const {
      restaurants,
      restaurant,
      bounds,
      showDescription,
      showAvis,
      showAjout,
      rating,
      markers
    } = this.state;

    return (
      <div style={styles.containerStyle}>
        <div style={styles.divMap}>
          <div ref="map" style={styles.mapStyle}>
            I should be a map!
          </div>
        </div>
        <Liste
          restaurants={restaurants}
          bounds={bounds}
          onClick={this.handleClick}
          onOpenRating={this.handleOpenRating}
        />
        <DescriptionModal
          show={showDescription}
          onHide={this.handleHideModals}
          restaurant={restaurant}
          onOpenRating={this.handleOpenRating}
        />
        <AvisModal
          show={showAvis}
          onHide={this.handleHideModals}
          restaurant={restaurant}
          onStarClick={this.handleStarClick}
          rating={rating}
          onRate={this.handleRating}
          onChange={this.handleChangeComment}
        />
        <AjoutModal
          show={showAjout}
          onHide={this.handleHideModals}
          marker={markers[markers.length - 1]}
          onAjout={this.handleAjout}
        />
      </div>
    );
  }
}
const styles = {
  containerStyle: {
    backgroundColor: "#ef6c00",
    margin: "auto",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    padding: 5,
    height: 600,
    maxWidth: 1050
  },
  divMap: { width: "75%", backgroundColor: "white", borderRadius: 5 },
  mapStyle: {
    width: "100%",
    height: "100%",
    border: "1px solid black"
  }
};

export default Container;
