import { useState } from "react";
import emailjs from "@emailjs/browser";
import './Contact_Style.css';
import contactImg from '../assets/contact-img.svg';

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState(null);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE,
        {
          firstName: formDetails.firstName,
          lastName: formDetails.lastName,
          email: formDetails.email,
          phone: formDetails.phone,
          message: formDetails.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC
      );

      setStatus({ success: true, message: "Message sent successfully!" });
      setFormDetails(formInitialDetails);
    } catch (error) {
      console.error(error);
      setStatus({ success: false, message: "Something went wrong." });
    }

    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <img src={contactImg} alt="Contact" />
          </div>

          <div className="col-md-6">
            <h2>Get In Touch</h2>

            <form onSubmit={handleSubmit}>
              <div className="row">

                <div className="col-sm-6 px-1">
                  <input type="text" placeholder="First Name"
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                </div>

                <div className="col-sm-6 px-1">
                  <input type="text" placeholder="Last Name"
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                </div>

                <div className="col-sm-6 px-1">
                  <input type="email" placeholder="Email Address"
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate('email', e.target.value)} />
                </div>

                <div className="col-sm-6 px-1">
                  <input type="tel" placeholder="Phone No."
                    value={formDetails.phone}
                    onChange={(e) => onFormUpdate('phone', e.target.value)} />
                </div>

                <div className="col-12 px-1">
                  <textarea rows="6" placeholder="Message"
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate('message', e.target.value)} />
                </div>

                <div className="col-12 px-1">
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </div>

                {status && (
                  <div className="col-12">
                    <p className={status.success ? "success" : "danger"}>
                      {status.message}
                    </p>
                  </div>
                )}

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};