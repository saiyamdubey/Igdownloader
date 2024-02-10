
"use client"

import React from "react";
import Typed from "typed.js";



const words = ["Video ", "Image ", "Reel ", "Audio ", "Profile ", "Story "];

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      cursorChar: "  ",
    };
    this.typed = new Typed(this.el, options);
  }
  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <>
        <span
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}
export default Typing;
