import React from "react";
import {Container, Row} from "react-bootstrap";
import "./WelcomeComp.scss";

const WelcomeComp = () => {
  return (
    <Container fluid className="welcome-comp comp-height">
      <Container className="welcome-comp-container d-flex flex-column justify-content-center align-items-center">
        <Row className="welcome-comp-content">
          <h6 data-aos="fade-up" className="title">Welcome To</h6>
          <h6 data-aos="fade-up" className="sub-title">The Exclusive Samurai Society</h6>
          <p data-aos="fade-up" className="desc">Join this ultra-exclusive NFT project not only featuring authentic art,
            but unmatched utility!</p>
        </Row>
        <Row className="welcome-comp-button comp-primary-btn">
          <button data-aos="zoom-in" className="button-item">
            View all collection
          </button>
        </Row>
      </Container>
    </Container>
  );
};

export default WelcomeComp;