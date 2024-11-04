import { INCREMENT, DECREMENT } from '../actions/actions';

const initialState = {
  count: 100,
};

const counterReducer = (state = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;