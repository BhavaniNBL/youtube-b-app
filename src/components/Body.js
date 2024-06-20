import React from "react";
import Sidebar from "./Sidebar";
// import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex h-screen overflow-y-auto hide-scrollbar">
      <Sidebar />
      {/* <MainContainer /> */}
      {/* children in the path of the approuter will display here thats why we have used outlet  */}
      <Outlet />
    </div>
  );
};

export default Body;
