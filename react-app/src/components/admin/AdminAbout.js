// Class AdminAbout
import React, { Component } from "react";
class AdminAbout extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let body = {
      vision_txt: this.refs.editVisionTxt.value,
      organization_txt: this.refs.editOrganizationTxt.value,
      address: this.refs.editContactAddress.value
    };
    // sends 'body'-object to general/aboutUsUpdate to update the database
    fetch(`http://localhost:5000/general/aboutUsUpdate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      //.then(this.props.getAboutData())
      .catch(err => console.log(err));
  };
  render() {
    const { props } = this;
    return (
      <React.Fragment>
        <div className="elementCardAdmin row">
          <p className="col-lg-10">
            <span className="smallHeading">
              Visjon, organisasjon og kontaktadresse
            </span>
          </p>
          <div className="col-lg-2">
            <button
              className="btn  btn-secondary btnInElementAdmin btn-sm"
              type="button"
              data-toggle="collapse"
              data-target="#staticTextForm"
              aria-expanded="false"
              aria-controls="staticTextForm"
            >
              Rediger
            </button>
          </div>
        </div>
        <div className="editScheduleItem collapse" id="staticTextForm">
          <form
            name="editAbout"
            className="col-md-8 col-lg-6"
            onSubmit={this.handleSubmit}
          >
            <div className="form-group">
              <label>Visjon</label>
              <textarea
                className="form-control"
                defaultValue={props.about.vision_txt}
                ref="editVisionTxt"
              />
            </div>
            <div className="form-group">
              <label>Organisasjon</label>
              <textarea
                className="form-control"
                defaultValue={props.about.organization_txt}
                ref="editOrganizationTxt"
              />
            </div>
            <div className="form-group">
              <label>Kontakt Adresse</label>
              <input
                className="form-control"
                defaultValue={props.about.address}
                ref="editContactAddress"
              />
            </div>
            <button
              type="submit"
              className="btn btn-info btn-sm"
              id="generalBtn"
            >
              Lagre
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminAbout;
