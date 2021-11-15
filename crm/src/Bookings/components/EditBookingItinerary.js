import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./EditBookingItinerary.css";

const EditBookingItinerary = () => {
  const [departDate, setDepartDate] = useState("Sat, Sept 02 ,2021");
  const [departTime, setDepartTime] = useState("13:00");
  const [arrivalDate, setArrivalDate] = useState("Sat, Sept 02 ,2021");
  const [arrivalTime, setArrivalTime] = useState("18:20");
  const [departAirport, setDepartAirport] = useState("LAX");
  const [departCity, setDepartCity] = useState("Los Angeles");
  const [arrivalAirport, setArrivalAirport] = useState("JFK");
  const [arrivalCity, setArrivalCity] = useState("New York City");
  const [inputborder, setInputBorder] = useState();
  return (
    <>
      <div className="bookingItineraryBlock">
        <div className="informationHeader">Itinerary -</div>

        <div className="bookingItineraryWrapper">
          <div className="bookingItineraryContainer">
            <div className="itineraybox">
              <div className="itinerayTakeoffDate">
                <input
                  type="text"
                  autoComplete="none"
                  placeholder="Depart Date*"
                  value={departDate}
                  onChange={(e) => {
                    setDepartDate(e.target.value);
                  }}
                  name="departDate"
                  id="departDate"
                  onClick={() => {
                    setInputBorder("departDate");
                  }}
                  className={`inputEditBookingDates ${
                    inputborder === "departDate" ? "inputActive" : null
                  }`}
                />
              </div>
              <div className="itinerayTakeoffTime">
                Depart -{" "}
                <input
                  type="text"
                  autoComplete="none"
                  placeholder="Depart Time*"
                  value={departTime}
                  onChange={(e) => {
                    setDepartTime(e.target.value);
                  }}
                  name="departTime"
                  id="departTime"
                  onClick={() => {
                    setInputBorder("departTime");
                  }}
                  className={`inputEditBookingTime ${
                    inputborder === "departTime" ? "inputActive" : null
                  }`}
                />
                Hrs
              </div>
              <div className="itinerayTakeoffFrom">
                <div className="airportCode">
                  From-{" "}
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="Depart Time*"
                    value={departAirport}
                    onChange={(e) => {
                      setDepartAirport(e.target.value);
                    }}
                    name="departTime"
                    id="departTime"
                    onClick={() => {
                      setInputBorder("departAirport");
                    }}
                    className={`inputEditDepartAirport ${
                      inputborder === "departAirport" ? "inputActive" : null
                    }`}
                  />
                </div>
                <div className="cityName">
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="Depart Time*"
                    value={departCity}
                    onChange={(e) => {
                      setDepartCity(e.target.value);
                    }}
                    name="departTime"
                    id="departTime"
                    onClick={() => {
                      setInputBorder("departCity");
                    }}
                    className={`inputEditDepartCity ${
                      inputborder === "departCity" ? "inputActive" : null
                    }`}
                  />
                </div>
              </div>
            </div>
            <div className="itineraystrip">
              <div className="itineraryTravelTime">
                <div> Travel Time-</div>
                <div>
                  {" "}
                  <b>5 h : 20 m</b>
                </div>
              </div>
              <div className="itineraryLayOver">
                <div> Layover-</div>
                <div>
                  {" "}
                  <b>No layover</b>
                </div>
              </div>
              <div className="itineraryAirlineInfo">
                <div className="airlineName">Delta</div>
                <div className="flightInfoContainer">
                  <div className="flightNo">
                    Flight- <b>528</b>
                  </div>
                  <div className="aircraftNo">
                    Aircraft- <b>32B</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="itineraybox">
              <div className="itinerayArriveDate">
                <input
                  type="text"
                  autoComplete="none"
                  placeholder="Departre Date*"
                  value={arrivalDate}
                  onChange={(e) => {
                    setArrivalDate(e.target.value);
                  }}
                  name="arrivalDate"
                  id="arrivalDate"
                  onClick={() => {
                    setInputBorder("arrivalDate");
                  }}
                  className={`inputEditBookingDates ${
                    inputborder === "arrivalDate" ? "inputActive" : null
                  }`}
                />
              </div>
              <div className="itinerayArriveTime">
                Arrive -{" "}
                <input
                  type="text"
                  autoComplete="none"
                  placeholder="Depart Time*"
                  value={arrivalTime}
                  onChange={(e) => {
                    setArrivalTime(e.target.value);
                  }}
                  name="arrivalTime"
                  id="arrivalTime"
                  onClick={() => {
                    setInputBorder("arrivalTime");
                  }}
                  className={`inputEditBookingTime ${
                    inputborder === "arrivalTime" ? "inputActive" : null
                  }`}
                />
                Hrs
              </div>
              <div className="itinerayArriveTo">
                <div className="airportCode">
                  To-{" "}
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="Depart Time*"
                    value={arrivalAirport}
                    onChange={(e) => {
                      setArrivalAirport(e.target.value);
                    }}
                    name="departTime"
                    id="departTime"
                    onClick={() => {
                      setInputBorder("arrivalAirport");
                    }}
                    className={`inputEditArrivalAirport ${
                      inputborder === "arrivalAirport" ? "inputActive" : null
                    }`}
                  />
                </div>
                <div className="cityName">
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="Depart Time*"
                    value={arrivalCity}
                    onChange={(e) => {
                      setArrivalCity(e.target.value);
                    }}
                    name="departTime"
                    id="departTime"
                    onClick={() => {
                      setInputBorder("arrivalCity");
                    }}
                    className={`inputEditArrivalCity ${
                      inputborder === "arrivalCity" ? "inputActive" : null
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="itinerayClassPackageContainer">
            <div className="itinerayClass">
              Class- <b>Business</b>
            </div>
            <div className="itinerayPackage">
              Package- <b>Premium</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBookingItinerary;
