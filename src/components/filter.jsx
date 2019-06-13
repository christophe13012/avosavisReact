import React, { Component } from "react";
import { dessinNote } from "./../utils";
import Select from "./select";

class Filter extends Component {
  options = [1, 2, 3, 4, 5];
  render() {
    const { min, max, onChangeMin, onChangeMax } = this.props;
    return (
      <div className="container" style={{ marginBottom: 10 }}>
        De
        <Select options={this.options} value={min} onChange={onChangeMin} />
        à
        <Select options={this.options} value={max} onChange={onChangeMax} />
        <span style={{ marginLeft: 3 }}>{dessinNote(1)}</span>
        {min > max && (
          <div
            style={{ padding: 3, textAlign: "center" }}
            className="alert alert-danger"
          >
            <strong>Filtre invalide</strong>
          </div>
        )}
      </div>
    );
  }
}

export default Filter;
