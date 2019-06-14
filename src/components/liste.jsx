import React, { Component } from "react";
import Restaurant from "./restaurant";
import Filter from "./filter";

class Liste extends Component {
  state = { range: { min: 1, max: 5 } };
  filterGeoloc() {
    const { restaurants, bounds } = this.props;
    const latMax = bounds.na.l;
    const latMin = bounds.na.j;
    const longMax = bounds.ga.l;
    const longMin = bounds.ga.j;
    const geolocRestaurants = restaurants.filter(
      restaurant =>
        restaurant.long < longMax &&
        restaurant.long > longMin &&
        restaurant.lat < latMax &&
        restaurant.lat > latMin
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
        <div style={styles.restaurants}>
          {filteredRestaurants.map((restaurant, index) => (
            <Restaurant
              key={index}
              restaurant={restaurant}
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
