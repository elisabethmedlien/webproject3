import React, { Component } from "react";

class AdminSettings extends Component {
  state = {
    settings: [{ status: "", anniversary: "" }]
  };

  componentDidMount() {
    this.getSettings();
  }

  // function for getting the current settings for status and anniversary from database
  getSettings = _ => {
    fetch(`http://localhost:5000/settings`)
      .then(response => response.json())
      .then(response => this.setState({ settings: response.data[0] }))
      .catch(err => console.log(err));
  };

  // function for updating anniversary to database
  updateAnniversary = e => {
    e.preventDefault();
    let body = {};
    if (e.target.value === "Aktiv") {
      body = { anniversary: "on" };
    } else {
      body = { anniversary: "off" };
    }
    fetch(`http://localhost:5000/settings/updateAnniversary`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(_ => {
        this.getSettings();
      })
      .catch(err => console.log(err));
  };

  // function for updating status to database
  updateStatus = e => {
    e.preventDefault();
    let body = {};
    if (e.target.value === "Aktiv") {
      body = { status: "active" };
    } else {
      body = { status: "inactive" };
    }
    fetch(`http://localhost:5000/settings/updateStatus`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(_ => {
        this.getSettings();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container tablesAdmin col-md-9 col-lg-10">
        <h2 className="settingsHeader">Innstillinger for websiden</h2>
        <div className="col-lg-6 row">
          <div className="col-md-6">
            <span className="settingTxt">Festivalsesong</span>
          </div>
          {/* This condition checks if status is set as active*/}
          {this.state.settings.status === "active" ? (
            /* outputs this if status equals active*/
            <div className="col-lg-6 mb-4">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <input
                  onClick={this.updateStatus}
                  className="btn btn-selected"
                  name="status"
                  value="Aktiv"
                  type="submit"
                />
                <input
                  onClick={this.updateStatus}
                  className="btn btn-secondary"
                  name="status"
                  value="Inaktiv"
                  type="submit"
                />
              </div>
              <small id="helptext" className="form-text text-muted mb-2">
                Velg 'inaktiv' om festivalsesongen er over for i år!
              </small>
            </div>
          ) : (
            /* outputs this if status does not equal active (inactive)*/
            <div className="col-lg-6 mb-4">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <input
                  type="submit"
                  name="status"
                  value="Aktiv"
                  onClick={this.updateStatus}
                  className="btn btn-secondary"
                />
                <input
                  type="submit"
                  name="status"
                  value="Inaktiv"
                  onClick={this.updateStatus}
                  className="btn btn-selected"
                />
              </div>
              <small id="helptext" className="form-text text-muted mb-2">
                Velg 'inaktiv' om festivalsesongen er over for i år!
              </small>
            </div>
          )}

          <div className="col-md-6">
            <span className="settingTxt">Jubileum</span>
          </div>
          {/* This condition checks if anniversary is set as 'on' */}
          {this.state.settings.anniversary === "on" ? (
            /* outputs this if anniversary is equal to 'on' */
            <div className="col-lg-6">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <input
                  className="btn btn-selected"
                  type="submit"
                  name="anniversary"
                  value="Aktiv"
                  onClick={this.updateAnniversary}
                />
                <input
                  className="btn btn-secondary"
                  type="submit"
                  name="anniversary"
                  value="Inaktiv"
                  onClick={this.updateAnniversary}
                />
              </div>
              <small id="helptext" className="form-text text-muted">
                Velg 'aktiv' om festivalen har jubileum!
              </small>
            </div>
          ) : (
            /* outputs this if anniversary does not equal 'on' (off)*/
            <div className="col-lg-6">
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <input
                  className="btn btn-secondary"
                  type="submit"
                  name="anniversary"
                  value="Aktiv"
                  onClick={this.updateAnniversary}
                />
                <input
                  className="btn btn-selected"
                  type="submit"
                  name="anniversary"
                  value="Inaktiv"
                  onClick={this.updateAnniversary}
                />
              </div>
              <small id="helptext" className="form-text text-muted">
                Velg 'aktiv' om festivalen har jubileum!
              </small>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AdminSettings;
