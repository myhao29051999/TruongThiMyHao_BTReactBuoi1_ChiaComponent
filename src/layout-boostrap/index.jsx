import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MyCarousel from "./MyCarousel";
import MyContainer from "./MyContainer";
export default class BTReactBuoi1 extends Component {
  render() {
    return (
      <div>
        <Header />
        <MyCarousel />
        <MyContainer />
        <Footer />
      </div>
    );
  }
}
