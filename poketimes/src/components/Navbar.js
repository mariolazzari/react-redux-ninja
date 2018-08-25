import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  console.log(props);

  return (
    <div>
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <a className="brand-logo">Poke times</a>
          <ul className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

// withRoute => higher order function that applies router properties to current one (non included in route tag)
export default withRouter(Navbar);
