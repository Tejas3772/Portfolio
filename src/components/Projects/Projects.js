import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import blogmaniac from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogmaniac}
              isBlog={false}
              title="Malware Analysis-convLSTM-smali"
              description="A deep learning approach utilizing convolutional LSTM networks and Smali code for effective Android malware detection."
              ghLink="https://github.com/Tejas3772/Research-Malware-ConvLSTM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Git-Bisect Automation tool"
              description="Automated Git bisect process for upstream Linux CI, reducing build efforts by 70% and improving bug turnaround time with automated reporting and feedback."
              ghLink="https://github.com/open-power/op-test"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogmaniac}
              isBlog={false}
              title="Travel-Blog"
              description="Developed a personal blog using Next.js and Tailwind CSS, featuring markdown file content rendering, dark mode support, and easy blog writing with markdown."
              ghLink="https://github.com/Tejas3772/Travel-Blog.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
