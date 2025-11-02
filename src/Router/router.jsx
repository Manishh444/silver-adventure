import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPageLayout from "../layout/MainPageLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicePage from "../pages/ServicePage";
import OurWorkPage from "../pages/OurWorkPage";
import ContactPage from "../pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/work",
        element: <OurWorkPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
