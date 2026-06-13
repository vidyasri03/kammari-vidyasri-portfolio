import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import resqlink from "../../Assets/Projects/resqlink.png";
import digitaltwin from "../../Assets/Projects/digitaltwin.png";
import carbonscheduler from "../../Assets/Projects/carbonscheduler.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Featured <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Software Development, Cloud Computing, and Research Projects.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* ResQLink */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resqlink}
              isBlog={false}
              title="ResQLink – Crisis Response Platform"
              description="Crowdsourced disaster response platform enabling real-time incident reporting, SOS alerts, volunteer coordination, and role-based dashboards using React.js, Node.js, Express.js, and PostgreSQL."
              ghLink="https://github.com/vidyasri03"
            />
          </Col>

          {/* Digital Twin */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digitaltwin}
              isBlog={false}
              title="Digital Twin Framework"
              description="Digital Twin solution for urban infrastructure resilience analysis using Python, Flask, NetworkX, and OSMnx. Supports failure simulation, monitoring, visualization, and recovery optimization."
              ghLink="https://github.com/vidyasri03"
            />
          </Col>

          {/* Carbon Credit Scheduler */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carbonscheduler}
              isBlog={false}
              title="Carbon-Aware Scheduler"
              description="Kubernetes-based carbon-aware scheduler using Particle Swarm Optimization (PSO) to optimize workload placement, reduce carbon emissions, and improve cloud resource utilization."
              ghLink="https://github.com/vidyasri03"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;