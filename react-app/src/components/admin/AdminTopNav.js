import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'


const AdminTopNav = (props) => {
    function loggout() {
        localStorage.removeItem('login-jwt');
        //withRouter(({ history }) => (history.push('/admin')))
        window.location.href = '/admin';

    }
    return (
        <nav className="navbar navbar-expand-lg fixed-top navTopAdmin navbar-dark">
            <div className="container-fluid">
                <Link to="/"><img className="logoNav" src={require('../../img/logo.png')} alt="logo" /></Link>
                <div id="navbarNavAdmin">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {localStorage.getItem('login-jwt') ? <button className="btn btn-outline-light" onClick={loggout}>Logg ut</button> : null}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default AdminTopNav;