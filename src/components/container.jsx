import React, { Component } from "react";
import Liste from "./liste";
import restaurants from "../listeResto.json";
import DescriptionModal from "./descriptionModal";
import AvisModal from "./avisModal";
import AjoutModal from "./ajoutModal";
import _ from "lodash";

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
      center: { lat: 43.3, lng: 5.4 },
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
      const { restaurant } = this.state;
      restaurant.restaurantName = "";
      restaurant.address = "";
      restaurant.ratings = [];
      restaurant.placeId = 0;
      restaurant.averageStars = null;
      //  this.placerMarker(event, map);
      this.setState({ restaurant, showAjout: true });
    });
  };
  handleAjoutListe = (restaurant, avis) => {
    const { restaurants } = this.state;
    restaurant.restaurantName = _.capitalize(restaurant.restaurantName);
    restaurant.address = _.capitalize(restaurant.address);
    let marker = this.state.markers[this.state.markers.length - 1];
    restaurant.marker = marker;
    this.handleHideModals();
    restaurants.push(restaurant);
    const showAvis = avis ? true : false;
    this.setState({ restaurants, restaurant, showAvis });
  };
  handleChangeAjout = event => {
    let restaurant = { ...this.state.restaurant };
    restaurant[event.target.name] = event.target.value;
    this.setState({ restaurant });
  };
  handleHideAjout = () => {
    this.handleHideModals();
    const { markers } = this.state;
    markers[markers.length - 1].setMap(null);
    markers.pop();
    this.setState({ markers });
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
    rating.comment = _.capitalize(rating.comment);
    const index = restaurants.indexOf(restaurant);
    restaurant.ratings = [rating, ...restaurant.ratings];
    restaurant.averageStars = this.averageStars(restaurant);
    restaurants[index] = restaurant;
    this.handleHideModals();
    this.setState({ rating, restaurants });
  };
  render() {
    const {
      restaurants,
      restaurant,
      bounds,
      showDescription,
      showAvis,
      showAjout,
      rating
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
          onHide={this.handleHideAjout}
          onAjout={this.handleAjoutListe}
          onChange={this.handleChangeAjout}
          restaurant={restaurant}
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
