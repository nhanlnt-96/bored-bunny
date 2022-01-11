import React from 'react';
import {Container} from "react-bootstrap";
import {Parallax} from "react-parallax";
import BgTeam from '../../assets/imgs/bgTeam.webp';
import {teamMemberData} from "../../configs/teamMemberData";

import './TeamComp.scss';

const TeamComp = () => {
  return (
    <Parallax bgImage={BgTeam} strength={500} className="team-comp d-flex justify-content-center align-items-center">
      <Container className="team-comp-container">
        <h6 data-aos="zoom-in" className="team-comp-title">The team</h6>
        <div className="team-comp-img">
          {
            teamMemberData.map((val, index) => (
              <img data-aos="zoom-in" key={index} src={val} alt="bored-bunny-team"/>
            ))
          }
        </div>
      </Container>
    </Parallax>
  );
};

export default TeamComp;