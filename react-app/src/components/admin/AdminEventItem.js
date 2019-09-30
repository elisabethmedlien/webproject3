import React, { Component } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

class AdminEventItem extends Component {
  // Cropping: https://codesandbox.io/s/72py4jlll6
  state = {
    id: "",
    title: "",
    payment_link: "",
    livestream: "",
    date: "",
    time: "",
    price: "",
    youtube_link: "",
    img: "",
    address: "",
    text: "",
    src: null,
    crop: {
      aspect: 1.5,
      width: 50,
      height: 70,
      x: 0,
      y: 0
    }
  };
  componentDidMount() {
    this.setState(({ ...this.state } = this.props.event));
  }

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
      // console.log(e.target.files[0]);
    }
  };

  onImageLoaded = (image, pixelCrop) => {
    this.imageRef = image;

    // Make the library regenerate aspect crops if loading new images.
    const { crop } = this.state;

    if (crop.aspect && crop.height && crop.width) {
      this.setState({
        crop: { ...crop, height: null }
      });
      //console.log(this.state.crop);
    } else {
      this.makeClientCrop(crop, pixelCrop);
    }
  };

  onCropComplete = (crop, pixelCrop) => {
    this.makeClientCrop(crop, pixelCrop);
  };

  onCropChange = crop => {
    this.setState({ crop });
  };

  async makeClientCrop(crop, pixelCrop) {
    if (this.imageRef && crop.width && crop.height) {
      await this.getCroppedImg(this.imageRef, pixelCrop, "newFile.jpeg");
    }
  }

  getCroppedImg(image, pixelCrop, fileName) {
    const canvas = document.createElement("canvas");
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    // As Base64 string
    const base64Image = canvas.toDataURL("image/jpeg");
    this.setState({ base64Image });
  }

  handleSubmit = e => {
    e.preventDefault();

    const data = new FormData();
    data.append("id", this.props.event.id);
    data.append("youtube_link", this.refs.editEventYoutubeLink.value);
    data.append("title", this.refs.editEventTitle.value);
    data.append("date", this.refs.editEventDate.value);
    data.append("img", this.state.base64Image);
    data.append("price", this.refs.editEventPrice.value);
    data.append("time", this.refs.editEventTime.value);
    data.append("payment_link", this.refs.editEventPaymentLink.value);
    data.append("livestream", this.props.event.livestream);
    data.append("text", this.refs.editEventDescription.value);
    data.append("v_id", this.refs.editEventAddress.value);
    fetch(`http://localhost:5000/event/update`, {
      method: "POST",
      body: data
    })
      .then(_ => {
        // displays the new changes without refreshing the page
        this.props.getEventList();
      })
      .catch(err => console.log(err));
  };

  getImage = id => {
    try {
      return (
        <img
          className="eventImgEdit "
          src={require("../../uploadedImg/eventImg/" + id)}
          alt="eventImg"
        />
      );
    } catch (err) {
      return null;
    }
  };
  handleChange = e => {
    switch (e.target.name) {
      //if name equals 'livestreamradio'..
      case "livestreamradio":
        // .. it sets the value of target in state
        this.props.event.livestream = e.target.value;
        break;
      default:
    }
  };

  render() {
    const { crop, src } = this.state;
    return (
      <React.Fragment>
        <div className="elementCardAdmin row">
          <p className="col-lg-5">
            <span className="smallHeading">Tittel: </span>{" "}
            {this.props.event.title}
          </p>
          <p className="col-lg-4">
            <span className="smallHeading">Dato: </span> {this.props.event.date}
          </p>
          <div className="col-lg-3">
            <button
              className="btn btn-sm btn-danger btnInElementAdmin"
              onClick={e => {
                this.props.handleDelete(e, this.props.event.id);
              }}
            >
              Slett
            </button>
            <button
              className="btn btn-secondary btnInElementAdmin btn-sm"
              type="button"
              data-toggle="collapse"
              data-target={"#event" + this.props.event.id}
              aria-expanded="false"
              aria-controls={"event" + this.props.event.id}
            >
              Rediger
            </button>
          </div>
        </div>
        <div
          className="editScheduleItem collapse"
          id={"event" + this.props.event.id}
        >
          <form className="col-md-8 col-lg-6" onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Tittel</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={this.props.event.title}
                  ref="editEventTitle"
                />
              </div>
              <div className="form-group col-md-6">
                <label>Link til betaling</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={this.props.event.payment_link}
                  ref="editEventPaymentLink"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Dato </label>
                <input
                  className="form-control"
                  defaultValue={this.props.event.date}
                  ref="editEventDate"
                />
              </div>
              <div className="form-group col-md-6">
                <label>Tid</label>
                <input
                  type="time"
                  className="form-control"
                  defaultValue={this.props.event.time}
                  ref="editEventTime"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Pris</label>
                <input
                  type="number"
                  className="form-control"
                  defaultValue={this.props.event.price}
                  min="0"
                  ref="editEventPrice"
                />
              </div>
              <div className="form-group col-md-6">
                <label>Youtube link</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={this.props.event.youtube_link}
                  ref="editEventYoutubeLink"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Bilde</label>
                <div>
                  <input type="file" onChange={this.onSelectFile} />
                </div>
                {src && (
                  <ReactCrop
                    src={src}
                    crop={crop}
                    onImageLoaded={this.onImageLoaded}
                    onComplete={this.onCropComplete}
                    onChange={this.onCropChange}
                  />
                )}
                <div className="imgMargin">
                  {this.getImage(this.props.event.id)}
                </div>
              </div>
              <div className="form-group col-md-6">
                <label>Adresse</label>
                <select className="form-control custom-select">
                  <option ref="editEventAddress" value={this.props.event.v_id}>
                    {this.props.event.v_id}
                  </option>
                  {this.props.venues.map(function(venue) {
                    return (
                      <option key={venue.id} value={venue.id}>
                        {venue.address}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Beskrivelse</label>
              <textarea
                id="textareaNews"
                className="form-control"
                defaultValue={this.props.event.text}
                ref="editEventDescription"
              />
            </div>
            {/* checks the value of the livestream*/}
            {this.props.event.livestream === 1 ? (
              /* outputs the correct radiobutton as defaultchecked
                   if event has a scheduled livestream */
              <div className="form-row p-2 mb-3">
                <div className="form-check form-check-inline mr-5">
                  <input
                    defaultChecked
                    className="form-check-input"
                    name="livestreamradio"
                    type="radio"
                    value="1"
                    onChange={this.handleChange}
                  />
                  <label className="form-check-label">
                    Planlagt Livestream
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    name="livestreamradio"
                    type="radio"
                    value="0"
                    onChange={this.handleChange}
                  />
                  <label className="form-check-label">
                    Ingen planlagt livestream
                  </label>
                </div>
              </div>
            ) : (
              /*if event does not have a scheduled livestream */
              <div className="form-row p-2 mb-3">
                <div className="form-check form-check-inline mr-5">
                  <input
                    className="form-check-input"
                    name="livestreamradio"
                    type="radio"
                    value="1"
                    onChange={this.handleChange}
                  />
                  <label className="form-check-label">
                    Planlagt Livestream
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    defaultChecked
                    className="form-check-input"
                    name="livestreamradio"
                    type="radio"
                    value="0"
                    onChange={this.handleChange}
                  />
                  <label className="form-check-label">
                    Ingen planlagt livestream
                  </label>
                </div>
              </div>
            )}
            <button type="submit" className="btn btn-info btn-sm">
              Rediger
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminEventItem;
