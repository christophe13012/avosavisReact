import React, { Component } from "react";
import Liste from "./liste";
import MapContainer from "./mapContainer";

class Container extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          backgroundColor: "#ef6c00",
          margin: 20,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          padding: 5
        }}
      >
        <MapContainer />
        <Liste />
      </div>
    );
  }
}

export default Container;
