import React from 'react';
import {Container} from "react-bootstrap";
import {Parallax} from "react-parallax";
import BgBanner from '../../assets/imgs/bgBanner.webp';

import './BannerComp.scss';
import {SiDiscord} from "react-icons/all";

const BannerComp = () => {
  return (
    <Parallax bgImage={BgBanner} strength={500} className="banner-comp">
      <Container fluid className="banner-comp-container d-flex flex-column justify-content-center align-items-center">
        <div className="banner-comp-title">
          <h1 className="title">Welcome to <span>SSS NFT!</span> Original</h1>
          <h1 className="title">hight quality NFTS</h1>
        </div>
        <div className="banner-comp-btn">
          <button className="button-item">
            <SiDiscord/>
            Join Our Discord
          </button>
        </div>
      </Container>
    </Parallax>
  
  );
};

export default BannerComp;