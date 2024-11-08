import React from "react";
import { GlobalStateContext } from "../context/GlobalStateProvider";

export default function useGlobalState() {
  const { state, dispatch } = React.useContext(GlobalStateContext);

  return { ...state, dispatch };
}
