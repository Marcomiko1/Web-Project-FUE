import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import './Banner_Style.css';
import Badge from 'react-bootstrap/Badge';
import astro from '../assets/astro.svg';

function Banner() {
  const roles = ["Web Developer", "UI/UX Designer"];

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 60 : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <Container className="ban" id="home">
      <div className="banner-content">
        <div className="text-section">
          <h3>
            <Badge className="Badge" bg="secondary">
              Welcome to my portfolio
            </Badge>
          </h3>
          <h1>
            Hello, I'm a{" "}
            <span className="typing">{text}</span>
          </h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/>
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

          <button className="connect-btn-2">
            <span className="btn-content">
              <span>Let's Connect</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
              </svg>
            </span>
          </button>
        </div>

        <div className="image-section">
          <img src={astro} alt="astro" />
        </div>
      </div>
    </Container>
  );
}

export default Banner;