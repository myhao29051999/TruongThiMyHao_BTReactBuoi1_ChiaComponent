import React, { Component } from "react";
import Contact from "./Contact";
import ListCard from "./ListCard";

export default class MyContainer extends Component {
  render() {
    return (
      <div className="container">
        <Contact />
        <ListCard />
      </div>
    );
  }
}
