//Newscard component that displays the data
import React from "react";
import { Link } from "react-router-dom";
import { fixDateString } from './Functions'

const NewsCard = props => {
  return (
    <div className="col-sm-6 col-lg-4 newsDiv">
      <Link to={"/artikkel/" + props.id} className="linkArticle">
        <div>
          <div className="imgNewsDiv">
            <img
              className="thumbNewsImg"
              src={require("../uploadedImg/postImg/" + props.id)}
              alt="newsimg"
            />
            <p className="dateOnNewsImg">{fixDateString(props.date)}</p>
          </div>
          <div className="textNewsDiv">
            <h5>{props.title}</h5>
            <p>{props.txt.slice(0, 100)}...</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
