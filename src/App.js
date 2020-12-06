import React, { useState } from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import AnimateCC from 'react-adobe-animate';
// import AnimateCCC from './animate_custom';
import store from './store';
import './App.css';

// store.dispatch({
//   type: 'ANIMATION_ENDED',
//   payload: 'ended',
// });

const App = () => {
  const [paused, setPaused] = useState(false);
  const [intro, setAnimationObject] = useState(null);
  const getAnimationObject = (obj) => setAnimationObject(obj, console.log(obj));
  console.log(intro);
  const pauseHandler = () => {
    setTimeout(() => {
      return setPaused(true);
    }, 1000);
  };
  const hidePaused = () => {
    pauseHandler();
  };

  return (
    <Provider store={store}>
      <LogoCanvas id={`${paused ? `introhide` : `introshow`}`}>
        <Animation
          animationName='intro'
          paused={paused}
          hidepaused={hidePaused()}
          getAnimationObject={getAnimationObject}
        />
      </LogoCanvas>
      <LogoCanvas id={`${paused ? `show` : `hide`}`}>
        <Animation animationName={`windy2`} onClick={pauseHandler} />
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
// const IntroCanvas = styled.div`
//   * {
//     * {
//       width: 100vw !important;
//       height: 100vh !important;
//       background-color: transparent !important;
//       margin: 0 !important;
//       padding: 0 !important;
//       position: fixed !important;
//       object-fit: cover !important;
//       top: 0 !important;
//       left: 0 !important;
//       z-index: -1;
//       /* transition: all ease-out 1s; */
//     }
//   }
// `;
const Animation = styled(AnimateCC)`
  opacity: 1;
`;
// const AnimationIntro = styled(AnimateCCC)`
//   opacity: 1;
// `;

export default App;
