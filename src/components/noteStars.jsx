import React from "react";

const NoteStars = ({ onStarClick, stars }) => {
  let starsArray = [];
  for (let index = 1; index < 6; index++) {
    const img = (
      <img
        style={{ width: 35, height: 35 }}
        key={index}
        alt="stars"
        src={stars < index ? "icons/star-empty.png" : "icons/star.png"}
        onClick={() => onStarClick(index)}
      />
    );
    starsArray.push(img);
  }
  return <div style={{ marginTop: 8 }}>{starsArray}</div>;
};

export default NoteStars;
