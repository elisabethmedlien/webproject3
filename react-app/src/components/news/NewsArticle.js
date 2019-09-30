//news article page
import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/news.css";

class NewsArticle extends Component {
  state = {
    newsData: [{ id: "", title: "", text: "", date: "" }]
  };
  componentDidMount() {
    let id = this.props.match.params.newsId;
    this.getReviewData(id);
  }
  getReviewData = id => {
    fetch(`http://localhost:5000/newsArticle?id=` + id)
      .then(response => response.json())
      .then(response => this.setState({ newsData: response }))
      .catch(err => console.log(err));
  };
  render() {
    const article = this.state.newsData[0] ? (
      <div className="container">
        <div className="vh-85">
          <h2 className="pageTitle">{this.state.newsData[0].title}</h2>
          <hr className="hrHeight" />
          <div className="row newsArticle">
            <div className="col-md-6">
              {/*If img_path does not exist don't load image*/}
              {this.state.newsData[0].id !== "" ? (
                <img
                  src={require("../../uploadedImg/postImg/" +
                    this.state.newsData[0].id)}
                  alt="img"
                  className="imgNewsArticle"
                />
              ) : null}
            </div>
            <div className="newsText col-md-6">
              {" "}
              <p>{this.state.newsData[0].text}</p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div class="errorDiv container">
        <h1 class="sadSmilyError">&#x2639;</h1>
        <h1 class="txt404">404</h1>
        <h3>Page not found</h3>
        <p>
          The page you are looking for doesn't exist or an other error occured.
        </p>
      </div>
    );
    return (
      <div>
        <Navbar />
        {article}
        <Footer />
      </div>
    );
  }
}

export default NewsArticle;
