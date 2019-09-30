// AdminFestivalReport
import React, { Component } from "react";
class AdminFestivalReport extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let body = {
      id: this.props.report.id,
      title: this.refs.editReportTitle.value,
      link: this.refs.editReportLink.value,
      language: this.props.report.language
    };
    // sends 'body'-object to festivalreports/update to update the database
    fetch(`http://localhost:5000/festivalreports/update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(_ => {
        this.props.getReports();
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.props.report.language = e.target.value;
  };
  render() {
    const { props } = this;
    return (
      <React.Fragment>
        <div className="listReports">
          <hr />
          <p className="festivalReportTitle">{props.report.title}</p>
          <button
            name="deleteReport"
            className="btn btn-sm btn-danger btnInElementAdmin"
            onClick={e => {
              props.handleDelete(e, props.report.id);
            }}
          >
            Slett
          </button>
          <button
            className="btn btn-secondary btnInElementAdmin btn-sm"
            type="button"
            data-toggle="collapse"
            data-target={"#reportForm" + props.report.id}
            aria-expanded="false"
            aria-controls={"reportForm" + props.report.id}
          >
            Rediger
          </button>

          <div
            className="collapse editReports col-md-8 offset-2"
            id={"reportForm" + props.report.id}
          >
            <form
              className="row m-3"
              name="editReport"
              onSubmit={this.handleSubmit}
            >
              <div className="col-md-4">
                <label>Tittel</label>
                <input
                  className="form-control"
                  ref="editReportTitle"
                  defaultValue={props.report.title}
                />
              </div>
              <div className="col-md-5">
                <label>Link</label>
                <input
                  className="form-control"
                  ref="editReportLink"
                  defaultValue={props.report.link}
                />
              </div>
              {/* checks the value of the report language*/}
              {props.report.language === "no" ? (
                /* outputs radiobutton 'no' as defaultChecked
                   if language is set to 'no'*/
                <div className="col-md-3">
                  <label className="lanLabel ">Språk</label>
                  <div className="d-inline-block float-left">
                    <input
                      type="radio"
                      id="no"
                      name="editReportLanguage"
                      value="no"
                      onChange={this.handleChange}
                      defaultChecked
                    />
                    <label className="radiobtnLabel" htmlFor="no">
                      Norsk
                    </label>
                  </div>
                  <div className="d-inline-block float-right">
                    <input
                      type="radio"
                      id="en"
                      name="editReportLanguage"
                      value="en"
                      onChange={this.handleChange}
                    />
                    <label className="radiobtnLabel" htmlFor="en">
                      Engelsk
                    </label>
                  </div>
                </div>
              ) : (
                /* outputs radiobutton 'en' as defaultChecked
                   if language is set to 'en'*/
                <div className="col-md-3">
                  <label className="lanLabel ">Språk</label>
                  <div className="d-inline-block float-left">
                    <input
                      type="radio"
                      id="no"
                      name="editReportLanguage"
                      value="no"
                      onChange={this.handleChange}
                    />
                    <label className="radiobtnLabel" htmlFor="no">
                      Norsk
                    </label>
                  </div>
                  <div className="d-inline-block float-right">
                    <input
                      type="radio"
                      id="en"
                      name="editReportLanguage"
                      value="en"
                      onChange={this.handleChange}
                      defaultChecked
                    />
                    <label className="radiobtnLabel" htmlFor="en">
                      Engelsk
                    </label>
                  </div>
                </div>
              )}
              ;
              <div className="col-md-12 float-left mb-3 mt-1">
                <button type="submit" className="btn btn-info btn-sm">
                  Lagre
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminFestivalReport;
