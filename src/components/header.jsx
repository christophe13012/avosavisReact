import React from "react";

const Header = () => {
  return (
    <h1
      style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}
      className="display-3 center"
    >
      Avosavis
      <img style={{ marginLeft: 7 }} alt="iconChef" src="icons/chef.png" />
    </h1>
  );
};

export default Header;
