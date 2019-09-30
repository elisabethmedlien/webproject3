import React, { Component } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

class AdminReviewItem extends Component {
  // Cropping: https://codesandbox.io/s/72py4jlll6
  state = {
    status: "unchanged",
    recordings: [],
    images: [],
    src: null,
    crop: {
      aspect: 2,
      width: 50,
      height: 70,
      x: 0,
      y: 0
    }
  };
  componentDidMount() {
    this.setState(({ ...this.state } = this.props.year));
  }
  handleChange = e => {
    this.setState({ status: "editing" });
    switch (e.target.name) {
      case "year":
        this.setState({ year: e.target.value });
        //this.refs.venueIcon.innerHTML = "&#9998;"
        break;
      case "text":
        this.setState({ text: e.target.value });
        //this.refs.timeIcon.innerHTML = "&#9998;"
        break;
      default:
    }
  };
  handleEdit = e => {
    let body = {
      id: e.target.value,
      year: this.state.year,
      text: this.state.text
    };
    console.log(body);
    fetch(`http://localhost:5000/review/update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(response => {
        response.json();
        console.log(response);
      })
      .catch(err => console.log(err));
  };
  handleSubmitRecording = e => {
    e.preventDefault();
    let body = {
      link: this.refs.newRecordingLink.value,
      name: this.refs.newRecordingTitle.value,
      r_id: this.state.id
    };
    console.log(body);

    fetch(`http://localhost:5000/review/newRecording`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(response => {
        response.json();
      })
      .then(_ => this.updateRecordingsList())
      .catch(err => console.log(err));
  };
  handleSubmitImage = _ => {
    let body = new FormData();
    body.append("title", this.refs.newImgTitle.value);
    body.append("caption", this.refs.newImgCaption.value);
    body.append("r_id", this.state.id);
    body.append("img", this.state.base64Image);

    fetch(`http://localhost:5000/review/newImage`, {
      method: "POST",
      body: body
    })
      .then(response => {
        response.json();
        console.log(response);
      })
      .catch(err => console.log(err));
  };
  handleDeleteRecording = e => {
    let body = { id: e.target.value };
    if (window.confirm("Are you sure you wish to delete this item?")) {
      fetch("http://localhost:5000/review/deleteRecording", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
        .then(_ => this.updateRecordingsList())
        .catch(err => console.log(err));
    }
  };
  handleDeleteImage = e => {
    let body = { id: e.target.value };
    if (window.confirm("Are you sure you wish to delete this item?")) {
      fetch("http://localhost:5000/review/deleteImage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
        .then(_ => {
          //in an ideal world, unlinking the images wouldn't result in page refresh
          this.updateImagesList();
        })
        .catch(err => console.log(err));
    }
  };
  updateRecordingsList = () => {
    console.log("update called");
    fetch("http://localhost:5000/review/recordings?id=" + this.state.id)
      .then(response => response.json())
      .then(response => {
        this.setState({ recordings: response });
      })
      .then(_ => console.log(this.state))
      .catch(err => console.log(err));
  };

  updateImagesList = () => {};
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

  render() {
    const { crop, src } = this.state;
    return (
      <React.Fragment>
        <div className="elementCardAdmin">
          <div className="row">
            <h3 className="col-md-10 col-sm-10" ref="title">
              {this.props.year.year}
            </h3>
            <div className="col-md-1 col-sm-1">
              <button
                className="btn btn-secondary btnInElementAdmin btn-sm"
                type="button"
                data-toggle="collapse"
                data-target={"#reviewItemForm" + this.props.year.id}
                aria-expanded="false"
                aria-controls={"reviewItemForm" + this.props.year.id}
              >
                Rediger
              </button>
            </div>
            <div className="col-md-1 col-sm-1">
              <button
                className="btn btn-secondary btnInElementAdmin btn-sm"
                type="button"
                value={this.props.year.id}
                onClick={() => {
                  this.props.handleDelete(
                    this.props.year.id,
                    this.props.year.slides
                  );
                }}
              >
                Slett
              </button>
            </div>
          </div>
        </div>

        <div className="collapse" id={"reviewItemForm" + this.props.year.id}>
          <div className="adminEditItem">
            <form className="col-md-12">
              <div className="form-row">
                <div className="form-group col-md-2">
                  <label>År</label>
                  <input
                    type="number"
                    name="year"
                    className="form-control"
                    defaultValue={this.props.year.year}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label>Tekst</label>
                  <textarea
                    type="text-area"
                    name="text"
                    className="form-control"
                    defaultValue={this.props.year.text}
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  value={this.props.year.id}
                  type="button"
                  onClick={this.handleEdit}
                  className="btn btn-info btn-sm"
                >
                  Rediger
                </button>
              </div>
            </form>
          </div>

          <div className="row adminEditItem">
            <label className="labelNonBlock col-md-9">Opptak</label>
            <div
              className="scrollableDiv col-md-7 subElementLeft"
              id={"recordingsList" + this.props.year.id}
            >
              {this.state.recordings.map((link, index) => {
                return (
                  <div
                    key={index}
                    className="colorandmarginchangeFIX subElement"
                  >
                    <div className="row">
                      <p className="col-md-9">{link.name}</p>
                      <button
                        className="btn btn-secondary btnInElementAdmin btn-sm col-md-2"
                        value={link.id}
                        onClick={this.handleDeleteRecording}
                        type="button"
                      >
                        Slett
                      </button>
                    </div>
                    <p>{link.link}</p>
                  </div>
                );
              })}
            </div>
            <div className="col-md-4">
              <h5>Legg til nytt opptak</h5>
              <form onSubmit={this.handleSubmitRecording}>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Tittel</label>
                    <input
                      type="text"
                      name="newRecordingTitle"
                      ref="newRecordingTitle"
                      className="form-control col-md-12"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Link</label>
                    <input
                      type="text"
                      name="newRecordingLink"
                      ref="newRecordingLink"
                      className="form-control col-md-12"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-info btn-sm">
                  Legg til
                </button>
              </form>
            </div>
          </div>

          <div className="row adminEditItem">
            <label className="col-md-9">Bilder</label>
            <div
              className="scrollableDiv col-md-7 subElementLeft"
              id={"imgList" + this.props.year.id}
            >
              {this.props.year.slides.map((slide, index) => {
                try {
                  return (
                    <div key={index} className="row subElement">
                      <img
                        className="eventImgEdit col-md-6"
                        src={require("../../uploadedImg/sliderImg/" + slide.id)}
                        alt={this.props.year.year + "_slide_" + index}
                      />
                      <div className="col-md-6">
                        <h5>Tittel: </h5>
                        <p>{slide.title}</p>
                        <h5>Bildetekst: </h5>
                        <p>{slide.caption}</p>
                        <button
                          value={slide.id}
                          onClick={this.handleDeleteImage}
                          className="btn btn-secondary btnInElementAdmin btn-sm"
                        >
                          Slett
                        </button>
                      </div>
                    </div>
                  );
                } catch (err) {
                  return null;
                }
              })}
            </div>
            <div className="col-md-4">
              <h5>Last opp nytt bilde</h5>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label>Tittel</label>
                    <input
                      type="text"
                      ref="newImgTitle"
                      className="form-control col-md-12"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Bildetekst</label>
                    <input
                      type="text"
                      ref="newImgCaption"
                      className="form-control col-md-12"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <div>
                      <input
                        className="marginBottom10"
                        type="file"
                        onChange={this.onSelectFile}
                      />
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
                  </div>
                </div>
                <button
                  type="button"
                  onClick={this.handleSubmitImage}
                  className="btn btn-info btn-sm"
                >
                  Legg til
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminReviewItem;
