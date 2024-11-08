import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RootLayout() {
  const user = false;
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-4">
        {/* This is where the page content will go */}
        {user ? <Outlet /> : <Navigate to="auth" />}
      </main>
      <Footer />
    </div>
  );
}
