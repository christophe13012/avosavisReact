import React from "react";
import { dessinNote } from "./../utils";

const Restaurant = ({ restaurant, onClick }) => {
  return (
    <div style={styles.div}>
      <p onClick={() => onClick(restaurant)} style={styles.restaurantName}>
        {restaurant.restaurantName}
      </p>
      <p style={styles.adress}>{restaurant.address}</p>
      <p>{dessinNote(restaurant.moyenneNote)}</p>
      <hr style={styles.hr} />
    </div>
  );
};

const styles = {
  div: { marginRight: 5 },
  hr: { backgroundColor: "ghostwhite", marginLeft: 0, marginRight: 5 },
  restaurantName: {
    marginBottom: 0,
    fontWeight: "bold",
    cursor: "pointer"
  },
  adress: {
    marginBottom: 0
  }
};

export default Restaurant;
