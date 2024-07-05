import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiKalilinux,
  SiLinux,
  SiUbuntu,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiIntellijidea,
  SiAndroidstudio,
  SiAnaconda,
  SiGithub,
  SiMicrosoftexcel,
  SiPowerbi,
  SiJupyter,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
        <div style={{ fontSize: "12px" }}>Kali Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <div style={{ fontSize: "12px" }}>Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
        <div style={{ fontSize: "12px" }}>Ubuntu</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div style={{ fontSize: "12px" }}>Visual Studio Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <div style={{ fontSize: "12px" }}>Android Studio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <div style={{ fontSize: "12px" }}>Intellij Idea</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
        <div style={{ fontSize: "12px" }}>Anaconda</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <div style={{ fontSize: "12px" }}>Jupyter Notebook</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div style={{ fontSize: "12px" }}>Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div style={{ fontSize: "12px" }}>Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <div style={{ fontSize: "12px" }}>Heroku</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div style={{ fontSize: "12px" }}>Github</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
        <div style={{ fontSize: "12px" }}>MS Excel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <div style={{ fontSize: "12px" }}>MS PowerBI</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
