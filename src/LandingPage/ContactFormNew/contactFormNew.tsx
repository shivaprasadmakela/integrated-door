import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contactFormNew.css";

function ContactFormNew() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phoneNumber || !formData.email) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    const serviceID = "service_y0pw6xi";
    const templateIDOwner = "template_mqnnjzz";
    const templateIDUser = "template_uagn8sf";
    const userID = "imfRHb6VLep1kQfe0";

    emailjs
      .send(serviceID, templateIDOwner, formData, userID)
      .then((result) => {
        setFormData({ fullName: "", email: "", phoneNumber: "" });
      })
      .catch((error) => {
        alert("Oops! Something went wrong: " + JSON.stringify(error));
      });

    emailjs
      .send(serviceID, templateIDUser, formData, userID)
      .then((result) => {
        alert("Your request has been sent successfully!");
      })
      .catch((error) => {
        alert("Oops! User Something went wrong: " + JSON.stringify(error));
      });
  };

  return (
    <div className="mainFormContainer" id="contactUs" >
      <img
        src={process.env.PUBLIC_URL + "/Asserts/designforcontactus.png"}
        alt="design for contact us"
        className="designforcontactus"
      />

      <h1 className="formHeading">
        REQUEST <br /> <span className="callBackSpan">CALLBACK</span>
      </h1>
      <h1 className="MobileformHeading" style={{ display: "none" }} >
        REQUEST  <span className="callBackSpan">CALLBACK</span>
      </h1>
      <form onSubmit={handleSubmit} className="contact-form">
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Show error if any */}
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
            required
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
            required
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
            required
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactFormNew;
