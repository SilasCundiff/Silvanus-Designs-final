import { ANIMATION_ENDED } from '../actions/types';

const initialState = {
  payload: {
    ended: false,
  },
};

export default function animation(state = initialState, action) {
  switch (action.type) {
    case ANIMATION_ENDED:
      return {
        ...state,
        payload: {
          ended: (action.ended = true),
        },
      };
    default:
      return state;
  }
}
