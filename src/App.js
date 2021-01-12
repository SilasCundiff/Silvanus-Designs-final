import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import { Switch, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

import { AnimatePresence } from 'framer-motion';
import Dimmer from './components/pages/extras/Dimmer';
const App = () => {
  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <Landing />
          </Route>
          <Route path='/home' exact>
            <Home />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/projects' exact>
            <Projects />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
      <Dimmer />
    </div>
  );
};

export default App;
