//Component that lists the newscard with the correct data
import React, { Component } from "react";
import NewsCard from "./NewsCard.js";

class NewsCards extends Component {
  state = {
    newsData: [],
    year: ''
  };
  componentDidMount() {
    let path = this.props.year
    this.setState({ year: path })
    this.getNewsList(path);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.year !== prevState.year) {
      return { year: nextProps.year };
    }
    else {
      return null;
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.year !== this.state.year) {
      this.getNewsList(this.state.year);
    }
  }

  getNewsList = path => {
    if (isNaN(path)) {
      fetch(`http://localhost:5000/posts`)
        .then(response => response.json())
        .then(response => this.setState({ newsData: response }))
        .catch(err => console.log(err));
    } else {
      fetch(`http://localhost:5000/posts?year=` + path)
        .then(response => response.json())
        .then(response => this.setState({ newsData: response }))
        .catch(err => console.log(err));
    }
  };

  render() {
    //Loops trough all data, and displays it in newsCard
    return this.state.newsData.map(newsArticle => (
      <NewsCard
        key={newsArticle.id}
        title={newsArticle.title}
        date={newsArticle.date}
        txt={newsArticle.text}
        id={newsArticle.id}
      />
    ));
  }
}

export default NewsCards;
