import React, { lazy, useContext, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxios";
import { useAuth } from "../hooks/AuthContext";
const NavBar = lazy(() => import("../components/NavBar"));
const Footer = lazy(() => import("../components/Footer"));

const Home = () => {


  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col items-center justify-between">
        {/* header */}
        <NavBar />
        {/* footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;