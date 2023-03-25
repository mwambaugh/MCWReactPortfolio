import React from "react";
import { Link } from "react-router-dom";

function Nav() {
      return (
        <ul className="flex-row">
          <ul className="mx-1">
            <Link to="/">About Me</Link>
          </ul>
          <ul className="mx-1">
            <Link to="/contactme">Contact Me</Link>
          </ul>
          <ul className="mx-1">
            <Link to="/portfolio">Portfolio</Link>
          </ul>
        </ul>
      );
    } 

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="smile face">
            💸
          </span>
          Marta Wambaugh
        </Link>
      </h1>

      <nav>{Nav()}</nav>
    </header>
  );

export default Nav;