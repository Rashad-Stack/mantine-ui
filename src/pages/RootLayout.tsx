import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import auth from "../firebase/config";
import useGlobalState from "../hooks/useGlobalState";

export default function RootLayout() {
  const { dispatch } = useGlobalState();

  useEffect(() => {
    if (auth.currentUser) {
      dispatch({ type: "SET_USER", payload: auth.currentUser });
    } else {
      dispatch({ type: "SET_USER", payload: null });
    }
  }, [dispatch]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-4">
        {/* This is where the page content will go */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
