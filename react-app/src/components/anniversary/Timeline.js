import React, {Component} from 'react'

class Timeline extends Component {
  state = { years: [] }

  componentDidMount(){
    fetch('http://localhost:5000/anniversary/timeline')
    .then(response => response.json())
    .then((response) => {
      this.setState({years: response.data})
    }) 
  }

  render() { 
    let left = true
    return (  
      <div className="timeline">
        {
          this.state.years.map((year, index) => {
          if(left === true){ 
            left = false
            return(
              <div key={index} className="containerTimeline leftTimeline">
                <a href={"/tilbakeblikk/" + year.year}>
                  <img
                    className="timelineImg"
                    src={require('../../uploadedImg/sliderImg/' + year.image_id)}
                    alt={'anniversary_image_' + year.year}
                  />
                  <div className="contentTimeline">
                    <h2>{year.year}</h2>
                    <p>{year.text.substr(0, 200) + "..."}</p>
                  </div>
                </a>
              </div>
            )
          }else{
            left = true
            return(
              <div key={index} className="containerTimeline rightTimeline">
                <a href={"/tilbakeblikk/" + year.year}>
                  <img
                    className="timelineImg"
                    src={require('../../uploadedImg/sliderImg/' + year.image_id)}
                    alt={'anniversary_image_' + year.year}
                  />
                  <div className="contentTimeline">
                    <h2>{year.year}</h2>
                    <p>{year.text.substr(0, 200) + "..."}</p>
                  </div>
                </a>
              </div>
            )
          }
        })
        }

      </div>
    )
  }
}
 
export default Timeline