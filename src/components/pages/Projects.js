import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ProjectsAnimation from './animations/ProjectsAnimation';
function Projects() {
  return (
    <motion.div
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <ProjectsAnimation />
    </motion.div>
  );
}

export default Projects;
