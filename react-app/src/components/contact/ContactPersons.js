import React from "react";
import "../../styles/contact.css";

/*  A functional component with contactpersons 
    from props as the parameter */

const ContactPersons = ({ contactpersons }) => {
  /* The constant contactList iterates through the array contactpersons 
      and outputs the properties we want as a template */
  const contactList = contactpersons.map(contact => {
    return (
      <div key={contact.id} className="card w-100 mb-2">
        <div className="card-body row">
          <div className="col-md-3 col-sm-4">
            <img
              className="contact-card-img"
              src={require(`../../uploadedImg/contactPersonImg/${contact.id}`)}
              alt="img"
            />
          </div>

          <div className="col-md-9 col-sm-8">
            <h5 className="card-title pb-3">{contact.name}</h5>

            <div className="row">
              <div className="col-md-6 col-sm-12">
                <p>{contact.role}</p>
              </div>
              <div className="col-md-6 col-sm-12">
                <p>
                  <a href="insert email link here">{contact.email}</a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <p>Tlf.: {contact.phone}</p>
              </div>
              <div className="col-md-6 col-sm-12" />
            </div>
          </div>
        </div>
      </div>
    );
  });
  // returning the templates sequentially
  return <div className="contact-list mb-5">{contactList}</div>;
};

export default ContactPersons;
