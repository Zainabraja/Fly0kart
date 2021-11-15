import React from "react";
import { useSelector } from "react-redux";
import AdminInfo from "../hoc/AdminInfo";
import SearchBookings from "./Components/SearchBookings";
import "./home.css";

const HomePage = () => {
  return (
    <>
      <div className="adminHomeWrapper">
        <div className="adminInfoWrapper">
          <AdminInfo />
        </div>
        <div className="BookingsInfoWrapper">
          <SearchBookings />
        </div>
      </div>
    </>
  );
};

export default HomePage;
