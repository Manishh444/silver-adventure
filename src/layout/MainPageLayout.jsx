import React, { useEffect }from "react";
import Header from "../Components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import WhatsAppButton from "@/Components/WhatsAppButton";

const MainPageLayout = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <>
      <div className="container m-0 p-0 min-w-full">
        <Header />
        <Outlet />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default MainPageLayout;
