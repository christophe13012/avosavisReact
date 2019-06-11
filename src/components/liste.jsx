import React, { Component } from "react";

class Liste extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "25%", textAlign: "left" }}>
        <h5 style={{ color: "ghostwhite", textAlign: "center", marginTop: 10 }}>
          Liste de restaurant
        </h5>
        <p style={{ color: "ghostwhite", marginLeft: 10, marginBottom: 5 }}>
          Filtrer selon les notes :
        </p>
        <div className="container">
          <div className="row mb-1">
            <div className="col-12">
              <select className="form-control form-control-sm" id="sel1">
                <option value="1">Note minimum : 1</option>
                <option value="2">Note minimum : 2</option>
                <option value="3">Note minimum : 3</option>
                <option value="4">Note minimum : 4</option>
                <option value="5">Note minimum : 5</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <select className="form-control form-control-sm" id="sel2">
                <option value="1">Note maximum : 1</option>
                <option value="2">Note maximum : 2</option>
                <option value="3">Note maximum : 3</option>
                <option value="4">Note maximum : 4</option>
                <option value="5">Note maximum : 5</option>
              </select>
            </div>
          </div>
        </div>
        <hr style={{ backgroundColor: "ghostwhite", marginLeft: 6 }} />
      </div>
    );
  }
}

export default Liste;
