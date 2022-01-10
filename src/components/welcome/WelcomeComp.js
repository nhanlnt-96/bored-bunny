import React from 'react';
import {Container, Row} from "react-bootstrap";
import './WelcomeComp.scss';

const WelcomeComp = () => {
  return (
    <Container fluid className="welcome-comp comp-height">
      <Container className="welcome-comp-container d-flex flex-column justify-content-center align-items-center">
        <Row className="welcome-comp-content">
          <h6 className="title">Welcome To</h6>
          <h6 className="sub-title">The Exclusive samurai society</h6>
          <p className="desc">Join this ultra-exclusive NFT project featuring not only authentic art, but unmatched
            utility!</p>
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