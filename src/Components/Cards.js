import React from "react";
import Card from "react-bootstrap/Card";
import photographer from "./Media/photograher.jpg";
import minora from "./Media/minora.jpg";
import sneaker from "./Media/Sneaker.jpg";
function Cards() {
  return (
    <div className="infos" id="Projects">
      <h3>Projects</h3>
      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <img src={photographer} alt="..." />
          <Card.Body>
            <Card.Title>Photographer's Portfolio</Card.Title>
            <Card.Text>
              A sample website showcasing a photograher's work and creativity to
              lure people to book a session. Created with React js
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://phtgrphr.netlify.app/">
              View Website
            </Card.Link>
            <Card.Link href="https://github.com/SylviaMaina/Photographer">
              View code
            </Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <img src={minora} alt="..." />
          <Card.Body>
            <Card.Title>Minora Beauty</Card.Title>
            <Card.Text>
              A beauty shop landing page sample showing intrested parties
              details about the shop's products. Created with React js
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="minora.netlify.app">View Website</Card.Link>
            <Card.Link href="https://github.com/SylviaMaina/minori">
              View code
            </Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <img src={sneaker} alt="..." style={{ height: "11rem" }} />
          <Card.Body>
            <Card.Title>Sneaker Shop Section</Card.Title>
            <Card.Text>
              A sample of an e-commerce view item with multiple images of the
              item and checkout card. Created with javascrip HTML and CSS
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="https://github.com/SylviaMaina/Sneaker-e-commerce-component">
              View code here
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
