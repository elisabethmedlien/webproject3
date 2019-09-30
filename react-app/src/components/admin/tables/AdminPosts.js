import React, { Component } from "react";
import AdminPostItem from "../AdminPostItem";
import { Link } from "react-router-dom";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

class AdminPosts extends Component {
  // Cropping: https://codesandbox.io/s/72py4jlll6
  state = {
    posts: [{ id: "", title: "", text: "", date: "" }],
    years: [],
    year: "",
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
    let path = this.props.match.params.year;
    this.setState({ year: path });
    this.getPostList();
    this.getYearList();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.year !== prevState.year) {
      return { year: nextProps.match.params.year };
    } else {
      return null;
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.year !== this.state.year) {
      this.getPostList();
    }
  }

  getYearList = _ => {
    fetch(`http://localhost:5000/newsYearList`)
      .then(response => response.json())
      .then(response => this.setState({ years: response }))
      .catch(err => console.log(err));
  };
  getPostList = _ => {
    let path = this.props.match.params.year;
    if (isNaN(path)) {
      fetch(`http://localhost:5000/posts`)
        .then(response => response.json())
        .then(response => this.setState({ posts: response }))
        .catch(err => console.log(err));
    } else {
      fetch(`http://localhost:5000/posts?year=` + path)
        .then(response => response.json())
        .then(response => this.setState({ posts: response }))
        .catch(err => console.log(err));
    }
  };
  formAfterSubmit = _ => {
    document.getElementById("venueForm").reset();
    document.getElementById("toggleVenueFormBtn").click();
    this.getPostList();
  };
  handleDelete = id => {
    let body = {
      id: id
    };
    if (window.confirm("Are you sure you wish to delete this item?")) {
      fetch(`http://localhost:5000/posts/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
        .then(_ => {
          this.getPostList();
        })
        .catch(err => console.log(err));
    }
  };
  handleSubmit = e => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", this.refs.createVenueTitle.value);
    data.append("img", this.state.base64Image);
    data.append("text", this.refs.createVenueText.value);

    fetch(`http://localhost:5000/posts/add`, {
      method: "POST",
      body: data
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw alert("oh no");
        }
      })
      .then(_ => {
        this.formAfterSubmit();
      })
      .catch(err => console.log(err));
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

  render() {
    const { crop, src } = this.state;
    return (
      <div className="container tablesAdmin col-md-9 col-lg-10">
        <div className="row">
          <div className="col-md-4">
            <button
              className=" createNewBtn btn btn-info btn-sm"
              type="button"
              data-toggle="collapse"
              id="toggleVenueFormBtn"
              data-target="#newPostForm"
              aria-expanded="false"
              aria-controls="newPostForm"
            >
              Legg til nyhet
            </button>
          </div>
          <div className="col-md-8">
            <div className="float-right">
              {this.state.years.map(function(year) {
                return (
                  <Link
                    className="btn ml-1 mr-1"
                    to={"/admin/posts/" + year.year}
                    key={year.year}
                  >
                    {year.year}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="collapseForm col-12 collapse" id="newPostForm">
          <form
            onSubmit={this.handleSubmit}
            id="venueForm"
            className="col-md-8 col-lg-6"
          >
            <div className="form-row">
              <label>Tittel</label>
              <input
                type="text"
                className="form-control"
                placeholder="Legg til tittel"
                ref="createVenueTitle"
                required
              />
            </div>
            <div className="form-row">
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
            <div className="form-group">
              <label>Nyhetstekst</label>
              <textarea
                type="text"
                className="form-control textNewPost"
                ref="createVenueText"
                required
              />
            </div>
            <button type="submit" className="btn btn-info btn-sm">
              Send
            </button>
          </form>
        </div>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <AdminPostItem
              post={post}
              handleDelete={this.handleDelete}
              getPostList={this.getPostList}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default AdminPosts;
