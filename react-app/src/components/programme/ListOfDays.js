import React from 'react'
import {fixDateString} from '../Functions'

const listOfDays = (props) => {
  console.log(props)
  return (
    <div className="container horizontal_days row">
      {
        props.days.map((day, index) => (
          <a className="programDayLink" key={index} href={"#" + fixDateString(day.date)}><p className="horizontal_list_item">{day.day}</p></a>
        ))
      }
    </div>
  );
}

export default listOfDays;