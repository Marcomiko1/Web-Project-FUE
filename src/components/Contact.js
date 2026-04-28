import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/contact-img.svg";
import TrackVisibility from "react-on-screen";
import "./Contact_Style.css";

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
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setTimeout(() => {
      setStatus({ success: true, message: "Message sent successfully!" });
      setButtonText("Send");
      setFormDetails(formInitialDetails);
    }, 1000);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility partialVisibility offset={100}>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact"
                />
              )}
            </TrackVisibility>
          </Col>

          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>

                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={formDetails.firstName}
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>

                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={formDetails.lastName}
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>

                      <Col sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formDetails.email}
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>

                      <Col sm={6} className="px-1">
                        <input
                          type="tel"
                          placeholder="Phone No."
                          value={formDetails.phone}
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>

                      <Col>
                        <textarea
                          rows="6"
                          placeholder="Message"
                          value={formDetails.message}
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>

                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>

                      {status.message && (
                        <Col>
                          <p className={status.success ? "success" : "danger"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};