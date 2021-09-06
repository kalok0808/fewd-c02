import React, { Component } from "react";
import Navbar from "./Navbar";

class Counter extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <video
          src="./img/production ID_4287656.mp4"
          muted
          loop
          autoplay
        ></video>
        <div class="overlay"></div>
        <div class="text">
          <h2>Hello,</h2>
          <h2>My Name is</h2>
          <h2>Isabel</h2>
          <p>``Enjoy your every single messy day``</p>
          <a href="./about_me/about_me.html">About me</a>
        </div>
      </div>
    );
  }
}

export default Counter;
