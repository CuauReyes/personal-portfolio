import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const LayoutPublic = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default LayoutPublic;
