import React, { Component } from "react";
import AdminUser from "../AdminUser";

class AdminUsers extends Component {
  state = {
    users: [],
  }
  componentDidMount() {
    this.getUserList();
  }
  getUserList = _ => {
    fetch(`http://localhost:5000/adminUsers`)
      .then(response => response.json())
      .then(response => this.setState({ users: response }))
      .catch(err => console.log(err));
  };
  formAfterSubmit = _ => {
    document.getElementById("createUserForm").reset();
    document.getElementById('toggleCreateUserForm').click();
  }
  handleDelete = (id) => {
    let body = {
      id: id
    }
    if (window.confirm('Are you sure you wish to delete this user?')) {
      fetch(`http://localhost:5000/adminUsers/delete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
        .then(function (response) {
          if (response.status >= 400) {
            throw alert('oh no');
          }
        })
        .then(_ => {
          this.getUserList();
        })
        .catch(err => console.log(err))
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let body = {
      name: this.refs.createUserName.value,
      password: this.refs.createUserPassword.value,
      email: this.refs.createUserMail.value,
      type: this.refs.createUserType.value,
    }
    fetch(`http://localhost:5000/adminUsers/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(function (response) {
        if (response.status >= 400) {
          throw alert('oh no');
        }
      })
      .then(_ => {
        this.formAfterSubmit();
      })
      .then(_ => {
        this.getUserList();
      })
      .catch(err => console.log(err))
  }
  check_pass = _ => {
    if (document.getElementById('password').value ===
      document.getElementById('confirm_password').value) {
      document.getElementById('submitUser').disabled = false;
    } else {
      document.getElementById('submitUser').disabled = true;
    }
  }
  render() {
    return (
      <div className="container tablesAdmin col-md-9 col-lg-10" >
        <button
          className="createNewBtn btn btn-sm btn-info"
          id="toggleCreateUserForm"
          type="button"
          data-toggle="collapse"
          data-target='#newUserForm'
          aria-expanded="false"
          aria-controls='newUserForm'>
          Legg til bruker
        </button>

        <div className="collapseForm col-12 collapse" id="newUserForm">
          <form onSubmit={this.handleSubmit} className="col-md-6 col-lg-4" id="createUserForm">
            <div className="form-group ">
              <label>Brukernavn</label>
              <input type="text" className="form-control" ref="createUserName" required />
            </div>
            <div className="form-group ">
              <label>Passord</label>
              <input type="password"
                id="password"
                className="form-control"
                ref="createUserPassword"
                required
                onChange={() => { this.check_pass() }} />
            </div>
            <div className="form-group ">
              <label>Gjenta passord</label>
              <input type="password"
                id="confirm_password"
                className="form-control"
                required
                onChange={() => { this.check_pass() }} />
            </div>
            <div className="form-group ">
              <label>E-post</label>
              <input type="email"
                className="form-control"
                required
                placeholder="address@gmail.com" ref="createUserMail" />
            </div>
            <div className="form-group ">
              <label>Type</label>
              <select className="form-control custom-select" ref="createUserType">
                <option value="admin">admin</option>
                <option value="publisher">journalist</option>
              </select>
            </div>
            <button id="submitUser" type="submit" className="btn btn-info btn-sm ">Send</button>
          </form>

        </div>
        {
          this.state.users.map(user => (
            <AdminUser key={user.id} user={user} handleDelete={this.handleDelete} />
          ))
        }
      </div>
    );
  }
}

export default AdminUsers;