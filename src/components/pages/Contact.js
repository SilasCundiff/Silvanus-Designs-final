import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ContactAnimation from './animations/ContactAnimation';
function Contact() {
  return (
    <motion.div
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <ContactAnimation />
    </motion.div>
  );
}

export default Contact;
