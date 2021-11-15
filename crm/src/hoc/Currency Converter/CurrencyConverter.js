import React, { useState } from "react";
import "./CurrencyConverter.css";
import useClickOutside from "../../utilities/useClickOutside";
import Currencies from "./Currencies.json";
import Loader from "react-loader-spinner";
require("dotenv").config();

const CurrencyConverter = ({ closeCurrencyConversionModal }) => {
  const [dollarAmount, setDollarAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [currencyDropDwon, setCurrencyDropDown] = useState(false);
  const [convertedAmount, setConvertedAmount] = useState({});
  const [currencyConversionError, setCurrencyConversionError] = useState();
  const [spinner, setSpinner] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useClickOutside(closeCurrencyConversionModal);
  const apiKey = process.env.REACT_APP_CURRENCY_LAYER_API_KEY;
  const sourceCurrency = "USD = ";
  function filter() {
    return Currencies.filter(
      (Currencies) =>
        Currencies.currency.toUpperCase().indexOf(query.toUpperCase()) > -1 ||
        Currencies.name.indexOf(query.toUpperCase()) > -1 ||
        Currencies.symbol.indexOf(query.toUpperCase()) > -1
    );
  }

  const setOnlyNumbers = (e) => {
    var ch = String.fromCharCode(e.which);
    if (!/[0-9]/.test(ch)) {
      e.preventDefault();
    }
  };

  const FetchConversionRate = async (ID) => {
    setSpinner(true);
    const currencyName = ID.slice(3);
    if (dollarAmount === "") {
      setCurrencyConversionError("Please enter a Amount to convert");
      setSpinner(false);
    } else if (selectedCurrency === "") {
      setCurrencyConversionError("Please select a currency to convert");
      setSpinner(false);
    } else {
      fetch(`http://apilayer.net/api/live?access_key=${apiKey}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("something went wrong");
          }
          return res.json();
        })
        .then((res) => {
          console.log(res.success);
          if (res.success === true) {
            const data = res;
            console.log(selectedCurrency);
            const result = data.quotes[ID];
            console.log(result);
            setConvertedAmount({
              amount: dollarAmount * result,
              symbol: currencyName.toString(),
            });
            console.log(convertedAmount.amount);
            setCurrencyConversionError("");
            setSpinner(false);
          } else {
            const setError = (res) => {
              throw new Error(res.error.type);
            };
            setError(res);
          }
        })
        .catch((error) => {
          setCurrencyConversionError(error.message);
          setSpinner(false);
        });
    }
  };

  return (
    <div className="currencyConverterWrapper" ref={ref}>
      <div className="currencyConverterHeader">
        <div className="HeaderText">Currency Converter</div>
        <div className="closeIcon">
          <i
            class="fas fa-times"
            onClick={() => {
              closeCurrencyConversionModal();
            }}
          ></i>
        </div>
      </div>
      <div className="inputAndSelectionContainer">
        <div className="dollarAmountInput">
          <input
            className="dollarAmountInputField"
            type="text"
            placeholder="Enter Amount in US Dollars"
            onChange={(e) => {
              setDollarAmount(e.target.value);
            }}
            onKeyPress={(e) => {
              setOnlyNumbers(e);
            }}
            autoFocus
          />
        </div>
        <div className="currencySelection">
          <div
            className="selectedCurrencyDisplay"
            onClick={() => {
              setCurrencyDropDown((prev) => !prev);
            }}
          >
            <div className="selectedCurrencyText">
              {selectedCurrency ? selectedCurrency : "Select a Currency"}
            </div>
            <div className="dropDownIcon">
              {currencyDropDwon ? (
                <i class="fas fa-chevron-up"></i>
              ) : (
                <i class="fas fa-chevron-down"></i>
              )}
            </div>
          </div>
          {currencyDropDwon ? (
            <div className="currencySelectionInputWrapper">
              <input
                className="currencySelectionInputField"
                type="text"
                placeholder={
                  selectedCurrency ? { selectedCurrency } : "Select Currency"
                }
                value={query ? query : selectedCurrency ? selectedCurrency : ""}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedCurrency(null);
                }}
                autoFocus
              />
            </div>
          ) : (
            ""
          )}

          {currencyDropDwon ? (
            <div className="currencyOptions">
              {filter(Currencies).map((options) => (
                <div
                  className={`currencySingleOption ${
                    options.name === selectedCurrency ? "selected" : null
                  }`}
                  onClick={() => {
                    setSelectedCurrency(options.currency);
                    setCurrencyDropDown(false);
                  }}
                >
                  <span>{options.name}</span>
                  &nbsp; &nbsp;{options.symbol}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      {spinner ? (
        <div className="CCSpinner">
          <Loader
            type="MutatingDots"
            color="#46B2E0"
            secondaryColor="#0E3D6F"
            height={100}
            width={100}
          />
        </div>
      ) : (
        <>
          <div className="convertBtnWrapper">
            <div
              className="convertBtn"
              onClick={() => {
                FetchConversionRate(selectedCurrency);
              }}
            >
              Convert
            </div>
          </div>
          <div className="resultAndErrorDisplayWrapper">
            <div className="resultDisplay">
              {convertedAmount.amount}&nbsp;
              {convertedAmount.symbol}
            </div>
            <div className="errorDisplay">{currencyConversionError}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrencyConverter;
