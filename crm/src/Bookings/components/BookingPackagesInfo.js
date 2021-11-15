import React from "react";
import "./BookingPackagesInfo.css";

const BookingPackagesInfo = () => {
  return (
    <>
      <div className="bookingPackagesBlock">
        <div className="informationHeader">Package Details -</div>

        <div className="bookingPackagesWrapper">
          <div className="bookingPackagesContainer">
            <div className="packagesDetailsBlock">
              <div className="packagesHeader">
                <div className="packageType"> Package - </div>
                <div className="packageName">
                  <b>Premium</b>
                </div>
              </div>
              <div className="packageDetails">
                Package Details- Priority assistance , Priority Refund , Quick
                resolution
              </div>
              <div className="passengerDivider">
                -------------------------------------------------------------------------------------------------
              </div>
              <div className="packageCostContainer">
                <div className="packageNameCost">
                  Package(<b>Premium</b>) Cost-
                </div>
                <div className="packageCost">
                  <b>$ 80</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPackagesInfo;
