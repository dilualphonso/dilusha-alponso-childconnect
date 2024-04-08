import "./ContactPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import "./../../App.scss"


function ContactPage() {
  const { id, email: defaultEmail } = useParams();
  const [toemail, setToEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactemail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");

  const baseUrl = "http://localhost:8080";

  useEffect(() => {
    if (defaultEmail) {
      setToEmail(defaultEmail);
    }
  }, [defaultEmail]);

  const submitComment = async (event) => {
    event.preventDefault();
   // navigate("/daycares");

   Swal.fire({
    title: "Success!",
    text: "Thank you for submitting.",
    icon: "success",
  }).then(function () {
    window.location.href = `http://localhost:3000/daycares`;
  });
    let dataSend = {
      email: toemail,
      fullName: fullName,
      contactemail: contactemail,
      message: message,
    };

    const sendEmail = async (dataSend) => {
      try {
       await axios.post(`${baseUrl}/email/sendEmail`, dataSend, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

        });


      } catch (error) {
        console.error("Error submitting email:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to send email. Please try again later.",
          icon: "error",
        });
      }
    };

    sendEmail(dataSend);
  };

  return (
    <section className="comments">
      <h3 className="comments__title">Contact Us</h3>

      <form name="reviewform" className="comments__form" onSubmit={submitComment}>
        <div key= {id} className="comments__fields">
          <div className="comments__right-container">
            <div className="comments__textwrap">
              <label className="comments__name-textBox" htmlFor="fullname">
                Subject
              </label>
              <input
                className="comments__name-area"
                name="fullName"
                id="fullname"
                placeholder="Add your full name"
                onChange={(e) => setFullName(e.target.value)}
                type="text"
              ></input>
            </div>
            <div className="comments__textwrap">
              <label className="comments__name-textBox" htmlFor="toemail">
                To Email
              </label>
              <input
                className="comments__name-area"
                name="toemail"
                id="toemail"
                placeholder="Add recipient's email"
                value={toemail}
                onChange={(e) => setToEmail(e.target.value)}
                type="text"
              ></input>
            </div>
            <div className="comments__textwrap">
              <label className="comments__name-textBox" htmlFor="contactemail">
                Contact Email
              </label>
              <input
                className="comments__name-area"
                name="contactemail"
                id="contactemail" // Changed ID
                placeholder="Add contact email"
                value={contactemail}
                onChange={(e) => setContactEmail(e.target.value)}
                type="text"
              ></input>
            </div>
            <div className="comments__textwrap">
              <label className="comments__subjecttxt" htmlFor="message">
                Message
              </label>
              <textarea
                className="comments__textarea"
                name="reviewText"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Add your message"
              ></textarea>
            </div>
            <div className="comments__btn-container">
        <button
                className="comments__button"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactPage;
