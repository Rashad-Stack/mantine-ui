import { ActionsType, InitialState } from "../../types";
import { SET_USER } from "./actions";

// Reducer
const reducers = (state: InitialState, action: ActionsType) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
export type ReducerType = typeof reducers;
