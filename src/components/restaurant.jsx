import React, { Component } from "react";

class Restaurant extends Component {
  moyenneNote(resto) {
    let totalNotes = 0;
    const nombreNotes = resto.ratings.length;
    for (let i = 0; i < nombreNotes; i++) {
      totalNotes += Number(resto.ratings[i].stars);
    }
    // On arrondi la moyenne au 0.25 pres
    const moyStars = Math.round(2 * (totalNotes / nombreNotes)) / 2;
    const note = this.dessinNote(moyStars);
    return note;
  }
  dessinNote(note) {
    let stars = [];
    for (let i = 0; i < Math.floor(note); i++) {
      stars.push(<img src="icons/star.png" alt="stars" key={i + 1} />);
    }
    if (note - Math.floor(note) > 0.1) {
      stars.push(
        <img src="icons/star-half-empty.png" alt="starsHalf" key={0} />
      );
    }
    return stars;
  }
  render() {
    const { resto, onClick } = this.props;
    return (
      <div>
        <p onClick={() => onClick(resto.marker)} style={styles.restaurantName}>
          {resto.restaurantName}
        </p>
        <p style={styles.adress}>{resto.address}</p>
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
  },
  adress: {
    marginBottom: 0
  }
};

export default Restaurant;
