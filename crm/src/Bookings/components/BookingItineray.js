import React from "react";
import "./BookingItineray.css";

const BookingItinerary = () => {
  return (
    <>
      <div className="bookingItineraryBlock">
        <div className="informationHeader">Itinerary -</div>

        <div className="bookingItineraryWrapper">
          <div className="bookingItineraryContainer">
            <div className="itineraybox">
              <div className="itinerayTakeoffDate">
                <b>Sat, Sept 02 ,2021</b>
              </div>
              <div className="itinerayTakeoffTime">
                Depart - <b>13:00 hrs</b>
              </div>
              <div className="itinerayTakeoffFrom">
                <div className="airportCode">
                  From- <b>LAX,</b>
                </div>
                <div className="cityName">
                  <i>Los Angeles</i>
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
                {" "}
                <b>Sat, Sept 02 ,2021</b>
              </div>
              <div className="itinerayArriveTime">
                Arrive - <b>18:20 hrs</b>
              </div>
              <div className="itinerayArriveTo">
                <div className="airportCode">
                  To- <b>JFK,</b>
                </div>
                <div className="cityName">
                  <i>New York City</i>
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

export default BookingItinerary;
