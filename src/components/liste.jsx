import React, { Component } from "react";
import Restaurant from "./restaurant";
import Filter from "./filter";

class Liste extends Component {
  state = { range: { min: 0, max: 5 } };
  filterGeoloc() {
    const { restaurants, bounds } = this.props;
    console.log(bounds);

    const latMax = bounds.pa.h;
    const latMin = bounds.pa.g;
    const longMax = bounds.ka.h;
    const longMin = bounds.ka.g;
    const geolocRestaurants = restaurants.filter(
      restaurant =>
        restaurant.marker.getPosition().lng() < longMax &&
        restaurant.marker.getPosition().lng() > longMin &&
        restaurant.marker.getPosition().lat() < latMax &&
        restaurant.marker.getPosition().lat() > latMin
    );

    return geolocRestaurants;
  }
  handleChange = e => {
    const range = { ...this.state.range };
    range[e.target.name] = e.target.value;
    this.setState({ range });
  };
  render() {
    const geolocRestaurants =
      Object.keys(this.props.bounds).length > 0
        ? this.filterGeoloc()
        : this.props.restaurants;
    const filteredRestaurants = geolocRestaurants.filter(
      restaurant =>
        restaurant.averageStars >= this.state.range.min &&
        restaurant.averageStars <= this.state.range.max
    );
    const others = geolocRestaurants.filter(
      restaurant =>
        restaurant.averageStars < this.state.range.min ||
        restaurant.averageStars > this.state.range.max
    );
    filteredRestaurants.forEach(restaurant =>
      restaurant.marker.setVisible(true)
    );
    others.forEach(restaurant => restaurant.marker.setVisible(false));
    const index = filteredRestaurants.findIndex(
      restaurant => restaurant.marker === this.props.restaurantClicked.marker
    );
    if (this.refs.restos && index === -1) this.refs.restos.scrollTop = 0;
    return (
      <div style={styles.div}>
        <h5 style={styles.h5}>Liste de restaurant</h5>
        <p style={styles.p}>Filtrer selon les notes :</p>
        <Filter
          onChange={this.handleChange}
          min={this.state.range.min}
          max={this.state.range.max}
        />
        <hr style={styles.hr} />
        <div ref="restos" style={styles.restaurants}>
          {filteredRestaurants.map((restaurant, index) => (
            <Restaurant
              key={index}
              restaurant={restaurant}
              restaurantClicked={this.props.restaurantClicked}
              onClick={this.props.onClick}
              onOpenRating={this.props.onOpenRating}
            />
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  div: { width: "25%", textAlign: "left" },
  h5: { color: "ghostwhite", textAlign: "center", marginTop: 10 },
  p: { color: "ghostwhite", marginLeft: 10, marginBottom: 5 },
  hr: { backgroundColor: "ghostwhite", marginLeft: 6, marginTop: 5 },
  restaurants: {
    color: "ghostwhite",
    marginLeft: 8,
    overflow: "auto",
    height: 450
  }
};

export default Liste;
