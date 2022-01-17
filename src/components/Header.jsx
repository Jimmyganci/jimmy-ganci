import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import phone from "../images/phone.png";
import email from "../images/email.png";
import UseElementOnScreen from "../hooks/UseElementOnScreen";

const Header = ({ menu }) => {
  const headerRef = useRef();
  const isVisible = UseElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      treshold: 0.5,
    },
    headerRef
  );

  const menuList = [
    { name: "Accueil", path: "/" },
    { name: "Projets", path: "/portefolio" },
    { name: "Contact", path: "/contact" },
  ];
  const socialItems = [
    {
      logo: phone,
      name: "06 21 45 09 62",
    },
    {
      logo: email,
      name: "jimmy.ganci@gmail.com",
    },
  ];
  return (
    <nav>
      <ul className={`menu ${menu ? "noTranslate" : ""}`}>
        {menuList.map((el, index) => (
          <li key={index}>
            <NavLink
              ref={headerRef}
              to={el.path}
              className={(navData) => (navData.isActive ? "selectMenu" : "")}
              style={{
                top: isVisible && "0",
                transitionDelay: `${index / 7}s`,
              }}
            >
              {el.name}
            </NavLink>
          </li>
        ))}
        <div className="menu__social">
          {socialItems.map((el, index) => (
            <a key={index} href="">
              <img src={el.logo} alt="social" />
              <p>{el.name}</p>
            </a>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Header;
