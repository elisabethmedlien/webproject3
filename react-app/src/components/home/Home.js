import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import EventList from "../EventList";
import Timeline from "../anniversary/Timeline";
import "../../styles/home.css";
import "../../styles/anniversary.css"
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    year: '',
    content: {}
  }

  componentDidMount = () => {
    this.getData()
  }
  getData = () => {
    fetch("http://localhost:5000/home")
      .then(response => response.json())
      .then(response => {
        this.checkStatus(response.data[0])
      })
      .catch(err => console.log(err));
  }
  checkStatus = (data) => {
    let content = {}
    let date = new Date();
    let year = date.getFullYear();

    //content for no anniversary
    content.anniversary = (data.anniversary === "on" ? true : false)
    content.pitch = data.pitch
    if (data.status === "active") {
      content.status = "active"
      content.date = data.dateHeader_txt
      this.setState({ year: year, content: content })
    }
    else {
      content.status = "inactive"
      fetch('http://localhost:5000/home/latestReview')
        .then(response => response.json())
        .then(response => {
          content.latestReview = response[0].year
          this.setState({ year: year, content: content })
        })

    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="headerImage">
          <div className="container-fluid contentHeader  col-12 col-sm-10 col-lg-8 col-md-8 col-xl-6 ">
            <img className="logoImg  col-sm-12 col-md-5 " src={require('../../img/logo.png')} alt="logo" />
            <p className="headerText pitch">{this.state.content.pitch}</p>
            {
              this.state.content.status === "active" 
              ? 
              <p className="dateHeader">{this.state.content.date}</p>
              :
              <>
                <h1 className="bigHeaderHome">Takk for i år!</h1>
              </>
            }

            {
              this.state.content.anniversary === true && (
                <div className="row col-md-8 btnHeaderDiv">
                  <Link to="/jubileum" className="btnHeader btn col-sm-12 col-md-10 col-lg-5">10-års jubileum!</Link>
                </div>
              )
            }
            {
              this.state.content.status === "active" 
              ?
              <div className="row col-md-8 btnHeaderDiv">
                <Link to="/program" className="btnHeader btn col-sm-12 col-md-10 col-lg-5">Program</Link>
                <a href="#eventsHome" className="btnHeader btn col-sm-12 col-md-10 col-lg-5">Lineup</a>
              </div>
              :
              <div className="row col-md-8 btnHeaderDiv">
                <Link to={"/tilbakeblikk/" + this.state.content.latestReview} className="btnHeader btn col-sm-12 col-md-10 col-lg-5">Tilbakeblikk!</Link>
              </div>
            }
          </div>
          <div className="container mx-auto" id="eventsHome">
            {
              // Display event cards if the page has active status 
              this.state.content.status === "active" && <div className="row "><EventList year={this.state.year} /></div>
            }
          </div>
          {this.state.content.anniversary === "on" && <Timeline />}
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default Home;