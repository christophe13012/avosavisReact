import React from "react";

export function dessinNote(note) {
  let stars = [];
  const style = { heigth: 30, width: 30 };
  if (note === 0)
    return (
      <img style={style} src="icons/star-empty.png" alt="starsEmpty" key={0} />
    );
  for (let i = 0; i < Math.floor(note); i++) {
    stars.push(
      <img style={style} src="icons/star.png" alt="stars" key={i + 1} />
    );
  }
  if (note - Math.floor(note) > 0.1) {
    stars.push(
      <img
        style={style}
        src="icons/star-half-empty.png"
        alt="starsHalf"
        key={0}
      />
    );
  }
  return stars;
}

export function bounce(ancientMarker, marker) {
  // supprime le bounce au dernier
  if (ancientMarker) ancientMarker.setAnimation(null);
  // ajout bounce
  marker.setAnimation(window.google.maps.Animation.BOUNCE);
}
