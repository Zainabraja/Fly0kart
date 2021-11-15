import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CurrencyConversion.css";
import useClickOutside from "../../Utilities/useClickOutside";
import Flags from "country-flag-icons/react/3x2";
import {
  setCurrencyExchangeRate,
  setCurrencyExchangeRateError,
} from "../../actions/ApiActions";
require("dotenv").config();
const CurrencyConversion = ({ modalOpen, closeCurrencyModal }) => {
  const selectedCurrency = useSelector(
    (state) => state.CurrencyConversion.ExchangeRate.countryCode
  );
  const dispatch = useDispatch();
  const ref = useClickOutside(closeCurrencyModal);
  const api_key = process.env.REACT_APP_API_KEY;
  const convertCurrency = async (ID, Symbol) => {
    await fetch(`http://apilayer.net/api/live?access_key=${api_key}`)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error("something went wrong");
        }
        return res.json();
      })
      .then((res) => {
        console.log(res.success);
        if (res.success === true) {
          const data = res;
          const result = data.quotes[ID];
          dispatch(
            setCurrencyExchangeRate({
              currencyRate: result,
              currencySymbol: Symbol,
              countryCode: ID,
              success: data.success,
            })
          );
          dispatch(setCurrencyExchangeRateError(""));
        } else {
          const setError = (res) => {
            dispatch(setCurrencyExchangeRateError(res.error.info));
          };
          setError(res);
        }
      })
      .catch((err) => {
        dispatch(setCurrencyExchangeRateError(err.message));
      });
  };

  return (
    <div
      className={`conversionWrapper ${modalOpen ? "open" : "close"}`}
      ref={ref}
    >
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USD" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USD", "$");
          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.US title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">USD</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">$</div>
          </div>
        </div>
      </div>

      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDCAD" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDCAD", "C$");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.CA title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">CAD</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">C$</div>
          </div>
        </div>
      </div>

      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDGBP" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDGBP", "£");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.GB title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">GBP</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">£</div>
          </div>
        </div>
      </div>

      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDAUD" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDAUD", "$");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.AU title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">AUD</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">$</div>
          </div>
        </div>
      </div>

      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDCHF" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDCHF", "CHF");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.CH title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">CHF</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">CHF</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDHKD" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDHKD", "$");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.HK title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">HKD</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">$</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDJPY" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDJPY", "¥");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.JP title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">JPY</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">&yen;</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDCNY" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDCNY", "¥");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.CN title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">CNY</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">&yen;</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDINR" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDINR", "₹");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.IN title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">INR</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">₹</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDKYD" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDKYD", "CI$");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.KY title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">KYD</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">CI$</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDAWG" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDAWG", "ƒ");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.AW title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">AWG</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">ƒ</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDBBD" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDBBD", "$");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.BB title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">BBD</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">$</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDBSD" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDBSD", "$");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.BS title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">BSD</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">$</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDDOP" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDDOP", "RD$");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.DO title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">DOP</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">RD$</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDHTG" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDHTG", "G");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.HT title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">HTG</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">G</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDJMD" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDJMD", "J$");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.JM title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">JMD</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">J$</div>
          </div>
        </div>
      </div>

      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDTTD" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDTTD", "TT$");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.TT title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">TTD</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">TT$</div>
          </div>
        </div>
      </div>

      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDDKK" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDDKK", "KR");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.DK title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">DKK</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">KR</div>
          </div>
        </div>
      </div>

      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDNOK" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDNOK", "kr");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.NO title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">NOK</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">kr</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDSEK" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDSEK", "kr");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.SE title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">SEK</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">KR</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDHUF" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDHUF", "FT");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.HU title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">HUF</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">FT</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDMKN" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDMKN", "$");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.MX title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">MKN</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">$</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDSGD" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDSGD", "$");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.SG title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">SGD</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">$</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDAED" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDAED", "AED");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.AE title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">AED</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">AED</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDNZD" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDNZD", "$");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.NZ title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">NZD</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">$</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDZAR" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDZAR", "R");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.ZA title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">ZAR</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">R</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDTRY" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDTRY", "TR");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.TR title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">TRY</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">TR</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDMRY" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDMRY", "RM");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.MY title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">MRY</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">RM</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDPHP" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDPHP", "p");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.PH title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">PHP</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">P</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDLKR" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDLKR", "RS");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.LK title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">LKR</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">RS</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDNPR" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDNPR", "RS");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.NP title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">NPR</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">RS</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDBND" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDBND", "$");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.BN title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">BND</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">$</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDIDR" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDIDR", "RP");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.ID title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">IDR</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">RP</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDMOP" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDMOP", "MOP$");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.MO title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">MOP</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">MOP$</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDSAR" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDSAR", "﷼");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.SA title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">SAR</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">﷼</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDTHB" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDTHB", "฿");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.TH title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">THB</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">฿</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDKRW" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDKRW", "₩");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.KR title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">KRW</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">₩</div>
          </div>
        </div>
      </div>
      <div
        className={`currencyWrapper ${
          selectedCurrency === "USDISK" ? "select" : null
        }`}
        onClick={() => {
          convertCurrency("USDISK", "KR");

          closeCurrencyModal(false);
        }}
      >
        <div className="flagIconContainer">
          <Flags.IS title="United States" className="flagIcon" />
        </div>
        <div className="codeSymbolContainer">
          <div className="currencyCodeContainer">ISK</div>

          <div className="currencySymbolContainer">
            <div className="currencySymbol">KR</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrencyConversion;
