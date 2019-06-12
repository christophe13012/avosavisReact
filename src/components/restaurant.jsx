import React, { Component } from "react";

class Restaurant extends Component {
  handleClick = index => {
    this.props.map.setCenter(this.props.markers[index].getPosition());
  };
  moyenneNote(resto) {
    let totalNotes = 0;
    let nombreNotes = resto.ratings.length;
    for (let i = 0; i < nombreNotes; i++) {
      totalNotes += Number(resto.ratings[i].stars);
    }
    // On arrondi la moyenne au 0.25 pres
    let moyStars = Math.round(2 * (totalNotes / nombreNotes)) / 2;
    return moyStars;
  }
  render() {
    const { index, resto } = this.props;
    return (
      <div>
        <p
          onClick={() => this.handleClick(index)}
          style={styles.restaurantName}
        >
          {resto.restaurantName}
        </p>
        <p>{resto.address}</p>
        <p>{this.moyenneNote(resto)}</p>
        <hr style={styles.hr} />
      </div>
    );
  }
}

const styles = {
  hr: { backgroundColor: "ghostwhite", marginLeft: 0 },
  restaurantName: {
    marginBottom: 0,
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Restaurant;
