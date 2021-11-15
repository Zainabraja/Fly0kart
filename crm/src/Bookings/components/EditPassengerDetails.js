import React, { useState } from "react";
import "./EditPassengerDetails.css";

const EditPassengerDetails = () => {
  const [passengerName, setPassengerName] = useState("John Doe");
  const [passengerGender, setPassengerGender] = useState("Male");
  const [passengerDOB, setPassengerDOB] = useState("27/09/1978");
  const [passengerName2, setPassengerName2] = useState("Jane Doe");
  const [passengerGender2, setPassengerGender2] = useState("Female");
  const [passengerDOB2, setPassengerDOB2] = useState("06/12/1980");
  const [passengerName3, setPassengerName3] = useState("Sam Doe");
  const [passengerGender3, setPassengerGender3] = useState("Male");
  const [passengerDOB3, setPassengerDOB3] = useState("12/02/2019");
  const [inputborder, setInputBorder] = useState();
  return (
    <>
      <div className="editPassengerDetailsBlock">
        <div className="informationHeader">Passenger Details -</div>

        <div className="editPassengerDetailsWrapper">
          <div className="editPassengerDetailsContainer">
            <div className="passengerDetailsBlock">
              <div className="passengerHeader">
                <div className="passengerType"> Primary Passenger - </div>
                <div className="passengerName">
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="Passenger Name*"
                    value={passengerName}
                    onChange={(e) => {
                      setPassengerName(e.target.value);
                    }}
                    name="passengerName"
                    id="passengerName"
                    onClick={() => {
                      setInputBorder("passengerName");
                    }}
                    className={`inputPassengerName ${
                      inputborder === "passengerName" ? "inputActive" : null
                    }`}
                  />
                </div>
              </div>
              <div className="passengerGenderDob">
                <div className="passengerGender">
                  Gender-{" "}
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="Passenger Name*"
                    value={passengerGender}
                    onChange={(e) => {
                      setPassengerGender(e.target.value);
                    }}
                    name="passengerName"
                    id="passengerName"
                    onClick={() => {
                      setInputBorder("passengerGender");
                    }}
                    className={`inputPassengerGender ${
                      inputborder === "passengerGender" ? "inputActive" : null
                    }`}
                  />
                </div>
                <div className="passengerDob">
                  DOB-{" "}
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="Passenger Name*"
                    value={passengerDOB}
                    onChange={(e) => {
                      setPassengerDOB(e.target.value);
                    }}
                    name="passengerName"
                    id="passengerName"
                    onClick={() => {
                      setInputBorder("passengerDOB");
                    }}
                    className={`inputPassengerDOB ${
                      inputborder === "passengerDOB" ? "inputActive" : null
                    }`}
                  />
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
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="Passenger Name*"
                    value={passengerName2}
                    onChange={(e) => {
                      setPassengerName2(e.target.value);
                    }}
                    name="passengerName2"
                    id="passengerNam2e"
                    onClick={() => {
                      setInputBorder("passengerName2");
                    }}
                    className={`inputPassengerName ${
                      inputborder === "passengerName2" ? "inputActive" : null
                    }`}
                  />
                </div>
              </div>
              <div className="passengerGenderDob">
                <div className="passengerGender">
                  Gender-{" "}
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="Passenger Name*"
                    value={passengerGender2}
                    onChange={(e) => {
                      setPassengerGender2(e.target.value);
                    }}
                    name="passengerName"
                    id="passengerName"
                    onClick={() => {
                      setInputBorder("passengerGender2");
                    }}
                    className={`inputPassengerGender2 ${
                      inputborder === "passengerGender2" ? "inputActive" : null
                    }`}
                  />
                </div>
                <div className="passengerDob">
                  DOB-{" "}
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="Passenger Name*"
                    value={passengerDOB2}
                    onChange={(e) => {
                      setPassengerDOB2(e.target.value);
                    }}
                    name="passengerName"
                    id="passengerName"
                    onClick={() => {
                      setInputBorder("passengerDOB2");
                    }}
                    className={`inputPassengerDOB2 ${
                      inputborder === "passengerDOB2" ? "inputActive" : null
                    }`}
                  />
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
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="Passenger Name*"
                    value={passengerName3}
                    onChange={(e) => {
                      setPassengerName3(e.target.value);
                    }}
                    name="passengerName3"
                    id="passengerName3"
                    onClick={() => {
                      setInputBorder("passengerName3");
                    }}
                    className={`inputPassengerName ${
                      inputborder === "passengerName3" ? "inputActive" : null
                    }`}
                  />
                </div>
              </div>
              <div className="passengerGenderDob">
                <div className="passengerGender">
                  Gender-{" "}
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="Passenger Name*"
                    value={passengerGender3}
                    onChange={(e) => {
                      setPassengerGender3(e.target.value);
                    }}
                    name="passengerName"
                    id="passengerName"
                    onClick={() => {
                      setInputBorder("passengerGender3");
                    }}
                    className={`inputPassengerGender3 ${
                      inputborder === "passengerGender3" ? "inputActive" : null
                    }`}
                  />
                </div>
                <div className="passengerDob">
                  DOB-{" "}
                  <input
                    type="text"
                    autoComplete="none"
                    placeholder="Passenger Name*"
                    value={passengerDOB3}
                    onChange={(e) => {
                      setPassengerDOB3(e.target.value);
                    }}
                    name="passengerName"
                    id="passengerName"
                    onClick={() => {
                      setInputBorder("passengerDOB3");
                    }}
                    className={`inputPassengerDOB3 ${
                      inputborder === "passengerDOB3" ? "inputActive" : null
                    }`}
                  />
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

export default EditPassengerDetails;
