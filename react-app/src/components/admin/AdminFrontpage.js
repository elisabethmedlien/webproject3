// AdminFrontpage
import React, { Component } from "react";
class AdminFrontpage extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let body = {
      pitch: this.refs.editPitch.value,
      dateHeader_txt: this.refs.editDateHeaderTxt.value
    };
    // sends 'body'-object to general/frontpageUpdate to update the database
    fetch(`http://localhost:5000/general/frontpageUpdate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(_ => {
        this.props.getAboutData();
      })
      .catch(err => console.log(err));
  };
  render() {
    const { props } = this;
    return (
      <React.Fragment>
        <form
          name="editFrontPage"
          className="col-md-8 col-lg-6"
          onSubmit={this.handleSubmit}
        >
          <div className="form-row">
            <div className="form-group col-md-12">
              <label>Forsidetekst</label>
              <textarea
                className="form-control"
                defaultValue={props.about.pitch}
                ref="editPitch"
              />
            </div>
            <div className="form-group col-md-12">
              <label>Festivaldato</label>
              <input
                className="form-control"
                defaultValue={props.about.dateHeader_txt}
                ref="editDateHeaderTxt"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-info btn-sm">
            Lagre
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default AdminFrontpage;
