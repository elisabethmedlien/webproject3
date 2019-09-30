// AdminPartner
import React, { Component } from "react";
class AdminPartner extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let body = {
      id: this.props.partner.id,
      partner_name: this.refs.editPartnerName.value,
      type: this.props.partner.type
    };
    // sends 'body'-object to general/frontpageUpdate to update the database
    fetch(`http://localhost:5000/partners/update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(_ => {
        this.props.getPartners();
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.props.partner.type = e.target.value;
  };
  render() {
    const { props } = this;
    return (
      <React.Fragment>
        <div className="m-1">
          <hr />
          {props.partner.partner_name}
          <button
            name="deletePartner"
            className="btn btn-sm btn-danger btnInElementAdmin"
            onClick={e => {
              props.handleDelete(e, props.partner.id);
            }}
          >
            Slett
          </button>
          <button
            className="btn btn-secondary btnInElementAdmin btn-sm"
            type="button"
            data-toggle="collapse"
            data-target={"#officialPartnerForm" + props.partner.id}
            aria-expanded="false"
            aria-controls={"officialPartnerForm" + props.partner.id}
          >
            Rediger
          </button>
          <div
            id={"officialPartnerForm" + props.partner.id}
            className={
              "collapse col-md-10 offset-r-2 officialPartnerForm" +
              props.partner.id
            }
          >
            <form
              name="editPartner"
              className="row m-3"
              onSubmit={this.handleSubmit}
            >
              <div className="col-md-5">
                <label>Navn på samarbeidspartner</label>
                <input
                  className="form-control"
                  ref="editPartnerName"
                  defaultValue={props.partner.partner_name}
                />
              </div>
              {/* checks the value of the report language*/}
              {props.partner.type === "private" ? (
                /* outputs radiobutton 'private' as defaultChecked
                   if type is set to 'private'*/
                <div className="col-md-7">
                  <label className="col-md-7 d-block">Type partner:</label>

                  <div className="col-md-4 offset-l-2 d-inline-block">
                    <input
                      type="radio"
                      id="private"
                      name="editPartnerType"
                      value="private"
                      defaultChecked
                      onChange={this.handleChange}
                    />
                    <label htmlFor="private">Lokal</label>
                  </div>
                  <div className="col-md-4 offset-r-2 float-right">
                    <input
                      type="radio"
                      id="official"
                      name="editPartnerType"
                      value="official"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="official">Offentlig</label>
                  </div>
                </div>
              ) : (
                /* outputs radiobutton 'official' as defaultChecked
                   if type is set to 'official'*/
                <div className="col-md-7">
                  <label className="col-md-7 d-block">Type partner:</label>

                  <div className="col-md-4 offset-l-2 d-inline-block">
                    <input
                      type="radio"
                      id="private"
                      name="editPartnerType"
                      value="private"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="private">Lokal</label>
                  </div>
                  <div className="col-md-4 offset-r-2 float-right">
                    <input
                      type="radio"
                      id="official"
                      name="editPartnerType"
                      value="official"
                      onChange={this.handleChange}
                      defaultChecked
                    />
                    <label htmlFor="official">Offentlig</label>
                  </div>
                </div>
              )}
              <button type="submit" className="btn btn-info btn-sm ml-3 m-1">
                Lagre
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminPartner;
