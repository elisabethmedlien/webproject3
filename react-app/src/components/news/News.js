import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import NewsCards from "../NewsCards";
import {NavLink} from "react-router-dom";
import "../../styles/news.css";
class News extends Component {
  state = {
    years: [],
    year: ''
  };
  componentDidMount() {
    this.getYearList();
    let year = this.props.match.params.year;
    this.setState({ year: year })
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.year !== prevState.year) {
      return { year: nextProps.match.params.year };
    }
    else {
      return null;
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.year !== this.state.year) {
      this.getYearList();
    }
  }
  getYearList = _ => {
    fetch(`http://localhost:5000/newsYearList`)
      .then(response => response.json())
      .then(response => this.setState({ years: response }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="vh-85">
            <div className="newsSection">
              <div className="container mx-auto ">
                <h2 className="pageTitle">Nyheter</h2>
                <hr className="hrHeight" />
                <div className="newsYearLinks row">
                  {this.state.years.map(function (year) {
                    return (
                      <NavLink
                        className=" newsYearLink"
                        to={"/nyheter/" + year.year}
                        key={year.year}
                      >
                        {year.year}
                      </NavLink>
                    );
                  })}
                </div>
                <div className="row ">
                  <NewsCards year={this.state.year} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default News;
