import { types } from "../types/types";

export const initialState = 16;

export const init=(value)=>{
    return parseInt(value)
}

export const couterReducer = (state, action) => {
  switch (action.type) {
    case types.increment:
      return state + 1;

    case types.decrement:
      return state - 1;

      case types.reset:
          return init(initialState);

    default:
      return state;
  }
};
