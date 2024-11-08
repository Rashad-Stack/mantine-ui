import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <main className='flex-1 p-4'>
        {/* This is where the page content will go */}
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}
