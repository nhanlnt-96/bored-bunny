import React from "react";
import {Container, Row} from "react-bootstrap";
import {faqData} from "../../configs/faqData";
import EmailIcon from "../../assets/icons/email.png";
import MessageIcon from "../../assets/icons/message.png";

import "./FAQComp.scss";

const FaqComp = () => {
  return (
    <Container fluid className="faq-comp comp-height">
      <Container className="faq-comp-container d-flex flex-column justify-content-center align-items-center">
        <Row className="faq-comp-title">
          <h6 data-aos="zoom-in" className="title">FAQ'S</h6>
        </Row>
        <Row className="faq-comp-content">
          {
            faqData.map((val, index) => (
              <div key={index} className="content-container">
                <div className="content">
                  <p data-aos={(faqData.length === index + 1) ? null : "fade-up"}
                     className="content-question">{val.question}</p>
                  {
                    val.answer.map((item, itemKey) => (
                      <p key={itemKey} data-aos={(faqData.length === index + 1) ? null : "fade-up"}
                         className="content-answer">{item}</p>
                    ))
                  }
                </div>
                {
                  (index === faqData.length - 1) && (
                    <div className="faq-comp-contact">
                      <div className="contact-to-mail">
                        <img className="contact-icon" src={EmailIcon} alt="bored-bunny-contact"/>
                        <a href="mailto:SecretsamuraisocietyNFT@gmail.com"
                           className="detail">SecretsamuraisocietyNFT@gmail.com</a>
                      </div>
                      <div className="contact-to-message">
                        <img className="contact-icon" src={MessageIcon} alt="bored-bunny-contact"/>
                        <a href="https://t.me/SSSNFT" className="detail">https://t.me/SSSNFT</a>
                      </div>
                    </div>
                  )
                }
              </div>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
};

export default FaqComp;