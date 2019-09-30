import React, { Component } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

class AdminPostItem extends Component {
  // Cropping: https://codesandbox.io/s/72py4jlll6
  state = {
    src: null,
    crop: {
      aspect: 1.5,
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

  //Handles updates  in posts
  handleUpdate = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("id", this.props.post.id);
    data.append("title", this.refs.updateTitle.value);
    data.append("text", this.refs.updateText.value);
    data.append("img", this.state.base64Image);

    fetch(`http://localhost:5000/posts/update`, {
      method: "POST",
      body: data
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw alert("Databasen ble ikke oppdatert");
        }
      })
      .then(_ => {
        this.props.getPostList();
        document.getElementById("toggleEditPost" + this.props.post.id).click(); //toggle form back
      })
      .catch(err => console.log(err));
  };
  render() {
    const { crop, src } = this.state;
    return (
      <React.Fragment>
        <div className="elementCardAdmin row">
          <p className="col-lg-5">
            <span className="smallHeading">Tittel: </span>{" "}
            {this.props.post.title}
          </p>
          <p className="col-lg-4">
            <span className="smallHeading">Dato: </span> {this.props.post.date}
          </p>
          <div className="col-lg-3">
            <button
              className="btn btn-sm btn-danger btnInElementAdmin"
              onClick={() => {
                this.props.handleDelete(this.props.post.id);
              }}
            >
              Slett
            </button>
            <button
              className="btn  btn-secondary btnInElementAdmin btn-sm"
              type="button"
              data-toggle="collapse"
              data-target={"#post" + this.props.post.id}
              aria-expanded="false"
              aria-controls={"post" + this.props.post.id}
              id={"toggleEditPost" + this.props.post.id}
            >
              Rediger
            </button>
          </div>
        </div>
        <div
          className="editScheduleItem collapse"
          id={"post" + this.props.post.id}
        >
          <form className="col-md-8 col-lg-6">
            <div className="form-group">
              <label>Tittel</label>
              <input
                type="text"
                className="form-control"
                defaultValue={this.props.post.title}
                ref="updateTitle"
              />
            </div>
            <div className="form-group">
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
            </div>
            {/*If postid is not set no not try to display images*/}
            {this.props.post.id !== "" ? (
              <img
                className="newsImgEdit "
                src={require("../../uploadedImg/postImg/" + this.props.post.id)}
                alt="newsImg"
              />
            ) : null}
            <div className="form-group">
              <label>Ny Tekst</label>
              <textarea
                className="form-control textareaNews"
                defaultValue={this.props.post.text}
                ref="updateText"
              />
            </div>
            <button
              type="button"
              className="btn btn-info btn-sm"
              onClick={this.handleUpdate}
            >
              Rediger
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminPostItem;
