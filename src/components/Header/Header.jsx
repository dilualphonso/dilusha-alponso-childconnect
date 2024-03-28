
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Header.scss";
import "../../App";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/daycares");

  const handleNavigation = (path) => {
    navigate(path);
    setActiveLink(path);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo-container">
          <Link
            to="/"
            className="header__logo-link"
            onClick={() => handleNavigation("/")}
          >
            <p   className="header__logo-image">ChildcareConnect


            </p>
          </Link>
        </div>
        <ul className="header__button-container">
          <li
            className={`header__link-button ${
              location.pathname === "/" || activeLink.includes("/daycares")
                ? "active"
                : ""
            }`}
          >
            <Link
              to="/daycares"
              className="header__link"
              onClick={() => handleNavigation("/daycares")}
            >
              Daycare
            </Link>
          </li>
          <li
            className={`header__link-button ${
              activeLink.includes("/signup") ? "active" : ""
            }`}
          >
            <Link
              to="/signup"
              className="header__link"
              onClick={() => handleNavigation("/signup")}
            >
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
