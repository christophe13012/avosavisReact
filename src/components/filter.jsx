import React, { Component } from "react";

class Filter extends Component {
  state = {};
  render() {
    return (
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
    );
  }
}

export default Filter;
