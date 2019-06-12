import React, { Component } from "react";
import Restaurant from "./restaurant";
import Filter from "./filter";

class Liste extends Component {
  filterGeoloc() {
    const { restaurants, bounds } = this.props;
    const latMax = bounds.na.l;
    const latMin = bounds.na.j;
    const longMax = bounds.ga.l;
    const longMin = bounds.ga.j;
    const filtered = restaurants.filter(
      resto =>
        resto.long < longMax &&
        resto.long > longMin &&
        resto.lat < latMax &&
        resto.lat > latMin
    );
    return filtered;
  }
  render() {
    const restaurants =
      Object.keys(this.props.bounds).length > 0
        ? this.filterGeoloc()
        : this.props.restaurants;
    console.log(restaurants);

    return (
      <div style={styles.div}>
        <h5 style={styles.h5}>Liste de restaurant</h5>
        <p style={styles.p}>Filtrer selon les notes :</p>
        <Filter />
        <hr style={styles.hr} />
        <div id="liste" style={styles.restaurant}>
          {restaurants.map((resto, index) => (
            <Restaurant
              key={index}
              resto={resto}
              index={index}
              map={this.props.map}
              markers={this.props.markers}
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
  hr: { backgroundColor: "ghostwhite", marginLeft: 6 },
  restaurant: { color: "ghostwhite", marginLeft: 8 }
};

export default Liste;
