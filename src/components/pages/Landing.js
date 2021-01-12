import React from 'react';
import LandingContent from './content/LandingContent';
import LandingAnimation from './animations/LandingAnimation';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
function Landing() {
  return (
    <motion.div
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <LandingContent />
      <LandingAnimation />
    </motion.div>
  );
}

export default Landing;
