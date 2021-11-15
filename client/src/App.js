import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userIsAuth } from "./Register-sign-in_sign-out/userAuth";
import RouteGuard from "./Utilities/RouteGuard";
//routes
import HomePage from "./Home/HomePage";
import SearchResult from "./SearchResult";
import FlightBookingAndPayment from "./FlightBookingAndPayment/";
import UserProfile from "./UserProfile/UserProfile";

function App(props) {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

   useEffect(() => {
    dispatch(userIsAuth());
   }, [dispatch]);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search/:itineray" exact component={SearchResult} />
          <Route
            exact
            path="/FlightBookingAndPayment"
            component={FlightBookingAndPayment}
          />
          <Route
            path="/userprofile"
            exact
            component={RouteGuard(UserProfile)}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
