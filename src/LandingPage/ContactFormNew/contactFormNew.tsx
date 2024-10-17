
import React, { useState } from "react";
import './contactFormNew.css';

function ContactFormNew() {

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Full Name: ${formData.fullName}\nPhone Number: ${formData.phoneNumber}\nEmail: ${formData.email}`
    );
  };


  return (
    <div className="mainFormContainer" id="contactFormNew">
      <img src={process.env.PUBLIC_URL + "Asserts/designforcontactus.png"} alt="designforcontactus" className="designforcontactus"/>
      <h1 className="formHeading">REQUEST <br/> <span className="callBackSpan">CALLBACK</span></h1> 
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
      </div>
      )}

      export default ContactFormNew;