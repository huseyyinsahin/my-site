import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { HiCode } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { FaFileCode } from "react-icons/fa";
import "../style/Navbar.css";

function Navbar() {
  return (
    <header className="header-container">
      <div className="header-div">
        <div className="title-div">
          <Link className="title-h1" to="/">
            <h1>
              Hüseyin <HiCode className="h1-i" />
            </h1>
          </Link>
        </div>
        <nav className="menu-nav">
          <Link className="menu-a" to="/#home">
            <p>
              <FaHome className="i" /> Home
            </p>
          </Link>
          <Link className="menu-a" to="/#about-h2">
            <p>
              <FaAddressCard className="i" /> About
            </p>
          </Link>
          <Link className="menu-a" to="/#skills-h2">
            <p>
              <IoIosRocket className="i" /> Skills
            </p>
          </Link>
          <Link className="menu-a" to="/#contact">
            <p>
              <RiContactsFill className="i" /> Contact
            </p>
          </Link>
          <Link className="menu-a" to="/myprojects">
            <p>
              <FaFileCode className="i" /> My Projects
            </p>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
