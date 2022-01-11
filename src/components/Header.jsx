import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to="/portefolio"> Portefolio</Link>
        </li>
        <li>
          <Link to="/"> Accueil</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
