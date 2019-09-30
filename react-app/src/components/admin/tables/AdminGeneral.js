import React, { Component } from "react";
import AdminContactPerson from "../AdminContactPerson";
import AdminAbout from "../AdminAbout";
import AdminFrontpage from "../AdminFrontpage";
import AdminYouTube from "../AdminYouTube";
import AdminFestivalReport from "../AdminFestivalReport";
import AdminPartner from "../AdminPartner";

class AdminGeneral extends Component {
  state = {
    about: [],
    contactPersons: [],
    reports: [],
    partners: [],
    livestream: [],
    reportLanguage: [],
    partnerType: [],
    partnerOfficialText: [],
    partnerPrivateText: []
  };

  componentDidMount() {
    this.getContactList();
    this.getAboutData();
    this.getReports();
    this.getPartners();
    this.getLivestreamID();
  }

  getLivestreamID = _ => {
    fetch(`http://localhost:5000/livestream`)
      .then(response => response.json())
      .then(response => this.setState({ livestream: response.data[0] }))
      .catch(err => console.log(err));
  };

  getReports = _ => {
    fetch(`http://localhost:5000/festivalreports`)
      .then(response => response.json())
      .then(response => this.setState({ reports: response.data }))
      .catch(err => console.log(err));
  };
  getPartners = _ => {
    fetch(`http://localhost:5000/partners`)
      .then(response => response.json())
      .then(response => this.setState({ partners: response.data }))
      .catch(err => console.log(err));
  };
  getAboutData = _ => {
    fetch(`http://localhost:5000/general`)
      .then(response => response.json())
      .then(response => this.setState({ about: response.data[0] }))
      .catch(err => console.log(err));
  };
  getContactList = _ => {
    fetch(`http://localhost:5000/contactPersons`)
      .then(response => response.json())
      .then(response => this.setState({ contactPersons: response.data }))
      .catch(err => console.log(err));
  };

