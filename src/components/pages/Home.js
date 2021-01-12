import React from 'react';
import HomeAnimation from './animations/HomeAnimation';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import HomeContent from './content/HomeContent';
function Home() {
  return (
    <motion.div
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <HomeAnimation />
      <HomeContent />
    </motion.div>
  );
}

export default Home;
