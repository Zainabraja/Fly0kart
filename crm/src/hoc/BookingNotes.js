import React, { useState } from "react";
import MyButton from "../utilities/Button";
import useClickOutside from "../utilities/useClickOutside";
import "./BookingNotes.css";
import ReactDom from "react-dom";

const BookingNotes = ({
  bookingid,
  bookingdate,
  bookingTime,
  closeNotes,
  notesModalState,
}) => {
  const ref = useClickOutside(closeNotes);
  return ReactDom.createPortal(
    <>
      <div className="bookingNotesWrapper" ref={ref}>
        <div
          className="closeNotesContainer"
          onClick={() => {
            closeNotes();
          }}
        >
          <i class="fas fa-times"></i>
        </div>

        <div className="bookingNotesHeader">
          <div className="bookingIdNotes">
            Booking ID - <b>{bookingid}</b>
          </div>
          <div className="bookingDateTimeNotes">
            <div className="bookingDateNotes">
              Booking Date: <b>{bookingdate}</b>
            </div>
            <div className="bookingTimeNotes">
              Booked At:
              <b>{bookingTime}</b>
            </div>
          </div>
        </div>
        <div className="notesContainer">
          <div className="bookingDetailsHeader">Booking Details-</div>
          <div className="bookingNotesDetails">
            <input className="bookingDetailsInput"></input>
          </div>
        </div>

        <div className="saveNotesContainer">
          <MyButton
            type="default"
            label="Save Notes"
            padding="1% 4% 1% 4%"
            fontsize="20px"
            runAction={() => {}}
          />
        </div>
      </div>
    </>,
    document.getElementById("notesModal")
  );
};

export default BookingNotes;
