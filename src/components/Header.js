import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-default" role="navigation">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand brand" to="/" >Developers rules</Link>
      </div>

      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li>
            <NavLink to="/" className={({isActive}) => isActive? "active" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/new" className={({isActive}) => isActive? "active" : ""}>New</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
