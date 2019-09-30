import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import EventList from "../EventList";
import Slider from "./Slider";
import {fixLineBreaks} from '../Functions';
import "../../styles/review.css";

class Review extends Component {
  state = {
    year: "",
    textArray: [],
    recordings: [],
    slides: []
  };
  componentDidMount = () => {
    this.getData();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.reviewId !== prevState.year) {
      return { year: nextProps.match.params.reviewId };
    }
    else return null;
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.reviewId !== this.state.year) {
      this.getData();
    }
  }

  getData = _ => {
    let year = this.props.match.params.reviewId;
    fetch(`http://localhost:5000/review?year=` + year)
      .then(response => response.json())
      .then(response => {
        let data = {};
        data.year = year;
        data.textArray = fixLineBreaks(response.data.reviewData[0].text);
        data.slides = response.data.slides;
        data.recordings = response.data.recordings;
        this.setState(data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Slider slides={this.state.slides} />
          <h1 className="yearHeading">{this.state.year}</h1>

          {/*  fix We have to regex body output to add paragraphs/headers if we don't do add html tags during input */}
          <article>
            {
              this.state.textArray.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            }
          </article>
          <div className="container">
            <div className="row">
              {this.state.year !== "" ? (
                <EventList year={this.state.year} />
              ) : null}
            </div>
            <div className="row">
              <div className="col-lg">
                <h3 className="recordingsTitle">Tidligere liveopptak</h3>
              </div>
            </div>
            <div className="list-group">
              {this.state.recordings.map(link => (
                <React.Fragment key={link.id}>
                  <a href={link.link} className="list-group-item list-group-item-action" role="button">{link.name}</a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Review;
