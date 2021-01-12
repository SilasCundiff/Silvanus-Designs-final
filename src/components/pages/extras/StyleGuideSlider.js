import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React, { Component } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import styleGuide1 from './assets/images/1styleguide_CoverSilasCundiff.png';
import styleGuide2 from './assets/images/2styleguide_IntroductionSilasCundiff.png';
import styleGuide3 from './assets/images/3styleguide_ColorsSilasCundiff.png';
import styleGuide4 from './assets/images/4styleguide_FontsSilasCundiff.png';
import styleGuide5 from './assets/images/5styleguide_LogoStylesSilasCundiff.png';
import styleGuide6 from './assets/images/6styleguide_CreditsSilasCundiff.png';

export default class StyleGuideSlider extends Component {
  render() {
    var settings = {
      className: 'center',
      centerMode: true,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      pauseOnHover: true,
    };
    return (
      <div>
        <StyledSlider {...settings}>
          <div>
            <StyledImage src={styleGuide1} alt='Style Guide 1' />
          </div>
          <div>
            <StyledImage src={styleGuide2} alt='Style Guide 2' />
          </div>
          <div>
            <StyledImage src={styleGuide3} alt='Style Guide 3' />
          </div>
          <div>
            <StyledImage src={styleGuide4} alt='Style Guide 4' />
          </div>
          <div>
            <StyledImage src={styleGuide5} alt='Style Guide 5' />
          </div>
          <div>
            <StyledImage src={styleGuide6} alt='Style Guide 6' />
          </div>
        </StyledSlider>
      </div>
    );
  }
}

const StyledSlider = styled(Slider)`
  height: 50vh;
  width: 60vw;
  .slick-arrow {
    color: black;
  }
`;
const StyledDiv = styled.div``;
const StyledImage = styled.img`
  width: 99%;
  height: auto;
  border-radius: 10px;
  /* box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.5), 0 10px 20px 0 rgba(0, 0, 0, 0.5); */
`;
