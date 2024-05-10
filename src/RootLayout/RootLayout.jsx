import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Nav from "../Shared/Navbar/Nav";
import Footer from "../Shared/Footer/Footer";
import TopHeader from "../Shared/Navbar/TopHeader";
import Spinner from "../Shared/Spinner/Spinner";


export default function RootLayout() {
  const navigation = useNavigation()
  return (
    <>
        <div> 
        <ScrollRestoration />
          <header>
            <TopHeader/>
          </header>
           <header>
           <Nav/>
           </header>
           <main className="">
           {
            navigation.state ==="loading" ? <Spinner/> : <Outlet/>
        }
           </main>
           <footer>
            <Footer/>
           </footer>
        </div>
    </>
  )
}
