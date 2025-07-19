import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kangkana Barman </span>
            from <span className="purple"> Assam, India.</span>
            <br />
            I am currently a student in computer science and engineering at SRMIST.
            <br />
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Start-up
            </li>
            <li className="about-activity">
              <ImPointRight /> Book Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Agnik ko pelna
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kangkana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
