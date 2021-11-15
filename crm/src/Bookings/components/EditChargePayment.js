import React, { useState } from "react";
import "./EditChargePayment.css";

const EditChargePayment = () => {
  const [prevAmt, setPrevAmt] = useState("530");
  const [penalty, setPenalty] = useState("120");
  const [processingFee, setProcessingFee] = useState("110");
  const [inputborder, setInputBorder] = useState();
  return (
    <>
      <div className="editChargePaymentWrapper">
        <div className="informationHeader"> Payment For changes -</div>

        <div className="editChargePaymentBlock">
          <div className="editChargePaymentContainer">
            <div className="previousPaidTotalContainer">
              <div className="previousPaidTotalLabel">
                Previous Amount Paid-
              </div>
              <div className="previousPaidTotalCost">
                <input
                  type="text"
                  autoComplete="none"
                  placeholder="Passenger Name*"
                  value={prevAmt}
                  onChange={(e) => {
                    setPrevAmt(e.target.value);
                  }}
                  name="penalty"
                  id="penalty"
                  onClick={() => {
                    setInputBorder("prevAmt");
                  }}
                  className={`inputPrevAmt ${
                    inputborder === "prevAmt" ? "inputActive" : null
                  }`}
                />
              </div>
            </div>
            <div className="changesPenaltyConatiner">
              <div className="changesPenaltyLabel">Flight Change Penalty-</div>
              <div className="changesPenaltyCost">
                <input
                  type="text"
                  autoComplete="none"
                  placeholder="Passenger Name*"
                  value={penalty}
                  onChange={(e) => {
                    setPenalty(e.target.value);
                  }}
                  name="penalty"
                  id="penalty"
                  onClick={() => {
                    setInputBorder("penalty");
                  }}
                  className={`inputChangeCharges ${
                    inputborder === "penalty" ? "inputActive" : null
                  }`}
                />
              </div>
            </div>
            <div className="changesProcessingFeeConatiner">
              <div className="changesProcessingFeeLabel">
                Fly0kart Processing Fee-
              </div>
              <div className="changesProcessingFeeCost">
                <input
                  type="text"
                  autoComplete="none"
                  placeholder="Processing Fee*"
                  value={processingFee}
                  onChange={(e) => {
                    setProcessingFee(e.target.value);
                  }}
                  name="processingFee"
                  id="processingFee"
                  onClick={() => {
                    setInputBorder("processingFee");
                  }}
                  className={`inputChangeCharges ${
                    inputborder === "processingFee" ? "inputActive" : null
                  }`}
                />
              </div>
            </div>
            <div className="paymentDivider">
              <b>
                ------------------------------------------------------------------------------------------------------
              </b>
            </div>
            <div className="changesTotalConatiner">
              <div className="changesTotalLabel">Total Amount-</div>
              <div className="changesTotalCost">
                <b>$760</b>
              </div>
            </div>

            <div className="previousPaidTotalContainer">
              <div className="previousPaidTotalLabel">
                Previous Amount Paid-
              </div>
              <div className="previousPaidTotalCost">
                <b> - $530</b>
              </div>
            </div>
            <div className="paymentDivider">
              <b>
                ------------------------------------------------------------------------------------------------------
              </b>
            </div>
            <div className="amountPayableConatiner">
              <div className="amountPayableLabel">Amount Payable-</div>
              <div className="amountPayableCost">
                <b>$230</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditChargePayment;
