import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import AboutAnimation from './animations/AboutAnimation';
const About = () => {
  return (
    <motion.div
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <AboutAnimation />
    </motion.div>
  );
};

export default About;
