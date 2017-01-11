import { INCREMENT } from "../actions";
const { assign } = Object;

const appReducer = (state = { num: 0 }, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return assign({}, state, {
        num: state.num + 1
      });
    default:
      return state;
  }
};

export default appReducer