import { useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { auth } from "../firebase/config";
import useGlobalState from "../hooks/useGlobalState";

export default function RootLayout() {
  const { dispatch, isLoading } = useGlobalState();
  const { state } = useNavigation();

  useEffect(() => {
    if (auth.currentUser) {
      dispatch({ type: "SET_USER", payload: auth.currentUser });
    } else {
      dispatch({ type: "SET_USER", payload: null });
    }
  }, [dispatch]);

  return (
    <div className="flex min-h-screen flex-col">
      {(isLoading || state === "loading") && <Loading />}
      <Header />
      <main className="flex-1 p-4">
        {/* This is where the page content will go */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
