import { Navigate, Outlet, useLocation } from "react-router-dom";
import useGlobalState from "../hooks/useGlobalState";

export default function Protected() {
  const { user } = useGlobalState();
  const { pathname } = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate
      to="/auth"
      replace={true}
      state={{
        from: { pathname },
      }}
    />
  );
}
