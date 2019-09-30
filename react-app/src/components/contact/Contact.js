import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactPersons from "./ContactPersons.js";
import ContactForm from "./ContactForm.js";
import "../../styles/contact.css";

class Contact extends Component {
  state = {
    contactPersons: [],
    contactAddress: []
  };

  componentDidMount() {
    this.getContactPersons();
    this.getContactAdress();
  }
  getContactAdress = _ => {
    fetch(`http://localhost:5000/contactAddress`)
      .then(response => response.json())
      .then(response => this.setState({ contactAddress: response[0].address }))
      .catch(err => console.error(err));
  };
  getContactPersons = _ => {
    fetch(`http://localhost:5000/contactPersons`)
      .then(response => response.json())
      .then(response => this.setState({ contactPersons: response.data }))
      .catch(err => console.error(err));
  };
  render() {
    // destructuring
    const { contactPersons } = this.state;
    const { contactAddress } = this.state;

    /*  ContactPersons sends the state as props to our 
        child component "ContactPersons.js. */
    return (
      <div>
        <Navbar />
        <div className="contact row mx-0">
          <div className="container">
            <div className="vh-85">
              <h2 className="center pageTitle mb-5">Kontakt</h2>

              <ContactPersons contactpersons={contactPersons} />

              <ContactForm />
            </div>
            <div className="contact-address px-4 text-dark mt-5 mb-5">
              <i className="fa fa-map-marker d-inline-block float-left pr-2 " />
              <p>{contactAddress}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
