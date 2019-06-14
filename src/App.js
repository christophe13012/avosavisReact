import React from "react";
import "./App.css";
import Header from "./components/header";
import Container from "./components/container";

function App() {
  return (
    <div className="App" style={{ padding: 10 }}>
      <Header />
      <Container />
    </div>
  );
}

export default App;
