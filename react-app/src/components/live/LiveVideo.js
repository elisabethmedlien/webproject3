//LiveVideo component
import React from "react";
import "../../styles/live.css";
import YouTube from "react-youtube";
import ReadMoreAndLess from "react-read-more-less";

const LiveVideo = props => {
  return (
    <div className="row liveContent" key={props.liveVideoData.id}>
      <div className="col-sm-12 col-md-6 liveInfo">
        <h4 className="videoTitle">{props.liveVideoData.snippet.title}</h4>
        <ReadMoreAndLess
          className="read-more-content"
          charLimit={250}
          readMoreText="Les mer"
          readLessText="Les mindre"
        >
          {props.liveVideoData.snippet.description}
        </ReadMoreAndLess>
      </div>
      <div className="col-sm-12 col-md-6 liveVideo">
        <YouTube
          className="YTLive"
          apiKey={props.apikey}
          videoId={props.liveVideoData.id} // The YouTube video ID
        />
      </div>
    </div>
  );
};

export default LiveVideo;
