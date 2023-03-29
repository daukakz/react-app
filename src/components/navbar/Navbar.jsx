import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/dota2hero.png";
import { Link } from "react-router-dom";

const Menu = () => (
  <>
    <p>
      <Link to="/home">Home</Link>
    </p>
    <p>
      <a href="#dota">Current Strategies</a>
    </p>
    <p>
      <a href="#possibility">Analytics</a>
    </p>
    <p>
      <a href="#features">Cases</a>
    </p>
    <p>
      <a href="#blog">Contact</a>
    </p>
    <p>
      <Link to="/account">Account</Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="dota__navbar">
      <div className="dota__navbar-links">
        <div className="dota__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dota__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="dota__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="dota_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="dota__navbar-menu_container scale-up-container">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="dota__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <Link to="/signIn">
                <button type="button">Signs Up</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Navbar }
