import { Outlet } from "react-router-dom";
import Nav from "../Shared/Navbar/Nav";
import Footer from "../Shared/Footer/Footer";
import TopHeader from "../Shared/Navbar/TopHeader";


export default function RootLayout() {
  return (
    <>
        <div> 

          <header>
            <TopHeader/>
          </header>
           <header>
           <Nav/>
           </header>
           <main className="min-h-screen">
            <Outlet/>
           </main>
           <footer>
            <Footer/>
           </footer>
        </div>
    </>
  )
}
