import React, { Component } from "react";
import { fixDateString, fixTimeString } from '../Functions'


class AdminScheduleItem extends Component {
  state = {
    id: '',
    title: '',
    venue: {
      id: '',
      address: ''
    },
    time: '',
    price: '',
    date: '',
    status: 'unchanged'
  }
  componentDidMount() {
    this.setState({ ...this.state } = this.props.event)
  }
  handleDelete = _ => {
    let body = {
      id: this.state.id
    }
    if (window.confirm('Are you sure you wish to delete this item?')) {
      fetch('http://localhost:5000/event/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
        .then(_ => {
          this.getEventList();
        })
        .catch(err => console.log(err))
    }
  }
  handleChange = (e) => {
    this.setState({ status: 'editing' })
    switch (e.target.name) {
      case 'venue':
        let venue = e.target.value.split('&&&')
        this.setState({ venue: { id: venue[0], address: venue[1] } })
        this.refs.venueIcon.innerHTML = "&#9998;"
        break;
      case 'time':
        this.setState({ time: e.target.value })
        this.refs.timeIcon.innerHTML = "&#9998;"
        break;
      case 'price':
        this.setState({ price: e.target.value })
        this.refs.priceIcon.innerHTML = "&#9998;"
        break;
      case 'date':
        this.setState({ date: e.target.value })
        console.log(this.state.date)
        this.refs.dateIcon.innerHTML = "&#9998;"
        break;
      default:
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let body = {
      id: this.state.id,
      title: this.state.title,
      venue: this.state.venue.id,
      time: this.state.time,
      price: this.state.price,
      date: this.state.date
    }
    console.log(body)

    fetch(`http://localhost:5000/programme/update`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then((response) => {
        response.json()
        this.setState({ status: 'edited' })
        this.refs.title.innerHTML = this.state.title
        this.refs.address.innerHTML = this.state.venue.address
        this.refs.price.innerHTML = this.state.price
        this.refs.time.innerHTML = this.state.time
        this.refs.date.innerHTML = this.state.date
        this.refs.venueIcon.innerHTML = ""
        this.refs.timeIcon.innerHTML = ""
        this.refs.priceIcon.innerHTML = ""
        this.refs.dateIcon.innerHTML = ""
        console.log(this.state)
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <React.Fragment>
        <h4 className="col-md-10 col-sm-10 eventTitleProgramme" ref="title">{this.props.event.title}</h4>
        <div className="elementCardAdmin">

          <div className="row">
            <p className="col-sm-12 col-md-6 col-lg-4">
              <span className="smallHeading">Adresse: </span>
              <span ref="address" >{this.props.event.venue}</span>
            </p>
            <p className="col-lg-2 col-md-6">
              <span className="smallHeading">Tid: </span>
              <span ref="time" >{fixTimeString(this.props.event.time)}</span>
            </p>
            <p className="col-lg-2 col-md-6">
              <span className="smallHeading">Dato: </span>
              <span ref="date">{fixDateString(this.props.event.date)}</span>
            </p>
            <p className="col-lg-2 col-md-6">
              <span className="smallHeading">Pris: </span>
              <span ref="price" >kr. {this.props.event.price}.-</span>
            </p>
            <div className="col-lg-2 ">
              <button
                className="btn  btn-secondary btnInElementAdmin btn-sm  "
                type="button"
                data-toggle="collapse"
                data-target={"#scheduleItemForm" + this.props.event.id}
                aria-expanded="false"
                aria-controls={"scheduleItemForm" + this.props.event.id}
              >
                Rediger
              </button>
            </div>
          </div>

        </div>




        <div className="collapse editScheduleItem" id={"scheduleItemForm" + this.props.event.id}>
          <form className="col-md-8 col-lg-6" onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Adresse</label>
                <select name="venue" className="inputDropdown form-control isEdited" onChange={this.handleChange}>
                  {
                    this.props.venues.map((venue, index) => (
                      <option
                        key={index}
                        value={venue.id + '&&&' + venue.address}
                      >
                        {venue.address}{!venue.capacity ? " (ute/offentlig sted)" : ` (plass til ca. ${venue.capacity})`}
                      </option>
                    ))
                  }
                </select>
                <span className="editIcon col-md-2" ref="venueIcon"></span>
              </div>
              <div className="form-group col-md-6">
                <label>Pris</label>
                <input
                  type="number"
                  name="price"
                  className="form-control isEdited"
                  defaultValue={this.props.event.price}
                  onChange={this.handleChange}
                />
                <span className="editIcon col-md-2" ref="priceIcon"></span>
              </div>

            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Tid</label>
                <input
                  type="time"
                  name="time"
                  className="form-control isEdited"
                  defaultValue={this.props.event.time}
                  onChange={this.handleChange}
                />
                <span className="editIcon col-md-2" ref="timeIcon"></span>
              </div>
              <div className="form-group col-md-6">
                <label>Dato</label>
                <input
                  type="date"
                  name="date"
                  className="form-control isEdited"
                  defaultValue={this.props.event.date}
                  onChange={this.handleChange}
                />
                <span className="editIcon col-md-2" ref="dateIcon"></span>
              </div>
            </div>

            <button type="submit" className="btn btn-info btn-sm">
              Rediger
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }

}

export default AdminScheduleItem;