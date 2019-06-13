import React from "react";

export function dessinNote(note) {
  let stars = [];
  for (let i = 0; i < Math.floor(note); i++) {
    stars.push(
      <img
        style={{ display: "inline-block", verticalAlign: "middle" }}
        src="icons/star.png"
        alt="stars"
        key={i + 1}
      />
    );
  }
  if (note - Math.floor(note) > 0.1) {
    stars.push(<img src="icons/star-half-empty.png" alt="starsHalf" key={0} />);
  }
  return stars;
}
