import React, { useState } from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import AnimateCC from 'react-adobe-animate';
import AnimateCCC from './animate_custom';
import store from './store';
import './App.css';

// store.dispatch({
//   type: 'ANIMATION_ENDED',
//   payload: 'ended',
// });

const App = () => {
  const [paused, setPaused] = useState(false);
  const [, setAnimationObject] = useState(null);
  const getAnimationObject = (obj) => setAnimationObject(obj);
  const pauseHandler = () => {
    return setPaused(!paused);
  };
  const hidePaused = () => {
    setTimeout(() => {
      return setPaused(true);
    }, 5000);
  };
  return (
    <Provider store={store}>
      <IntroCanvas id={`${paused ? `introhide` : `introshow`}`}>
        <AnimationIntro
          animationName='intro'
          paused={paused}
          hidepaused={hidePaused()}
        />
      </IntroCanvas>
      <LogoCanvas id={`${paused ? `show` : `hide`}`}>
        <Animation animationName='windy2' onClick={pauseHandler} />
      </LogoCanvas>
    </Provider>
  );
};

const LogoCanvas = styled.div`
  * {
    * {
      width: 100vw !important;
      height: 100vh !important;
      background-color: transparent !important;
      margin: 0 !important;
      padding: 0 !important;
      position: fixed !important;
      object-fit: cover !important;
      top: 0 !important;
      left: 0 !important;
      z-index: -1;
      transition: all ease-out 1s;
    }
  }
`;
const IntroCanvas = styled.div`
  * {
    * {
      width: 100vw !important;
      height: 100vh !important;
      background-color: transparent !important;
      margin: 0 !important;
      padding: 0 !important;
      position: fixed !important;
      object-fit: cover !important;
      top: 0 !important;
      left: 0 !important;
      z-index: -1;
      transition: all ease-out 1s;
    }
  }
`;
const Animation = styled(AnimateCC)`
  opacity: 1;
`;
const AnimationIntro = styled(AnimateCCC)`
  opacity: 1;
`;

export default App;
