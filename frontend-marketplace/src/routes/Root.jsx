import Navbar from "../shared/navbar/Navbar"
import Footer from "../shared/footer/Footer"
import './root.css'
import { Outlet } from "react-router-dom";

//this is the layout of every page. There's a navbar, an outlet component which will render
//the child of the main route, and the footer at the bottom of the page
export default function Root(){
    return (
      <>
        <div className="root-layout">
          <Navbar />
          <Outlet />
        </div>
        <br></br> <br></br>
        <Footer />
      </>
    );
}