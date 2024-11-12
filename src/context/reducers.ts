import { ActionsType, InitialState } from "../../types";
import { SET_BOOKS, SET_USER } from "./actions";

// Reducer
const reducers = (state: InitialState, action: ActionsType) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    case SET_BOOKS:
      return {
        ...state,
        books: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducers;
export type ReducerType = typeof reducers;
