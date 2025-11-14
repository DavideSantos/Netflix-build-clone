import React, { useEffect, useState } from "react";
import "../styles/Nav.css";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <div
          onClick={() => history.push("/")}
          className="nav__logo"
          style={{
            fontSize: "2.5rem",
            fontWeight: "normal",
            color: "#E50914",
            cursor: "pointer",
            fontFamily: "'Bebas Neue', Arial, sans-serif",
            letterSpacing: "0.05em",
          }}>
          NEFLIX
        </div>
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://i.imgur.com/6VBx3io.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
