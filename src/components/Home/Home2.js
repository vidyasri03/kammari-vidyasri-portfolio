import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/vidyasri.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi, I'm <b className="purple">Kammari Vidyasri</b>, a Computer
              Science undergraduate at Amrita Vishwa Vidyapeetham with a strong
              passion for Software Development, Cloud Computing, and Backend
              Engineering.
              <br />
              <br />
              I am proficient in{" "}
              <b className="purple">
                Python, C++, JavaScript, Data Structures & Algorithms,
                Database Management Systems, and REST APIs
              </b>
              .
              <br />
              <br />
              My primary areas of interest include{" "}
              <b className="purple">
                Software Engineering, Cloud Computing, Distributed Systems,
                Backend Development, and Sustainable Computing
              </b>
              .
              <br />
              <br />
              I have worked on impactful projects such as{" "}
              <b className="purple">
                ResQLink, Digital Twin Framework, and Carbon Credit-Aware Task
                Scheduling for Sustainable Cloud Services
              </b>
              .
              <br />
              <br />
              I enjoy building scalable applications using{" "}
              <b className="purple">Python, React.js, and Node.js</b> while
              exploring cloud technologies such as{" "}
              <b className="purple">
                AWS, Docker, Kubernetes, PostgreSQL, and Firebase
              </b>
              .
              <br />
              <br />
              My goal is to contribute to innovative software products while
              continuously learning and growing as a Software Engineer.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;