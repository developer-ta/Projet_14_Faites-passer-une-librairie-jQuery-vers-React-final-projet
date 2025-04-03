import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/homeHeader/Header";


export default function MainLayout() {
  return (
    <>
    
      <Header/>

      {/*page body components */}
      <Outlet/>
      <Footer/>
    </>
  );
}
