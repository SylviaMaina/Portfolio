import React from "react";
import Card from "react-bootstrap/Card";
import photographer from "./Media/photograher.jpg";
import minora from "./Media/minora.jpg";
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
              lure people to book a session
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="https://github.com/SylviaMaina/Photographer">
              View code here
            </Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <img src={minora} alt="..." />
          <Card.Body>
            <Card.Title>Minora Beauty</Card.Title>
            <Card.Text>
              A beauty shop landing page sample showing intrested parties
              details about the shop's products
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="https://github.com/SylviaMaina/minori">
              View code here
            </Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
