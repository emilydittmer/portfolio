import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Header.scss';

class Header extends Component {
  render() {
    return (
        <header>
          <nav>
            <ul className="nav">
              <li>
                <a href="#">
                  <NavLink to="/" exact activeClassName="active">
                    Home
                  </NavLink>
                </a>
              </li>
              <li>
                <a href="#">
                  <NavLink to="/AboutMe" exact activeClassName="active">
                    About Me
                  </NavLink>
                </a>
              </li>
              <li>
                <a href="#">
                  <NavLink to="/Portfolio" exact activeClassName="active">
                    Portfolio
                  </NavLink>
                </a>
              </li>
            </ul>
          </nav>
        </header>
    );
  }
}

export default Header;