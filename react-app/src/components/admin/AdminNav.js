import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class AdminNav extends Component {
  state = {
    userType: 'Admin'
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg  navbar-dark adminSideBarNav col-md-3 col-lg-2">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul>
            <li className=" nav-item linkToHome">
              <NavLink className="linkTxt" exact to="/">
                Vis nettsted
              </NavLink>
            </li>
            <li className="nav-item py-1">
              <NavLink className="linkTxt" to="/admin/events">
                Arrangement
              </NavLink>
            </li>
            <li className="nav-item py-1">
              <NavLink className="linkTxt" to="/admin/venues">
                Adresser
              </NavLink>
            </li>
            <li className="nav-item py-1" >
              <NavLink className="linkTxt" to="/admin/schedule">
                Program
              </NavLink>
            </li>
            <li className="nav-item py-1">
              <NavLink className="linkTxt" to="/admin/posts">
                Nyheter
              </NavLink>
            </li>
            <li className="nav-item py-1">
              <NavLink className="linkTxt" to="/admin/review">
                Tilbakeblikk
              </NavLink>
            </li>
            <li className="nav-item py-1">
              <NavLink className="linkTxt" to="/admin/general">
                Generelt
              </NavLink>
            </li>
            <li className="nav-item py-1">
              <NavLink className="linkTxt" to="/admin/users">
                Brukere
              </NavLink>
            </li>
            <li className="nav-item py-1">
              <NavLink className="linkTxt" to="/admin/settings">
                Innstillinger
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default AdminNav;