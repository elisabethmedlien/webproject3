import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {
    prevYears: []
  };

  componentDidMount = () => {
    fetch("http://localhost:5000/navbar")
      .then(response => response.json())
      .then(({ data }) => {
        this.setState({ prevYears: data });
      })
      .catch(err => {
        throw err;
      });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbarFront">
        <NavLink to="/">
          <img
            className="logoNav"
            src={require("../img/logo.png")}
            alt="logo"
          />
        </NavLink>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Hjem
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/program">
                Program
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/live">
                Live
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nyheter">
                Nyheter
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/tilbakeblikk"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Tilbakeblikk
              </NavLink>
              <div
                className="dropdown-menu divYearsNav"
                aria-labelledby="navbarDropdown"
              >
                {this.state.prevYears.map(year => (
                  <Link
                    key={year.year}
                    className="dropdown-item linkYear"
                    to={"/tilbakeblikk/" + year.year}
                  >
                    {year.year}
                  </Link>
                ))}
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/om-oss">
                Om oss
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/kontakt">
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