  // function for when submit button has been clicked
  handleSubmit = (e, id) => {
    e.preventDefault();
    let body = {};
    switch (e.target.name) {
      case "updatePartnerOfficialText":
        body = {
          partner_txt_official: this.refs.editPartnerOfficialText.value
        };
        // sends 'body'-object to general/frontpageUpdate to update the database
        fetch(`http://localhost:5000/partners/updateOfficialPartnerText`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
          .then(_ => {
            this.getAboutData();
          })
          .catch(err => console.log(err));
        break;
      case "updatePartnerPrivateText":
        body = {
          partner_txt_private: this.refs.editPartnerPrivateText.value
        };
        // sends 'body'-object to general/frontpageUpdate to update the database
        fetch(`http://localhost:5000/partners/updatePrivatePartnerText`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
          .then(_ => {
            this.getAboutData();
          })
          .catch(err => console.log(err));
        break;
      case "addReport":
        body = {
          title: this.refs.createReportTitle.value,
          link: this.refs.createReportLink.value,
          language: this.state.createReportLanguage
        };
        /* sends 'body'-object to festivalreports/add to 
           add new festivalreport to the database     */
        fetch(`http://localhost:5000/festivalreports/add`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
          .then(_ => {
            this.getReports();
          })
          .catch(err => console.log(err));
        break;
      case "addPartner":
        body = {
          partner_name: this.refs.createPartnerName.value,
          type: this.state.createPartnerType
        };
        /* sends 'body'-object to festivalreports/add to 
           add new festivalreport to the database     */
        fetch(`http://localhost:5000/partners/add`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
          .then(_ => {
            this.getPartners();
          })
          .catch(err => console.log(err));
        break;
      default:
    }
  };

  // function for when fields have been edited
  handleChange = e => {
    switch (e.target.name) {
      // cases for partner
      case "createReportLanguage":
        this.setState({ createReportLanguage: e.target.value });
        break;
      case "createPartnerType":
        this.setState({ createPartnerType: e.target.value });
        break;

      default:
    }
  };

  handleDelete = (e, id) => {
    e.preventDefault();
    let body = {};
    switch (e.target.name) {
      case "deleteReport":
        body = {
          id: id
        };
        // sends 'body'-object to general/frontpageUpdate to update the database
        fetch(`http://localhost:5000/festivalreports/delete`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
          .then(_ => {
            this.getReports();
          })
          .catch(err => console.log(err));
        break;
      case "deletePartner":
        body = {
          id: id
        };
        // sends 'body'-object to general/frontpageUpdate to update the database
        fetch(`http://localhost:5000/partners/delete`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
          .then(_ => {
            this.getPartners();
          })
          .catch(err => console.log(err));
        break;
      default:
    }
  };

  render() {
    return (
      <div className="container tablesAdmin col-md-9 col-lg-10">
        <h2>Forside</h2>
        <div>
          <div className="elementCardAdmin row">
            <p className="col-md-10">
              <span className="smallHeading">Forsidetekst og festivaldato</span>
            </p>

            <div className="col-md-2">
              <button
                className="btn btn-secondary btnInElementAdmin btn-sm"
                type="button"
                id="toggleGeneralFormBtn"
                data-toggle="collapse"
                data-target="#frontPageForm"
                aria-expanded="false"
                aria-controls="frontPageForm"
              >
                Rediger
              </button>
            </div>
          </div>
          <div className="collapse editScheduleItem" id="frontPageForm">
            <AdminFrontpage
              key={this.state.about.id}
              about={this.state.about}
              getAboutData={this.getAboutData}
            />
          </div>
          <h2>Om oss</h2>
          <div>
            <AdminAbout
              key={this.state.about.id}
              getAboutData={this.getAboutData}
              about={this.state.about}
            />

            <div className="elementCardAdmin row">
              <p className="col-md-10">
                <span className="smallHeading">Festivalrapporter</span>
              </p>
              <div className="col-md-2">
                <button
                  className="btn btn-secondary btnInElementAdmin btn-sm"
                  type="button"
                  data-toggle="collapse"
                  data-target="#reportsForm"
                  aria-expanded="false"
                  aria-controls="reportsForm"
                >
                  Rediger
                </button>
              </div>
            </div>
            <div className="collapse reportsForm" id="reportsForm">
              <form
                name="addReport"
                className="row addReport"
                onSubmit={this.handleSubmit}
              >
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Navn på rapport"
                    ref="createReportTitle"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Link til rapport"
                    ref="createReportLink"
                    required
                  />
                </div>

                <div className="col-md-3">
                  <div className="col-md-4 float-left">
                    <label>Språk:</label>
                  </div>

                  <div className="col-md-4 d-inline-block">
                    <input
                      type="radio"
                      id="no"
                      value="no"
                      name="createReportLanguage"
                      ref="createReportNo"
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="no">Norsk</label>
                  </div>
                  <div className="col-md-4 float-right">
                    <input
                      type="radio"
                      id="en"
                      name="createReportLanguage"
                      value="en"
                      ref="createReportEn"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="en">Engelsk</label>
                  </div>
                </div>
                <div className="col-md-3">
                  <button
                    type="submit"
                    className="btn btn-info btn-sm float-right"
                  >
                    Legg til ny rapport
                  </button>
                </div>
              </form>
              {this.state.reports.map(report => (
                <AdminFestivalReport
                  key={report.id}
                  report={report}
                  handleDelete={this.handleDelete}
                  getReports={this.getReports}
                />
              ))}
            </div>
            <div className="elementCardAdmin row">
              <p className="col-md-10">
                <span className="smallHeading">Samarbeidspartnere</span>
              </p>
              <div className="col-md-2">
                <button
                  className="btn btn-secondary btnInElementAdmin btn-sm"
                  type="button"
                  data-toggle="collapse"
                  data-target="#partnersForm"
                  aria-expanded="false"
                  aria-controls="partnersForm"
                >
                  Rediger
                </button>
              </div>
            </div>
            <div className="collapse reportsForm" id="partnersForm">
              <form
                name="addPartner"
                className="row addPartner"
                onSubmit={this.handleSubmit}
              >
                <div className="col-md-4">
                  <input
                    ref="createPartnerName"
                    type="text"
                    className="form-control"
                    placeholder="Navn på samarbeidspartner"
                    required
                  />
                </div>

                <div className="col-md-4">
                  <div className="col-md-4 float-left">
                    <label>Type partner:</label>
                  </div>

                  <div className="col-md-4 d-inline-block">
                    <input
                      type="radio"
                      id="private"
                      name="createPartnerType"
                      onChange={this.handleChange}
                      value="private"
                      required
                    />
                    <label htmlFor="no">Lokal</label>
                  </div>
                  <div className="col-md-4 float-right">
                    <input
                      type="radio"
                      id="official"
                      name="createPartnerType"
                      onChange={this.handleChange}
                      value="official"
                    />
                    <label htmlFor="en">Offentlig</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <button
                    type="submit"
                    className="btn btn-info btn-sm float-right"
                  >
                    Legg til ny samarbeidspartner
                  </button>
                </div>
              </form>
              <hr />

              <div className="form-group col-md-12">
                <h5 className="d-inline-block">
                  Offentlige samarbeidspartnere
                </h5>
                <button
                  className="btn btn-secondary btnInElementAdmin btn-sm"
                  type="button"
                  data-toggle="collapse"
                  data-target="#officialPartnerForm"
                  aria-expanded="false"
                  aria-controls="officialPartnerForm"
                >
                  Rediger
                </button>
                <div
                  className="collapse officialPartnerForm col-md-10 mb-5"
                  id="officialPartnerForm"
                >
                  <div
                    key={this.state.about.id}
                    className="form-group col-md-12 p-0 mb-5"
                  >
                    <form
                      name="updatePartnerOfficialText"
                      onSubmit={this.handleSubmit}
                    >
                      <label>Om offentlige samarbeidspartnere</label>
                      <textarea
                        className="form-control"
                        ref="editPartnerOfficialText"
                        defaultValue={this.state.about.partner_txt_official}
                      />
                      <button
                        type="submit"
                        className="btn btn-info btn-sm mt-1"
                      >
                        Lagre
                      </button>
                    </form>
                  </div>

                  {this.state.partners.map(partner => (
                    <div key={partner.id}>
                      {partner.type === "official" ? (
                        <AdminPartner
                          partner={partner}
                          getPartners={this.getPartners}
                          handleDelete={this.handleDelete}
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-group col-md-12">
                <h5 className="d-inline-block">Lokale samarbeidspartnere</h5>
                <button
                  className="btn btn-secondary btnInElementAdmin btn-sm"
                  type="button"
                  data-toggle="collapse"
                  data-target="#localPartnerForm"
                  aria-expanded="false"
                  aria-controls="localPartnerForm"
                >
                  Rediger
                </button>
                <div
                  className="collapse localPartnerForm col-md-10"
                  id="localPartnerForm"
                >
                  <div
                    key={this.state.about.id}
                    className="form-group col-md-12 p-0"
                  >
                    <form
                      name="updatePartnerPrivateText"
                      onSubmit={this.handleSubmit}
                    >
                      <label>Om lokale samarbeidspartnere</label>
                      <textarea
                        className="form-control"
                        ref="editPartnerPrivateText"
                        defaultValue={this.state.about.partner_txt_private}
                      />
                      <button
                        type="submit"
                        className="btn btn-info btn-sm mt-1"
                      >
                        Lagre
                      </button>
                    </form>
                  </div>

                  {this.state.partners.map(partner => (
                    <div key={partner.id}>
                      {partner.type === "private" ? (
                        <AdminPartner
                          partner={partner}
                          handleSubmit={this.handleSubmit}
                          handleChange={this.handleChange}
                          handleDelete={this.handleDelete}
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2>Kontaktpersoner</h2>
              {this.state.contactPersons.map(contact => (
                <AdminContactPerson
                  key={contact.id}
                  contact={contact}
                  getContactList={this.getContactList}
                />
              ))}
            </div>
            <div>
              <h2>Diverse</h2>
              <div className="elementCardAdmin row">
                <p className="col-md-10">
                  <span className="smallHeading">YouTube</span>
                </p>

                <div className="col-md-2">
                  <button
                    className="btn btn-secondary btnInElementAdmin btn-sm"
                    type="button"
                    data-toggle="collapse"
                    data-target="#YTIDForm"
                    aria-expanded="false"
                    aria-controls="YTIDForm"
                  >
                    Rediger
                  </button>
                </div>
              </div>
              <div className="collapse editScheduleItem" id="YTIDForm">
                <AdminYouTube
                  key={this.state.livestream.id}
                  livestream={this.state.livestream}
                  getLivestream={this.getLivestreamID}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminGeneral;
