import React from "react";
import { useSelector } from "react-redux";
import "./BookingInfoResult.css";

const BookingInfoResult = ({
  bookingid,
  PRNno,
  ticketNo,
  bookingdate,
  bookingTime,
  custFirstname,
  custLastName,
  cardNo,
  nameOnCard,
}) => {
  return (
    <>
      {" "}
      <div className="bookingInformationBlock">
        <div className="informationHeader">Booking Information -</div>

        <div className="bookingInformationContainer">
          <div className="bookingSerialNumberContainer">
            <div className="bookingId">
              {" "}
              Booking ID- <b>{bookingid}</b>
            </div>
            <div className="bookingPRN">
              PNR Number- <b>{PRNno}</b>{" "}
            </div>
            <div className="bookingTicketNumber">
              Ticket Number- <b>{ticketNo}</b>
            </div>
          </div>

          <div className="bookingCreationInformationContainer">
            <div className="bookingCreationDate">
              Date of Booking- <b>{bookingdate}</b>
            </div>
            <div className="bookingCreationTime">
              Time of Booking- <b>{bookingTime}</b>
            </div>
          </div>

          <div className="bookingCustomerInformationContainer">
            <div className="customerName">
              <div className="customerFirstName">
                {" "}
                First Name- <b>{custFirstname}</b>
              </div>
              <div className="customerLastName">
                {" "}
                Last Name- <b>{custLastName}</b>
              </div>
            </div>
            <div className="paymentCardNo">
              Card Number- <b>{cardNo} </b>
            </div>
            <div className="paymentNameOnCard">
              Name On Card- <b>{nameOnCard}</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingInfoResult;
