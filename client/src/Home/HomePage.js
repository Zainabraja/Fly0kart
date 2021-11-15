import React from "react";
import Header from "../Header/index";
import SearchFlightBlock from "./components/SearchFlightBlock";
import MyButton from "../Utilities/Button";
import { useSelector, useDispatch } from "react-redux";
import "./homePage.css";

///REDUX
import { setError } from "../actions/HomePageActions";
const HomePage = () => {
  const dispatch = useDispatch();
  const departure = useSelector((state) => state.Home.departure);
  const destination = useSelector((state) => state.Home.destination);
  const radio = useSelector((state) => state.Home.radio);
  const error = useSelector((state) => state.Home.errorMessage);
  const departureDate = useSelector((state) => state.Home.departureDate);
  const returnDate = useSelector((state) => state.Home.returnDate);
  const adultCount = useSelector((state) => state.Home.adultCount);
  const childrenCount = useSelector((state) => state.Home.childrenCount);
  const infantCount = useSelector((state) => state.Home.infantCount);

  const cabinClass = useSelector((state) => state.Home.travelClass);
  const validation = () => {
    if (departure && destination) {
      if (departure.code === destination.code) {
        dispatch(setError("From & to airports cannot be same"));
      } else {
        dispatch(setError(""));
      }
    }
    if (departure === null && destination === null) {
      dispatch(setError("please select departure & destination to proceed"));
    }
    if (radio === "twoway" && returnDate === "") {
      dispatch(setError("Please select a return date to proceed"));
    }
  };
  const handleSearchBtn = () => {
    validation();
  };

  const handleLinks = () => {
    if (error === "") {
      var trip = "";
      var query = "";

      var depOne = departure ? departure.code : "";
      var desOne = destination ? destination.code : "";

      var depDateOneDay = departureDate.day.toString();
      var depDateOnemonth = departureDate.month.toString();
      var depDateOneyear = departureDate.year.toString();

      if (radio === "oneway") {
        trip = "OneWay";
        query = `tripType=${trip}&itinerary=${depOne}-${desOne}_${depDateOneDay}-${depDateOnemonth}-${depDateOneyear}&A-${adultCount}_C-${childrenCount}_I-${infantCount}&cabinClass-${cabinClass}`;
      } else if (radio === "twoway") {
        if (returnDate) {
          trip = "TwoWay";
          var deptwo = destination ? destination.code : "";
          var destwo = departure ? departure.code : "";
          var depDatetwoDay = returnDate.day.toString();
          var depDatetwomonth = returnDate.month.toString();
          var depDatetwoyear = returnDate.year.toString();
          query = `tripType=${trip}&itinerary=${depOne}-${desOne}_${depDateOneDay}-${depDateOnemonth}-${depDateOneyear}&${deptwo}-${destwo}_${depDatetwoDay}-${depDatetwomonth}-${depDatetwoyear}&A-${adultCount}_C-${childrenCount}_I-${infantCount}&cabinClass-${cabinClass}`;
        } else {
        }
      }

      const usp = new URLSearchParams(query);
      var searchParams = usp.toString();

      return `search/${searchParams}`;
    }
  };
  return (
    <>
      <Header />
      <div className="searchFlightWrapper">
        <SearchFlightBlock />
      </div>
      <div className="btnSearch">
        <MyButton
          type="default"
          label="Search"
          padding=" 6px 60px 6px 60px"
          fontsize="28px"
          runAction={() => {
            handleSearchBtn();
          }}
          linkTo={handleLinks()}
        />
      </div>
    </>
  );
};

export default HomePage;
