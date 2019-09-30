import React, { Component } from "react";
import "../styles/footer.css";

class Footer extends Component {
  state = {
    socialMedias: [
      {
        name: "Twitter",
        link: "https://twitter.com/drammensacred",
        icon: "fab fa-twitter"
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/Drammensacred",
        icon: "fab fa-facebook-f"
      },
      {
        name: "Pinterest",
        link: "https://no.pinterest.com/soulfullbags/?autologin=true",
        icon: "fab fa-pinterest"
      }
    ]
  };
  render() {
    /* The constant socialMediaList iterates through the array socialMedias 
        and outputs the properties we want as a template */
    const { socialMedias } = this.state;
    const socialMediaList = socialMedias.map(media => {
      return (
        <div className="social-media col-sm-12 col-md-3" key={media.name}>
          <a href={media.link}>
            <i className={media.icon} />
            <p>{media.name}</p>
          </a>
        </div>
      );
    });
    // returning the templates sequentially
    return (
      <footer className="footer row">
        <div className="col-md-4 col-sm-12">
          <p className="copyright">Copyright @ Drammen Sacred</p>
        </div>
        <div className="col-sm-12 col-md-6 mr-md-2">
          <div className="row">{socialMediaList}</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
