import React, { useState, useEffect } from "react";
import "./PopularFilters.css";

const PopularFilters = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <div className="popularFiltersWrapper">
      <div className="popularFiltersContainer">
        <div className="popularFiltersBlock">
          <div
            className={`popularFiltersBox ${
              selectedFilter === "Recommended" ? "Selected" : null
            }`}
            onClick={() => {
              setSelectedFilter("Recommended");
            }}
          >
            <div className="popularFilterTitle">
              <div className="popularFilterIcon">
                <i class="fas fa-star"></i>
              </div>
              Recommended
            </div>
            <div className="popularFilterAvegragePrice">$487</div>
          </div>

          <div className="popularFilterDivision"></div>

          <div
            className={`popularFiltersBox ${
              selectedFilter === "Cheapest" ? "Selected" : null
            }`}
            onClick={() => {
              setSelectedFilter("Cheapest");
            }}
          >
            <div className="popularFilterTitle">
              <div className="popularFilterIcon">
                <i class="fas fa-tag"></i>
              </div>
              Cheapest
            </div>
            <div className="popularFilterAvegragePrice">$455</div>
          </div>
          <div className="popularFilterDivision"></div>
          <div
            className={`popularFiltersBox ${
              selectedFilter === "Shortest" ? "Selected" : null
            }`}
            onClick={() => {
              setSelectedFilter("Shortest");
            }}
          >
            <div className="popularFilterTitle">
              {" "}
              <div className="popularFilterIcon">
                <i class="fas fa-clock"></i>
              </div>
              Shortest
            </div>
            <div className="popularFilterAvegragePrice">$821</div>
          </div>
          <div className="popularFilterDivision"></div>
          <div
            className={`popularFiltersBox ${
              selectedFilter === "Alternate Dates" ? "Selected" : null
            }`}
            onClick={() => {
              setSelectedFilter("Alternate Dates");
            }}
          >
            <div className="popularFilterTitle">
              {" "}
              <div className="popularFilterIcon">
                <i class="fas fa-calendar-alt"></i>
              </div>
              Alternate Dates
            </div>
            <div className="popularFilterAvegragePrice">$467</div>
          </div>
          <div className="popularFilterDivision"></div>
          <div
            className={`popularFiltersBox ${
              selectedFilter === "Nearby Airports" ? "Selected" : null
            }`}
            onClick={() => {
              setSelectedFilter("Nearby Airports");
            }}
          >
            <div className="popularFilterTitle">
              {" "}
              <div className="popularFilterIcon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              Nearby Airports
            </div>
            <div className="popularFilterAvegragePrice">$455</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopularFilters;
