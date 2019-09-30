// Class AdminYouTube
import React, { Component } from "react";
class AdminYouTube extends Component {
  // function for when submit button has been clicked
  handleSubmit = e => {
    e.preventDefault();
    // saves the new changes in object 'body'
    let body = {
      livestream_id: this.refs.livestream_id.value,
      YouTube_API_KEY: this.refs.YouTube_API_KEY.value
    };
    // sends 'body'-object to general/frontpageUpdate to update the database
    fetch(`http://localhost:5000/livestream/update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(_ => {
        this.props.getLivestream();
      })
      .catch(err => console.log(err));
  };
  // function for when fields have been changed

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="col-md-8 col-lg-6">
          <div className="form-group col-md-12 p-0">
            <label>Kanal (ID)</label>
            <input
              className="form-control"
              defaultValue={this.props.livestream.livestream_id}
              ref="livestream_id"
            />
          </div>
          <div className="form-group col-md-12 p-0">
            <label>API nøkkel</label>
            <input
              className="form-control"
              defaultValue={this.props.livestream.YouTube_API_KEY}
              ref="YouTube_API_KEY"
            />
          </div>
          <button type="submit" className="btn btn-info btn-sm">
            Lagre
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default AdminYouTube;
