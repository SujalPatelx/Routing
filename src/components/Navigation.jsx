import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="logo">TECHKUT</div>
        <div className="nav-links">
          <HashLink to={"/#home"} className="nav-home">
            Home
          </HashLink>
          <HashLink className="nav-about" to={"/#about"}>
            About
          </HashLink>
          <Link className="nav-contact" to={"/Contact"}>
            Contact
          </Link>
          <HashLink className="nav-agreement" to={"/#agreement"}>
            Agreement
          </HashLink>
          <Link className="nav-login" to={"/Login"}>
            Services
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
