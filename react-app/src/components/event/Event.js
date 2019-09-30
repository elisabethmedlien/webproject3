//Event page
//mye fix her når database kommer
import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScheduleItem from "../ScheduleItem";
import EventVideo from "./EventVideo";
import {fixLineBreaks} from "../Functions"
import {FacebookShareButton, FacebookIcon} from 'react-share'
import "../../styles/event.css";

class Event extends Component {
  state = {
    id: null,
    eventData: [
      {
        id: "",
        title: "",
        text: [],
        img_path: "",
        date: "",
        youtube_link: "",
        payment_link: "",
        address: "",
        price: ""
      }
    ],
    yt_vid: []
  };
  componentDidMount() {
    console.log(window.location.href)
    let id = this.props.match.params.eventId;
    this.getEventData(id);
    window.scrollTo(0, 0);
  }

  getEventData = id => {
    fetch(`http://localhost:5000/event?id=` + id)
      .then(response => response.json())
      .then(response => {
        response[0].text = fixLineBreaks(response[0].text)
        this.setState({ eventData: response })
        console.log(response[0])
      })
      .then(response => this.getYTID(response))
      .catch(err => console.log(err));
  };

  getYTID() {
    if (
      this.state.eventData[0].youtube_link !== null &&
      this.state.eventData[0].youtube_link !== ""
    ) {
      let yt_link = this.state.eventData[0].youtube_link;
      var regex = new RegExp("(?<=v=)()(.*$)");
      var yt_vid = regex.exec(yt_link)[0];
      return this.setState({ yt_vid: yt_vid });
    } else {
      return this.setState({ yt_vid: "" });
    }
  }

  showScheduleItem() {
    //let givenDate = this.state.eventData[0].date;
    let str = this.state.eventData[0].date;
    let newstr = str.split("-");
    let dd = newstr[0];
    let mm = newstr[1];
    let yy = newstr[2];
    let newDateFormat = "20" + yy + "/" + mm + "-" + dd;
    let givenDate = newDateFormat;
    let currentDate = new Date();
    givenDate = new Date(givenDate);
    // if the date of the event has passed or is today..
    if (givenDate > currentDate || givenDate === currentDate) {
      // ..we output the ScheduleItem component for the event.
      return (
        <ScheduleItem key={this.state.id} event={this.state.eventData[0]} />
      );
    }
  }

  render() {
    const event = this.state.eventData[0] ? (
      <div className="container">
        <div className="vh-85">
          <h2 className="event-title">{this.state.eventData[0].title}</h2>
          <p className="event-date">{this.state.eventData[0].date}</p>
          <hr className="event-hr" />
          {this.showScheduleItem()}
          <EventVideo
            vidurl={this.state.yt_vid}
            title={this.state.eventData[0].title}
            imgpath={this.state.eventData[0].img_path}
            id={this.state.eventData[0].id}
          />
          <article>
            {
              this.state.eventData[0].text.map((paragraph, index) => (
                <p key={index} className="event-text">{paragraph}</p>
              ))
            }
          </article>
          <div className="centerShareButton">
            <FacebookShareButton
              url={window.location.href}
              >
              <FacebookIcon
                url={window.location.href}
                size={60}
                round={true} />
            </FacebookShareButton>
          </div>
        </div>
      </div>
    ) : (
      <div className="errorDiv container">
        <div className="vh-85">
          <h1 className="sadSmilyError">&#x2639;</h1>
          <h1 className="txt404">404</h1>
          <h3>Page not found</h3>
          <p>
            The page you are looking for doesn't exist or an other error
            occured.
          </p>
        </div>
      </div>
    );
    return (
      <div>
        <Navbar />
        {event}
        <Footer />
      </div>
    );
  }
}

export default Event;
