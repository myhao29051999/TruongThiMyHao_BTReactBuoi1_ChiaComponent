import React, { Component } from "react";
import CardItem from "./CardItem";

export default class ListCard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          {/* item */}
          <CardItem />
        </div>
        <div className="col-sm-4">
          {/* item */}
          <CardItem />
        </div>
        <div className="col-sm-4">
          {/* item */}
          <CardItem />
        </div>
      </div>
    );
  }
}
