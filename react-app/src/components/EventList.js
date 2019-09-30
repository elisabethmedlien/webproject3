import React, { Component } from "react";
import EventCard from "./EventCard.js";

class EventList extends Component {
  state = {
    events: [],
    year: ""
  };

  componentDidMount() {
    this.setState({ year: this.props.year });
    this.getEventList(this.props.year);
  }
  componentWillReceiveProps(nextProps) {
    this.getEventList(nextProps.year);
  }

  getEventList = year => {
    fetch(`http://localhost:5000/events?year=` + year)
      .then(response => response.json())
      .then(response => this.setState({ events: response.data }))
      .catch(err => console.log(err));
  };

  render() {
    return this.state.events.map(event => (
      <EventCard key={event.id} eventTitle={event.title} eventId={event.id} />
    ));
  }
}

export default EventList;
