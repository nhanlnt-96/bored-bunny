import React from "react";
import {Container} from "react-bootstrap";
import {Parallax} from "react-parallax";
import BgTeam from "../../assets/imgs/bgTeam.webp";
import {teamMemberData} from "../../configs/teamMemberData";

import "./TeamComp.scss";

const TeamComp = () => {
  return (
    <Parallax bgImage={BgTeam} strength={500} className="team-comp d-flex justify-content-center align-items-center">
      <Container className="team-comp-container">
        <h6 data-aos="zoom-in" className="team-comp-title">The team</h6>
        <div className="team-comp-content">
          {
            teamMemberData.map((val, index) => (
              <div key={index} data-aos="zoom-in" className="team-item-container">
                <div className="team-ava">
                  <img src={val.ava} alt="bored-bunny-team"/>
                </div>
                <div className="team-info-container justify-content-center align-items-center">
                  <p className="position">{val.position}</p>
                  <p className="name">{val.name}</p>
                </div>
              </div>
            ))
          }
        </div>
      </Container>
    </Parallax>
  );
};

export default TeamComp;