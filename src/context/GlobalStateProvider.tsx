import { createContext, useEffect, useReducer } from "react";
import { ActionsType, InitialState, User } from "../../types";
import auth from "../firebase/config";
import { SET_USER } from "./actions";
import reducers from "./reducers";

// Initial state
const initialState: InitialState = { user: null as User | null };
// Create context
const GlobalStateContext = createContext<{
  state: InitialState;
  dispatch: React.Dispatch<ActionsType>;
}>({
  state: initialState,
  dispatch: () => null,
});

function GlobalStateProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(
    reducers as React.Reducer<InitialState, ActionsType>,
    initialState,
  );

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      dispatch({ type: SET_USER, payload: user });
    }
  }, []);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export { GlobalStateContext, GlobalStateProvider };
