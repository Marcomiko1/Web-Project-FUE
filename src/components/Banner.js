import Container from "react-bootstrap/esm/Container";
import './Banner_Style.css';
import Badge from 'react-bootstrap/Badge';
import astro from '../assets/astro.svg';

function Banner() {
  return (
    <Container className="ban" id="home">
      <div className="banner-content">
        <div className="text-section">
          <h3>
            <Badge className="Badge" bg="secondary">
              Welcome to my portfolio
            </Badge>
          </h3>
          <h1>Hello, I'm a Web Developer</h1>
          
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/>
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/>
            It has survived not only five centuries, but also the leap into electronic typesetting, <br/>
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, <br/>
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <button className="connect-btn-2" onClick={() => console.log("clicked")}>
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