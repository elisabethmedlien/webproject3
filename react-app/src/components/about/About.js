import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/about.css";

class About extends Component {
  state = {
    generalInfo: [],
    partners: [],
    festivalReports: []
  };

  componentDidMount() {
    this.getGeneralInfo();
    this.getPartners();
    this.getFestivalReports();
  }

  getGeneralInfo = _ => {
    fetch(`http://localhost:5000/general`)
      .then(response => response.json())
      .then(response => this.setState({ generalInfo: response.data[0] }))
      .catch(err => console.error(err));
  };

  getPartners = _ => {
    fetch(`http://localhost:5000/partners`)
      .then(response => response.json())
      .then(response => this.setState({ partners: response.data }))
      .catch(err => console.error(err));
  };

  getFestivalReports = _ => {
    fetch(`http://localhost:5000/festivalreports`)
      .then(response => response.json())
      .then(response => this.setState({ festivalReports: response.data }))
      .catch(err => console.error(err));
  };
  render() {
    /*  the constant "publicCollaborators" iterates through the 
        collaborators and outputs each collaborator that has a 
        type equal to "public" as a list element */
    const officialPartners = this.state.partners.map(function(partner) {
      if (partner.type === "official") {
        return (
          <li key={partner.id} collabtype={partner.type}>
            <i className="fas fa-circle" />
            {partner.partner_name}
          </li>
        );
      }
      return officialPartners;
    });

    /* the constant "localCollaborators" iterates through the 
      collaborators and outputs each collaborator that has a 
      type equal to "local" as a list element */
    const privatePartners = this.state.partners.map(function(partner) {
      if (partner.type === "private") {
        return (
          <li key={partner.id} collabtype={partner.type}>
            <i className="far fa-circle" />
            {partner.partner_name}
          </li>
        );
      }
      return privatePartners;
    });
    /* the constant "reportsNor" iterates through the 
      reports and outputs each report that has language 
      set to "no" as a list element */
    const reportsNor = this.state.festivalReports.map(function(report) {
      if (report.language === "no") {
        return (
          <li key={report.id}>
            <a href={report.link} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-link" />
              {report.title}
            </a>
          </li>
        );
      }
      return reportsNor;
    });
    /* the constant "reportsEng" iterates through the 
      reports and outputs each report that has language 
      set to "en" as a list element */
    const reportsEng = this.state.festivalReports.map(function(report) {
      if (report.language === "en") {
        return (
          <li key={report.id}>
            <a href={report.link} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-link" />
              {report.title}
            </a>
          </li>
        );
      }
      return reportsEng;
    });

    return (
      <div>
        <Navbar />
        <div className="container">
          <h2 className="center pageTitle">Om festivalen</h2> <hr />
          <div className="row">
            <div className="about-vision col-12">
              <h4>Visjon</h4>
              <p>{this.state.generalInfo.vision_txt}</p>
              <p className="greeting">
                Velkommen til Drammen Sacred Music Festival,{" "}
                {this.state.generalInfo.dateHeader_txt}
              </p>
              <hr />
            </div>
          </div>
          <div className="about-collab">
            <h4>Samarbeidspartnere</h4>
            <div className="row">
              <div className="about-collab-public col-sm-12 col-md-6">
                <p>{this.state.generalInfo.partner_txt_official}</p>

                <ul>{officialPartners}</ul>
              </div>
              <div className="about-collab-local col-sm-12 col-md-6">
                <p>{this.state.generalInfo.partner_txt_private}</p>
                <ul>{privatePartners}</ul>
              </div>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="about-organization col-12">
              <h4>Organisering</h4>
              <p>{this.state.generalInfo.organization_txt}</p>
              <hr />
            </div>
          </div>
          <div className="aboutReports row">
            <div className="about-reports col-12">
              <h4>Rapporter fra tidligere festivaler</h4>
            </div>
          </div>
          <div className="row">
            <div className="reports-nor col-sm-12 col-md-6">
              <h6 className="reports-nor-descr">Norske rapporter</h6>{" "}
              <img
                alt="norwegian_flag"
                className="reports-flag"
                src="http://flags.fmcdn.net/data/flags/w580/no.png"
              />
              <ul>{reportsNor}</ul>
            </div>
            <div className="reports-eng col-sm-12 col-md-6">
              <h6 className="reports-eng-descr">Reports in english</h6>{" "}
              <img
                alt="norwegian_flag"
                className="reports-flag"
                src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Great_Britain_%28English_version%29.png"
              />
              <ul>{reportsEng}</ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
