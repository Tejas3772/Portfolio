import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiCss3,
  DiJava,
  DiDjango,
} from "react-icons/di";
import {
  SiFlask,
  SiMysql,
  SiFirebase,
  SiNextdotjs,
  SiCplusplus,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <div style={{ fontSize: "12px" }}>C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <div style={{ fontSize: "12px" }}>Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div style={{ fontSize: "12px" }}>Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineHtml5 />
        <div style={{ fontSize: "12px" }}>HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <div style={{ fontSize: "12px" }}>CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div style={{ fontSize: "12px" }}>Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div style={{ fontSize: "12px" }}>React Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <div style={{ fontSize: "12px" }}>Next Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div style={{ fontSize: "12px" }}>Node Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
        <div style={{ fontSize: "12px" }}>Django</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <div style={{ fontSize: "12px" }}>Flask</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div style={{ fontSize: "12px" }}>Mongo DB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <div style={{ fontSize: "12px" }}>Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div style={{ fontSize: "12px" }}>My SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div style={{ fontSize: "12px" }}>Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;
