import React, { Component } from "react";



class AdminLogin extends Component {
    state = {
        errorMsg: false
    };
    //Function that tries to logg in the user
    handleLogin = (e) => {
        e.preventDefault()
        let body = {
            email: this.refs.emailLogin.value,
            password: this.refs.pwdLogin.value,
        }
        fetch(`http://localhost:5000/adminLogin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
            .then(response => response.status >= 400 ?
                this.setState({ errorMsg: 'true' }) : response.json().then((token) =>
                    localStorage.setItem('login-jwt', token.token)).then(window.location.href = '/admin/events'))//lagrer token i local storage
            .catch(err => console.log(err))
    }
    render() {
        return (
            <React.Fragment>
                <div className="loginForm col-md-6 col-lg-4">
                    <div className="card loginFormCard ">
                        <div className="card-header text-center loginHeader">
                            <h2 >Logg inn</h2>
                        </div>
                        <div className="card-body loginFormBody">
                            <form onSubmit={this.handleLogin}>
                                <div className="form-group">
                                    <label className="labelLoginForm">E-post</label>
                                    <input type="email" className="form-control" ref="emailLogin" placeholder="Skriv inn e-post" required />
                                </div>
                                <div className="form-group">
                                    <label className="labelLoginForm" >Passord</label>
                                    <input type="password" className="form-control" ref="pwdLogin" placeholder="Passord" required />
                                </div>
                                {this.state.errorMsg ? <div className="alert alert-danger">
                                    Feil brukernavn eller passord
                                </div> : null}
                                <button type="submit" className="btn pull-right submitFormLogin ">Logg inn</button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default AdminLogin;