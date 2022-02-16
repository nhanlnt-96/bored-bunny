import React from "react";
import {Container, Row} from "react-bootstrap";

import "./BenefitComp.scss";
import {benefitContentData} from "../../configs/benefitContentData";

const BenefitComp = () => {
  return (
    <Container fluid className="benefit-comp">
      <Container className="benefit-comp-container">
        <Row className="benefit-comp-title">
          <h6 data-aos="fade-down" className="title">BENEFITS & UTILITIES</h6>
        </Row>
        <Row data-aos="fade-up" className="benefit-comp-faq d-flex flex-column justify-content-center">
          <p className="question">Why invest in samurai society?</p>
          <p className="answer">We are the future of the metaverse and with our amazing project investors we are
            expecting great returns. The utility holds great value in revolutionizing gaming as we know it in the
            metaverse. With our goals set we will grow and expand our project to be remembered for generations.</p>
        </Row>
        <Row className="benefit-comp-content">
          <h6 data-aos="zoom-in" className="title">Benefit of investing in samurai society:</h6>
          <div className="benefit-content-container">
            {
              benefitContentData.map((val, index) => (
                <div data-aos="zoom-in" key={index} className="content-item">
                  <div className="content-number d-flex justify-content-center align-items-center">
                    <p className="number">{index + 1}</p>
                  </div>
                  <p className="content">{val}</p>
                </div>
              ))
            }
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default BenefitComp;