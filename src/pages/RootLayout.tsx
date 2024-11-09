import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import auth from "../firebase/config";
import useGlobalState from "../hooks/useGlobalState";

export default function RootLayout() {
  const { dispatch } = useGlobalState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch({ type: "SET_USER", payload: currentUser });
      } else {
        dispatch({ type: "SET_USER", payload: null });
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  if (loading) return <Loading />;

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
