import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        iste atque accusantium odit temporibus, sapiente explicabo nemo
        aspernatur sed minima consectetur autem dignissimos voluptatibus ad,
        error, maxime illum rem provident.
      </p>
    </div>
  );
};

export default Rainbow(About);
