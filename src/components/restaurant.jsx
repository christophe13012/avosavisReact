import React from "react";
import { dessinNote } from "./../utils";

const Restaurant = ({ restaurant, onClick, onOpenRating }) => {
  return (
    <div style={styles.div}>
      <p onClick={() => onClick(restaurant)} style={styles.restaurantName}>
        {restaurant.restaurantName}
      </p>
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
};

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
