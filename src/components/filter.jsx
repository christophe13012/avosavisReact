import React from "react";
import { dessinNote } from "./../utils";
import Select from "./select";

const Filter = ({ min, max, onChange }) => {
  const options = [1, 2, 3, 4, 5];
  return (
    <div className="container" style={{ marginBottom: 10 }}>
      De
      <Select options={options} value={min} name="min" onChange={onChange} />
      à
      <Select options={options} value={max} name="max" onChange={onChange} />
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
};

export default Filter;
