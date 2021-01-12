import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Original from '../logo/white.png';
import Home from '../logo/spring.png';
import About from '../logo/summer.png';
import Contact from '../logo/winter.png';
import Project from '../logo/autumn.png';
function Nav() {
  const { pathname } = useLocation();
  let displayedLogo = Original;
  let pageColorTheme = '#1a1a1a';
  if (pathname === '/home') {
    displayedLogo = Home;
    pageColorTheme = '#FFD3DE';
  } else if (pathname === '/about') {
    displayedLogo = About;
    pageColorTheme = '#0779e4';
  } else if (pathname === '/projects') {
    displayedLogo = Project;
    pageColorTheme = '#f79071';
  } else if (pathname === '/contact') {
    displayedLogo = Contact;
    pageColorTheme = '#8eb3bf';
  } else {
    displayedLogo = Original;
    pageColorTheme = '#fafafa';
  }

  return (
    <NavStyle>
      <h1>
        <StyledLink to='/'>
          <img src={displayedLogo} alt='Logo' />
          <span style={{ color: `${pageColorTheme}` }}>
            Silvanus
            <br />
            Designs
          </span>
        </StyledLink>
      </h1>
      <ul>
        <li>
          <HomeLink to='/home'>Home</HomeLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{
              width: pathname === '/home' ? '50%' : '0%',
              backgroundColor: pathname === '/home' ? '#FFD3DE' : 'black',
            }}
          />
        </li>
        <li>
          <AboutLink to='/about'>About</AboutLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{
              width: pathname === '/about' ? '50%' : '0%',
              backgroundColor: pathname === '/about' ? '#0779e4' : 'black',
            }}
          />
        </li>
        <li>
          <ProjectsLink to='/projects'>Projects</ProjectsLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{
              width: pathname === '/projects' ? '50%' : '0%',
              backgroundColor: pathname === '/projects' ? '#f79071' : 'black',
            }}
          />
        </li>
        <li>
          <ContactLink to='/contact'>Contact</ContactLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{
              width: pathname === '/contact' ? '50%' : '0%',
              backgroundColor: pathname === '/contact' ? '#8eb3bf' : 'black',
            }}
          />
        </li>
      </ul>
    </NavStyle>
  );
}
const NavStyle = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: transparent;
  position: sticky;
  top: 0;
  z-index: 10;
  font-size: 1.8rem;
  font-family: 'Letterman';
  color: #fafafa;

  a {
    text-decoration: none;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #1a1a1a;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-end;

  span {
    font-size: 5rem;
    line-height: 0.67;
    transition: all 1s;
    text-align: center;
    z-index: 10;
    position: relative;
  }
  img {
    height: 120px;
    width: auto;
    margin: 20px 20px 0 0;
  }
`;

const HomeLink = styled(Link)`
  color: #ffd3de;
`;
const AboutLink = styled(Link)`
  color: #c5e2fc;
`;
const ProjectsLink = styled(Link)`
  color: #f79071;
`;
const ContactLink = styled(Link)`
  color: #8eb3bf;
`;
export default Nav;
