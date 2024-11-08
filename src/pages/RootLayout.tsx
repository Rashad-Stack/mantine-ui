import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <main className='flex-1 p-4'>
        {/* This is where the page content will go */}
        <Outlet />
      </main>
      <footer className='bg-gray-800 text-white p-4'>
        <p>&copy; 2021 My App</p>
      </footer>
    </div>
  )
}
