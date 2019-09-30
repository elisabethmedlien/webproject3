// AdminContactPerson.js
import React, { Component } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

class AdminContactPerson extends Component {
  // Cropping: https://codesandbox.io/s/72py4jlll6
  state = {
    src: null,
    crop: {
      aspect: 0.9,
      width: 50,
      height: 70,
      x: 0,
      y: 0
    }
  };

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

  // function for submitting the changes
  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("id", this.props.contact.id);
    data.append("name", this.refs.editContactPersonName.value);
    data.append("role", this.refs.editContactPersonRole.value);
    data.append("phone", this.refs.editContactPersonPhone.value);
    data.append("email", this.refs.editContactPersonEmail.value);
    data.append("img", this.state.base64Image);
    fetch(`http://localhost:5000/contactPersons/update`, {
      method: "POST",
      body: data
    })
      .then(_ => {
        // displays the new changes without refreshing the page
        this.props.getContactList();
      })
      .catch(err => console.log(err));
  };

  render() {
    const { crop, src } = this.state;
    const { props } = this;

    return (
      <div>
        <div className="elementCardAdmin row">
          <p className="col-md-10">
            <span className="smallHeading">{props.contact.name}</span>
          </p>
          <div className="col-md-2">
            <button
              className="btn btn-secondary btnInElementAdmin btn-sm"
              type="button"
              data-toggle="collapse"
              data-target={"#contactPersonForm" + props.contact.id}
              aria-expanded="false"
              aria-controls={"contactPersonForm" + props.contact.id}
            >
              Rediger
            </button>
          </div>
        </div>

        <div
          className="collapse editScheduleItem"
          id={"contactPersonForm" + props.contact.id}
        >
          <form
            className="col-md-8 col-lg-6"
            name="editContactPerson"
            onSubmit={this.handleSubmit}
          >
            <div className="form-row">
              <div className="form-group col-md-6 pl-0">
                <label>Navn</label>
                <input
                  type="text"
                  ref="editContactPersonName"
                  defaultValue={props.contact.name}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6 pl-0">
                <label>Stilling</label>
                <input
                  type="text"
                  ref="editContactPersonRole"
                  defaultValue={props.contact.role}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6 pl-0">
                <label>Telefonnummer</label>
                <input
                  type="number"
                  ref="editContactPersonPhone"
                  defaultValue={props.contact.phone}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6 pl-0">
                <label>Epost adresse</label>
                <input
                  type="email"
                  ref="editContactPersonEmail"
                  defaultValue={props.contact.email}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-row">
              {props.contact.id !== "" ? (
                <img
                  className="contactImgEdit"
                  src={require("../../uploadedImg/contactPersonImg/" +
                    props.contact.id)}
                  alt="contactpersonImg"
                  id="contactpersonImg"
                />
              ) : null}
            </div>
            <div className="form-group col-md-12 pl-0">
              <label> Bilde</label>
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
            </div>

            <button type="submit" className="btn btn-info btn-sm">
              Lagre
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AdminContactPerson;
