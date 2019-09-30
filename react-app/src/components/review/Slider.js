import React from "react";

const Slider = props => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {
          // Outputs indicator elements for each item in slides array
          props.slides.map((slide, index) => {
            // If it's the first map iteration, adds "active" class to indicator
            return (
              <li key={slide.id} data-target="#carouselExampleIndicators" data-slide-to={slide.id}
                className={index === 0 ? "active" : ""}></li>
            )
          })
        }
      </ol>
      <div id="slidesList" className="carousel-inner">
        {
          // Outputs slide elements for each item in slides array
          props.slides.map((slide, index) => {
            // If it's the first map iteration, adds "active" class to slide
            return (
              <div key={slide.id} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                <img className="d-block w-100" src={require(`../../uploadedImg/sliderImg/${slide.id}`)} alt={slide.title} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{slide.title}</h5>
                  <p>{slide.caption}</p>
                </div>
              </div>)
          })
        }
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}


export default Slider;
