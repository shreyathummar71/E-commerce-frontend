import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div>E-commerce API</div>
      <Footer />
    </>
  );
};

export default MainLayout;
