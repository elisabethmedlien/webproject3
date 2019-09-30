//ScheduledLiveStream component
import React from "react";
import "../../styles/live.css";
import { fixDateString, fixTimeString } from '../Functions'

const ScheduledLiveStream = props => {
  const nextLiveStream = props.ScheduledLiveStreams.map(nextLive => {
    return (
      <div key={nextLive.id} className="row nextLiveStream">
        <div className="col-sm-12 col-md-6">
          <h5 className="upcomingStreamTitle">{nextLive.title}</h5>
        </div>
        <div className="col-sm-6 col-md-3">
          <span>Dato: {fixDateString(nextLive.date)}</span>
        </div>
        <div className="col-sm-6 col-md-3">
          <span>Kl.: {fixTimeString(nextLive.time)}</span>
        </div>
      </div>
    );
  });

  return <div className="upcomingStream">{nextLiveStream}</div>;
};

export default ScheduledLiveStream;
