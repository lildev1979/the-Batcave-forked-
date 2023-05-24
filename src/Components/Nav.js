import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = function (event) {
    let scrollTop = event.srcElement.body.scrollTop;
    console.log(window.pageYOffset);
    setIsScrolled(window.pageYOffset >= 2);
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrolltext = `Scroll Pos: ${scrollPosition}`;
  return (
    <nav className={`Nav-Container ${isScrolled ? "Active" : ""}`}>
      <Link to="/home" className="Nav-Logo"></Link>
      <div className="Nav-Links">
        <ul className="Nav-Link-List">
          <li className="Nav-Link">{scrolltext}</li>
          <li className="Nav-Link">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="Nav-Web3">web3connect</div>
    </nav>
  );
}
