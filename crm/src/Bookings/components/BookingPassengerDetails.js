import React from "react";
import "./BookingPassengerDetails.css";

const BookingPassengerDetails = () => {
  return (
    <>
      <div className="bookingPassengerDetailsBlock">
        <div className="informationHeader">Passenger Details -</div>

        <div className="bookingPassengerDetailsWrapper">
          <div className="bookingPassengerDetailsContainer">
            <div className="passengerDetailsBlock">
              <div className="passengerHeader">
                <div className="passengerType"> Primary Passenger - </div>
                <div className="passengerName">
                  <b>John Doe</b>
                </div>
              </div>
              <div className="passengerGenderDob">
                <div className="passengerGender">
                  Gender- <b>Male</b>
                </div>
                <div className="passengerDob">
                  DOB- <b>27/09/1978</b>
                </div>
              </div>
            </div>

            <div className="passengerDivider">
              -------------------------------------------------------------------------------------------------
            </div>
            <div className="passengerDetailsBlock">
              <div className="passengerHeader">
                <div className="passengerType"> Adult 2 - </div>
                <div className="passengerName">
                  <b>Jane Doe</b>
                </div>
              </div>
              <div className="passengerGenderDob">
                <div className="passengerGender">
                  Gender- <b>Female</b>
                </div>
                <div className="passengerDob">
                  DOB- <b>06/12/1980</b>
                </div>
              </div>
            </div>

            <div className="passengerDivider">
              -------------------------------------------------------------------------------------------------
            </div>
            <div className="passengerDetailsBlock">
              <div className="passengerHeader">
                <div className="passengerType"> Child 1 - </div>
                <div className="passengerName">
                  <b>Sam Doe</b>
                </div>
              </div>
              <div className="passengerGenderDob">
                <div className="passengerGender">
                  Gender- <b>Male</b>
                </div>
                <div className="passengerDob">
                  DOB- <b>12/02/2019</b>
                </div>
              </div>
            </div>

            <div className="passengerDivider">
              -------------------------------------------------------------------------------------------------
            </div>

            <div className="passengerAddressContainer">
              Address-
              <b>abc, apartment no 104, 4th street LA, Pin- 43896.</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPassengerDetails;
