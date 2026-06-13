import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Kammari Vidyasri </span>
            from India.
            <br />
            <br />
            I am currently pursuing my <span className="purple">B.Tech in Computer Science and Engineering</span> at
            <span className="purple"> Amrita Vishwa Vidyapeetham, Bengaluru</span>.
            <br />
            <br />
            My areas of interest include{" "}
            <span className="purple">
              Software Development, Cloud Computing, Backend Development,
              Distributed Systems, Cybersecurity, and Machine Learning.
            </span>
            <br />
            <br />
            I have worked on several projects including:
            <br />
            <br />
            • ResQLink for Crowdsourced Crisis Response Platform
            <br />
            • Digital Twin Framework for Urban Infrastructure Resilience
            <br />
            • Carbon Credit-Aware Task Scheduling for Sustainable Cloud Services
            
            
            <br />
            <br />
            Apart from academics, I enjoy learning new technologies,
            participating in hackathons, exploring cloud platforms,
            and building innovative software solutions.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

