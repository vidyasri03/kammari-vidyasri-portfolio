import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/vidyasri.jpg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      <Particle />

      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About <strong className="purple">Me</strong>
              </h1>

              <Aboutcard />
            </Col>

            <Col
              md={5}
              style={{
                paddingTop: "80px",
                paddingBottom: "50px",
                textAlign: "center",
              }}
              className="about-img"
            >
              <img
                src={laptopImg}
                alt="Vidyasri"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  borderRadius: "20px",
                  boxShadow: "0px 0px 20px rgba(180, 100, 255, 0.5)",
                }}
              />
            </Col>
          </Row>

          {/* Technical Skills */}
          <h1 className="project-heading">
            Technical <strong className="purple">Skills</strong>
          </h1>

          <Techstack />

          {/* Tools */}
          <h1 className="project-heading">
            <strong className="purple">Tools & Technologies</strong>
          </h1>

          <Toolstack />

          {/* Certifications */}
          <h1 className="project-heading">
            My <strong className="purple">Certifications</strong>
          </h1>

          <div
            style={{
              color: "white",
              maxWidth: "900px",
              margin: "0 auto",
              fontSize: "1.15em",
              paddingBottom: "50px",
              lineHeight: "2",
            }}
          >
            <ul>
              <li>AWS Cloud Computing Certification</li>
              <li>
                Data Science, Machine Learning and AI using Python –
                Diginique Techlabs
              </li>
              <li>
                Indian Sustainability Startathon – The Future Founders Co.
              </li>
            </ul>
          </div>

          {/* Publications */}
          <h1 className="project-heading">
            <strong className="purple">Publications & Research</strong>
          </h1>

          <div
            style={{
              color: "white",
              maxWidth: "900px",
              margin: "0 auto",
              fontSize: "1.15em",
              paddingBottom: "80px",
              lineHeight: "2",
            }}
          >
            <ul>
              <li>
                Pattern Recognition for Identifying a String Within a Text File
                Using Finite Automata – IEEE ICCCNT 2024
              </li>

              <li>
                Adaptive Multi-Level Feedback Round-Robin – IEEE ICCCNT 2024
              </li>

              <li>
                IoT-Based Real-Time Fire Detection and Auto Shutoff System –
                SR University Conference 2025
              </li>
            </ul>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default About;