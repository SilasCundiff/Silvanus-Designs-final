import { ANIMATION_ENDED } from './types';

export const animationState = () => (dispatch) => {
  dispatch({
    type: ANIMATION_ENDED,
    payload: {
      ended: false,
    },
  });
};
