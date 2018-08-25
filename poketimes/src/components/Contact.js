import React from "react";

const Contact = props => {
  // redirect to about page after 2 seconds
  setTimeout(() => {
    props.history.push("/about");
  }, 2000);

  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        iste atque accusantium odit temporibus, sapiente explicabo nemo
        aspernatur sed minima consectetur autem dignissimos voluptatibus ad,
        error, maxime illum rem provident.
      </p>
    </div>
  );
};

export default Contact;
