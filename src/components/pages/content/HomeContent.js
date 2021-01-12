import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import StyleGuideSlider from '../extras/StyleGuideSlider';

function HomeContent() {
  return (
    <Container>
      <StyledH2>The Silvanus Designs Style Guide</StyledH2>
      <StyleGuideSlider />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 15%;
  right: 5%;
  z-index: 2;
`;
const StyledH2 = styled.h2`
  font-size: 4rem;
  margin: 0 auto 2rem;
  text-align: center;
  color: #ffd3de;
`;
export default HomeContent;
