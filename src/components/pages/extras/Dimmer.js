import React from 'react';
import styled from 'styled-components';

function Dimmer() {
  return <DimmerStyle></DimmerStyle>;
}
const DimmerStyle = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
`;
export default Dimmer;
