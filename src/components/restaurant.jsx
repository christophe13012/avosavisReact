import React from "react";
import { dessinNote } from "./../utils";

const Restaurant = ({ restaurant, onClick }) => {
  return (
    <div>
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
  hr: { backgroundColor: "ghostwhite", marginLeft: 0 },
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
