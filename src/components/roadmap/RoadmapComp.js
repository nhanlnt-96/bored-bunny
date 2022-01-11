import React from 'react';
import {Container, Row} from "react-bootstrap";
import {roadmapDataPart1, roadmapDataPart2} from "../../configs/roadmapData";

import './RoadmapComp.scss';

const RoadmapComp = () => {
  return (
    <Container fluid className="roadmap-comp comp-height">
      <Container className="roadmap-comp-container">
        <Row className="roadmap-comp-title">
          <h6 className="title">utility road map</h6>
          <p className="sub-title">Introduction: Our Goal in this project is to make our investors and hodlers very
            happy with there returns, we want to make a positive impact on society and most importantly the
            metaverse.</p>
        </Row>
        <Row className="roadmap-comp-content">
          <div className="roadmap-comp-box">
            {
              roadmapDataPart1.map((val, index) => (
                <p className="roadmap-content">
                  <span className="roadmap-title">{val.title}</span>{' '} {val.content}
                </p>
              ))
            }
          </div>
          <div className="roadmap-comp-box">
            {
              roadmapDataPart2.map((val, index) => (
                <p className="roadmap-content">
                  <span className="roadmap-title">{val.title}</span>{' '} {val.content}
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