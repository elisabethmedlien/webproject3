import React from "react";
import "../../styles/contact.css";

const ContactForm = _ => {
  // contact form template from https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form"

  return (
    <form>
      <div className="messages" />
      <div className="controls">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="form_name">Fornavn *</label>
              <input
                id="form_name"
                type="text"
                name="name"
                className="form-control"
                placeholder="Ola *"
                required="required"
                data-error="Skriv inn ditt fornavn."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="form_lastname">Etternavn *</label>
              <input
                id="form_lastname"
                type="text"
                name="surname"
                className="form-control"
                placeholder="Nordmann *"
                required="required"
                data-error="Skriv ditt etternavn."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="form_email">Email *</label>
              <input
                id="form_email"
                type="email"
                name="email"
                className="form-control"
                placeholder="Skriv inn din email *"
                required="required"
                data-error="Ikke valid email"
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="form_need">Spesifiser ditt behov *</label>
              <select
                id="form_need"
                name="need"
                className="form-control"
                required="required"
                data-error="Spesifiser ditt behov"
              >
                <option value="" />
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="Other">Annet</option>
              </select>
              <div className="help-block with-errors" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="form_message">Melding *</label>
              <textarea
                id="form_message"
                name="message"
                className="form-control"
                placeholder="Skriv din melding her *"
                rows="4"
                required="required"
                data-error="Send oss en melding"
              />
              <div className="help-block with-errors" />
            </div>
            <p className="text-muted">
              <strong>*</strong> Disse feltene må fylles.
            </p>
          </div>

          <div className="col-md-12">
            <input
              type="submit"
              className="btn btn-success btn-send"
              value="Send melding"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
