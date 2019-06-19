import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

import { dessinNote } from "./../utils";

class Restaurant extends Component {
  state = {};
  render() {
    const { restaurant, restaurantClicked, onClick, onOpenRating } = this.props;
    if (this.refs.resto && restaurant.marker === restaurantClicked.marker)
      this.refs.resto.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
      <div ref="resto" style={styles.div}>
        <div onClick={() => onClick(restaurant)} style={styles.restaurantName}>
          {restaurant.marker &&
          restaurant.marker === restaurantClicked.marker ? (
            <Blink>{restaurant.restaurantName}</Blink>
          ) : (
            restaurant.restaurantName
          )}
        </div>
        <p style={styles.adress}>{restaurant.address}</p>
        <p style={styles.stars}>{dessinNote(restaurant.averageStars)}</p>
        <button
          onClick={() => onOpenRating(restaurant)}
          className="btn btn-success btn-sm"
        >
          Ajouter un avis
        </button>
        <hr style={styles.hr} />
      </div>
    );
  }
}

const blink = keyframes`
  0%{opacity: 1;}
  50%{opacity: 0;}
  100%{opacity: 1;}
`;

const Blink = styled.div`
  animation: ${blink} 1.5s infinite;
`;

const styles = {
  div: { marginRight: 5 },
  hr: {
    backgroundColor: "ghostwhite",
    marginLeft: 0,
    marginRight: 5,
    marginTop: 8
  },
  restaurantName: {
    marginBottom: 0,
    fontWeight: "bold",
    cursor: "pointer"
  },
  adress: {
    marginBottom: 0
  },
  stars: {
    marginBottom: 8
  }
};

export default Restaurant;
