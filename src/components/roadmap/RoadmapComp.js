import React from "react";
import {Container, Row} from "react-bootstrap";
import {roadmapData} from "../../configs/roadmapData";

import "./RoadmapComp.scss";

const RoadmapComp = () => {
  return (
    <Container fluid className="roadmap-comp comp-height">
      <Container className="roadmap-comp-container">
        <Row className="roadmap-comp-title">
          <h6 data-aos="fade-down" className="title">utility road map</h6>
          <p data-aos="fade-up" className="sub-title">Introduction: Our goal with this project is to make our investors
            and hodlers very happy with their returns, we want to make a positive impact on society and most importantly
            the metaverse.</p>
        </Row>
        <Row className="roadmap-comp-content">
          <div className="roadmap-comp-box">
            {
              roadmapData.map((val, index) => (
                <p key={index} data-aos="fade-up" className="roadmap-content">
                  <span className="roadmap-title">{val.title}</span>{" "} {val.content}
                </p>
              ))
            }
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default RoadmapComp;