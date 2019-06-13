import React, { Component } from "react";
import Restaurant from "./restaurant";
import Filter from "./filter";

class Liste extends Component {
  state = { min: 1, max: 5 };
  filterGeoloc() {
    const { restaurants, bounds } = this.props;
    const latMax = bounds.na.l;
    const latMin = bounds.na.j;
    const longMax = bounds.ga.l;
    const longMin = bounds.ga.j;
    const geolocRestaurants = restaurants.filter(
      resto =>
        resto.long < longMax &&
        resto.long > longMin &&
        resto.lat < latMax &&
        resto.lat > latMin
    );
    return geolocRestaurants;
  }
  handleChangeMin = e => {
    this.setState({ min: e.target.value });
  };
  handleChangeMax = e => {
    this.setState({ max: e.target.value });
  };
  render() {
    const geolocRestaurants =
      Object.keys(this.props.bounds).length > 0
        ? this.filterGeoloc()
        : this.props.restaurants;
    const filteredRestaurants = geolocRestaurants.filter(
      resto =>
        resto.moyenneNote >= this.state.min &&
        resto.moyenneNote <= this.state.max
    );
    return (
      <div style={styles.div}>
        <h5 style={styles.h5}>Liste de restaurant</h5>
        <p style={styles.p}>Filtrer selon les notes :</p>
        <Filter
          onChangeMin={this.handleChangeMin}
          onChangeMax={this.handleChangeMax}
          min={this.state.min}
          max={this.state.max}
        />
        <hr style={styles.hr} />
        <div style={styles.restaurants}>
          {filteredRestaurants.map((restaurant, index) => (
            <Restaurant
              key={index}
              restaurant={restaurant}
              onClick={this.props.onClick}
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
