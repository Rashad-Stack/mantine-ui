import { Navigate, Outlet } from "react-router-dom";
import auth from "../firebase/config";

export default function Protected() {
  const user = auth.currentUser;

  return user ? <Outlet /> : <Navigate to="/auth" />;
}
