import React from 'react';
import styled from 'styled-components';
import AnimateCC from 'react-adobe-animate';
function HomeAnimation() {
  return (
    <div>
      <Animation animationName='spring' />
    </div>
  );
}
const Animation = styled(AnimateCC)`
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
`;
export default HomeAnimation;
