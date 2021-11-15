import React from "react";
import "./BookingPaymentInfo.css";

const BookingPaymentInfo = () => {
  return (
    <>
      <div className="bookingPaymentInfoBlock">
        <div className="informationHeader">Payment Information -</div>

        <div className="bookingPaymentInfoWrapper">
          <div className="bookingPaymentInfoContainer">
            <div className="customerDetailsContainer">
              <div className="paymentNameOnCard">
                Name on Card- <b>John Doe</b>
              </div>
              <div className="paymentCardNo">Card No- ****-****-****-4579</div>
            </div>
            <div className="paymentBreakdownBlock">
              <div className="paymentHeader">Ticketing Cost-</div>
              <div className="paymentBreakdownContainer">
                <div className="passengerNumberType">
                  <b>2 </b>Adult
                </div>
                <div>X</div>
                <div className="passengerCategoryTotal">
                  {" "}
                  $150 = <b>$300</b>
                </div>
              </div>
              <div className="paymentBreakdownContainer">
                <div className="passengerNumberType">
                  <b>1 </b>Child
                </div>
                <div>X</div>
                <div className="passengerCategoryTotal">
                  {" "}
                  $120 = <b>$120</b>
                </div>
              </div>
              <div className="paymentDivider">
                <b>
                  ------------------------------------------------------------------------------------------------------
                </b>
              </div>

              <div className="ticketsTotalContainer">
                <div className="ticketsTotalLabel">Tickets Total- </div>
                <div className="ticketsTotalCost">
                  <b>$420</b>
                </div>
              </div>
              <div className="ticketsTotalContainer">
                <div className="ticketsTotalLabel">
                  Package (<b>Premium</b>) Cost-
                </div>
                <div className="ticketsTotalCost">
                  <b>$80</b>
                </div>
              </div>
              <div className="ticketsTotalContainer">
                <div className="ticketsTotalLabel">
                  Fly0kart Processing fee-
                </div>
                <div className="ticketsTotalCost">
                  <b>$30</b>
                </div>
              </div>

              <div className="paymentDivider">
                <b>
                  ------------------------------------------------------------------------------------------------------
                </b>
              </div>

              <div className="bookingTotalAmountConatiner">
                <div className="bookingTotalAmountLabel">
                  Total Amount Paid-
                </div>
                <div className="bookingTotalAmountPaid">
                  <b>$530</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPaymentInfo;
