import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img alt="Carved Rock Fitness" src="/images/logo.png" />
            </Link>
          </li>
          <li>
            <NavLink
              to="/shoes"
            >
              Shoes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
