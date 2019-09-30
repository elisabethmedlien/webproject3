import React, { Component } from "react";
import { Link } from 'react-router-dom';

class EventCard extends Component {
  render() {
    return (
      <div className=" col-sm-6 col-md-6 col-lg-4">
        <Link to={'/arrangement/' + this.props.eventId}>
          <div
            onMouseOver={this.mouseOverImg.bind(this)}
            onMouseOut={this.mouseOutImg.bind(this)}
            className="artistDiv "
          >
            <img
              className="thumbArtist"
              src={require('../uploadedImg/eventImg/' + this.props.eventId)}
              alt="artist"
            />
            <div className="overlay"></div>
            <div id={'eventCard' + this.props.eventId}>
              <p className="shortDescr"></p>
              <h4 className="artistName" >
                {this.props.eventTitle}
              </h4>
            </div>
          </div>
        </Link>
      </div >
    );
  }
  mouseOverImg() {
    const id = 'eventCard' + this.props.eventId;
    document.getElementById(id).firstChild.innerHTML = this.props.eventTitle;
    document.getElementById(id).firstChild.nextSibling.innerHTML = "";
    document.getElementById(id).previousSibling.style.backgroundColor = "black";
  }
  mouseOutImg() {
    const id = 'eventCard' + this.props.eventId;
    document.getElementById(id).firstChild.innerHTML = "";
    document.getElementById(id).firstChild.nextSibling.innerHTML = this.props.eventTitle;
    document.getElementById(id).previousSibling.style.backgroundColor = "";
  }
}

export default EventCard;
