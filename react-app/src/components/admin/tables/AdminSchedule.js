import React, { Component } from 'react';
import AdminScheduleItem from '../AdminScheduleItem';
import {fixDateString} from '../../Functions'


class AdminSchedule extends Component {
  state = {
    days: [],
    venues: []
  };

  componentDidMount() {
    this.getVenues()
  }

  getVenues = _ => {
    fetch('http://localhost:5000/venues')
    .then(response => response.json())
    .then((response) => {
      this.getProgramme(response)
    })
    .catch(err => {
      throw err;
    })
  }

  getProgramme = (venues) => {
    let date = new Date()
    let year = date.getFullYear()
    fetch('http://localhost:5000/programme?year=' + year)
    .then(response => response.json())
    .then((response) => {
      this.mapDays(response, venues);
    })
    .catch(err => {
      throw err;
    });
  };

  mapDays = (json, venues) => {
    let days = [];

    for (let i = 0; i < json.length; i++) {
      //Populates event with values from json object
      let event = {};
      event.id = json[i].id
      event.title = json[i].title
      event.venue = json[i].address
      event.payment_link = json[i].payment_link
      event.time = json[i].time
      event.price = json[i].price
      event.date = json[i].date

      //Check if date in json object already exists in days array
      let dateExists = false;
      for (let j = 0; j < days.length; j++) {
        if (json[i].date === days[j].date) {
          // If date matches existing date
          //shove object with event data into that date's event array
          
          days[j].events.push(event);
          dateExists = true;
          break;
        }
      }
      if (dateExists === false) {
        //If date does not exist in dates array
        //create date object and push it into days array
        let date = {};
        date.date = json[i].date;
        let weekDay = new Date(json[i].date).getDay(); //Creates a numeric value representing the week day of that date

        //Sets weekDay to a string value based on its numeric value
        switch (weekDay) {
          case 0:
            weekDay = "Søndag";
            break;
          case 1:
            weekDay = "Mandag";
            break;
          case 2:
            weekDay = "Tirsdag";
            break;
          case 3:
            weekDay = "Onsdag";
            break;
          case 4:
            weekDay = "Torsdag";
            break;
          case 5:
            weekDay = "Fredag";
            break;
          case 6:
            weekDay = "Lørdag";
            break;
          default:
            weekDay = "";
        }
        date.day = weekDay;
        date.events = [event];
        days.push(date);
      }
    }
    this.setState({ days: days, venues: venues });
  };
  render() {
    return (
      <div className="container tablesAdmin col-md-9 col-lg-10">
        {
          this.state.days.map((day, index) => (
            <div className="containerScheduleElements" key={index}>
              <h2 className="dayDateTitleSchedule">{day.day} {fixDateString(day.date)}</h2>
              {
                day.events.map(event => (
                  <AdminScheduleItem key={event.id} event={event} venues={this.state.venues} />
                ))
              }
            </div>
          ))
        }
      </div>

    );
  }
}

export default AdminSchedule;