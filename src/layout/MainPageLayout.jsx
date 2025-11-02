import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const MainPageLayout = () => {
  return (
    <>
      <div className="container m-0 p-0 min-w-full min-h-dvh border-4 border-red-700">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainPageLayout;
