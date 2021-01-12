import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade, titleAnimation } from '../../animation';
import { Link } from 'react-router-dom';
function LandingContent() {
  return (
    <PageWrapper>
      <Hide>
        <TitleContainer>
          <Title variants={fade}>Silvanus Designs</Title>
        </TitleContainer>
      </Hide>
      <TagLineContainer>
        <motion.div>
          <Hide>
            <StyledH2 variants={titleAnimation}>
              Making the web <br />
              <span>Beautiful</span>
            </StyledH2>
          </Hide>
          <Hide>
            <StyledH3 variants={titleAnimation}>One Website at a time</StyledH3>
          </Hide>
          <Hide>
            <StyledH2 variants={titleAnimation}></StyledH2>
          </Hide>
        </motion.div>
      </TagLineContainer>
      <Hide>
        <ButtonsContainer>
          <motion.button variants={titleAnimation}>
            <Link to='/projects'>Projects</Link>
          </motion.button>
          <motion.button variants={titleAnimation}>
            <Link to='/contact'>Contact</Link>
          </motion.button>
        </ButtonsContainer>
      </Hide>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Letterman';
  font-weight: 600;
  color: #fafafa;
`;
const TitleContainer = styled.div`
  z-index: 2;
  position: relative;
`;
const Title = styled(motion.h1)`
  font-size: 10rem;
  line-height: 1;
  margin: 4rem 1rem 2.2rem;
  text-align: center;
  text-shadow: 2px 4px 1px #1a1a1a;
`;
const TagLineContainer = styled(motion.div)`
  display: flex;
  text-align: center;
  padding: 1rem;
  color: #fafafa;
  text-shadow: 3px 3px 3px #1a1a1a;
  z-index: 10;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const StyledH2 = styled(motion.h2)`
  font-size: 6rem;
  margin: 0 2rem;
  line-height: 0.9;
  span {
    font-size: 8rem;
  }
`;
const StyledH3 = styled(motion.h3)`
  font-family: 'Olivetta';
  font-weight: 400;
  font-size: 3rem;
`;
const ButtonsContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  button {
    border: none;
    border-radius: 10px;
    background: #1a1a1a;
    font-size: 2rem;
    padding: 1rem 2rem;
    margin: 2rem;
    box-shadow: 2px 2px 1px #fafafa;
    z-index: 10;
    a {
      text-decoration: none;
      color: #fafafa;
    }
  }
`;
export default LandingContent;
