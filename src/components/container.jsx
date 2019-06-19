import React, { Component } from "react";
import Liste from "./liste";
import restaurants from "../listeResto.json";
import DescriptionModal from "./descriptionModal";
import AvisModal from "./avisModal";
import AjoutModal from "./ajoutModal";
import { bounce } from "./../utils";
import _ from "lodash";

class Container extends Component {
  state = {
    restaurants: [],
    restaurant: {},
    bounds: {},
    showDescription: false,
    showAvis: false,
    showAjout: false,
    rating: { stars: 0, comment: "", auteur: "" }
  };
  componentDidMount() {
    const map = new window.google.maps.Map(this.refs.map, {
      center: { lat: 43.3, lng: 5.4 },
      zoom: 16
    });
    this.geolocalisation(map);
    // ajout listenner mouvements carte
    window.google.maps.event.addListener(map, "bounds_changed", () => {
      const bounds = map.getBounds();
      this.placesAPI(map);
      this.setState({ bounds });
    });
    // Ajout restaurants liste JSON
    restaurants.forEach(restaurant => {
      const marker = this.placerMarker(restaurant, map);
      restaurant.marker = marker;
      restaurant.averageStars = this.averageStars(restaurant);
    });
    this.ajoutMarkerClick(map);
    this.setState({ restaurants, map });
  }
  geolocalisation(map) {
    const infoWindow = new window.google.maps.InfoWindow();
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
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
        () => {
          this.handleLocationError(true, infoWindow, map.getCenter(), map);
        }
      );
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, infoWindow, map.getCenter(), map);
    }
  }
  handleLocationError(browserHasGeolocation, infoWindow, pos, map) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Erreur: Le srvice de géolocalisation n'a pas fonctionné"
        : "Erreur: Votre navigateur ne supporte pas la géolocalisation"
    );
    infoWindow.open(map);
  }
  placesAPI = map => {
    const request = {
      location: map.center,
      radius: "500",
      type: ["restaurant"]
    };
    const service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
      if (status === "OK") {
        const restaurants = [...this.state.restaurants];
        results.forEach(result => {
          const restaurant = {
            restaurantName: result.name,
            address: result.vicinity,
            lat: result.geometry.location.lat(),
            long: result.geometry.location.lng(),
            ratings: []
          };
          service.getDetails({ placeId: result.place_id }, (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              const reviews = place.reviews;
              place.reviews &&
                reviews.forEach(review => {
                  restaurant.ratings.push({
                    stars: review.rating,
                    comment: review.text,
                    auteur: review.author_name
                  });
                });
            }
            if (
              restaurants.findIndex(
                resto =>
                  resto.restaurantName === restaurant.restaurantName &&
                  resto.address === restaurant.address
              ) === -1
            ) {
              restaurant.marker = this.placerMarker(restaurant, map);
              restaurant.averageStars = this.averageStars(restaurant);
              restaurants.push(restaurant);
              this.setState({ restaurants });
            }
          });
        });
      }
    });
  };
  placerMarker = (restaurant, map) => {
    const imageResto = "icons/resto.png";
    const position = restaurant.long
      ? new window.google.maps.LatLng(restaurant.lat, restaurant.long)
      : restaurant.latLng;
    const marker = new window.google.maps.Marker({
      position,
      map: map,
      icon: imageResto
    });
    marker.addListener("click", () => {
      const restaurant = { ...this.state.restaurant };
      bounce(restaurant.marker, marker);
      restaurant.marker = marker;
      this.setState({ restaurant });
    });
    return marker;
  };
  ajoutMarkerClick = map => {
    window.google.maps.event.addListener(map, "click", event => {
      const restaurant = { ...this.state.restaurant };
      restaurant.restaurantName = "";
      restaurant.address = "";
      restaurant.ratings = [];
      restaurant.placeId = 0;
      restaurant.averageStars = null;
      const marker = this.placerMarker(event, map);
      restaurant.marker = marker;
      this.setState({ restaurant, showAjout: true });
    });
  };
  handleAjoutListe = (restaurant, avis) => {
    const restaurants = [...this.state.restaurants];
    restaurant.restaurantName = _.capitalize(restaurant.restaurantName);
    restaurant.address = _.capitalize(restaurant.address);
    // let marker = this.state.markers[this.state.markers.length - 1];
    //  restaurant.marker = marker;
    this.handleHideModals();
    restaurants.push(restaurant);
    const showAvis = avis ? true : false;
    this.setState({ restaurants, restaurant, showAvis });
  };
  handleChangeAjout = event => {
    const restaurant = { ...this.state.restaurant };
    restaurant[event.target.name] = event.target.value;
    this.setState({ restaurant });
  };
  handleHideAjout = () => {
    this.handleHideModals();
    const restaurant = { ...this.state.restaurant };
    restaurant.marker.setMap(null);
  };
  averageStars(restaurant) {
    let totalNotes = 0;
    const nombreNotes = restaurant.ratings.length;
    if (nombreNotes === 0) return null;
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
    const { restaurant: resto } = this.state;
    bounce(resto.marker, restaurant.marker);
    this.setState({ showDescription: true, restaurant });
  };
  handleOpenRating = restaurant => {
    const rating = { stars: 0, comment: "", auteur: "" };
    this.setState({
      showAvis: true,
      restaurant,
      rating,
      showDescription: false
    });
  };
  handleStarClick = noteSaisie => {
    const rating = { ...this.state.rating };
    rating.stars = noteSaisie === rating.stars ? rating.stars - 1 : noteSaisie;
    this.setState({ rating });
  };
  handleChangeComment = e => {
    const rating = { ...this.state.rating };
    rating[e.target.name] = e.target.value;
    this.setState({ rating });
  };
  handleRating = () => {
    const rating = { ...this.state.rating };
    const restaurants = [...this.state.restaurants];
    const restaurant = { ...this.state.restaurant };
    const index = restaurants.findIndex(
      resto =>
        resto.restaurantName === restaurant.restaurantName &&
        resto.address === restaurant.address
    );
    rating.comment = _.capitalize(rating.comment);
    rating.auteur = _.capitalize(rating.auteur);
    restaurant.ratings = [rating, ...restaurant.ratings];
    restaurant.averageStars = this.averageStars(restaurant);
    restaurants[index] = restaurant;
    console.log(restaurants);

    this.handleHideModals();
    this.setState({ rating, restaurants, restaurant });
  };
  render() {
    const {
      restaurant,
      bounds,
      showDescription,
      showAvis,
      showAjout,
      rating
    } = this.state;
    const restaurants = _.orderBy(
      this.state.restaurants,
      ["restaurantName"],
      ["asc"]
    );
    return (
      <div style={styles.containerStyle}>
        <div style={styles.divMap}>
          <div ref="map" style={styles.mapStyle}>
            I should be a map!
          </div>
        </div>
        <Liste
          restaurants={restaurants}
          restaurantClicked={restaurant}
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
