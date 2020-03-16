import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import Auth from "../hoc/auth";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Auth(LandingPage, null)} />
                <Route exact path='/login' component={Auth(LoginPage, false)} />
                <Route
                    exact
                    path='/register'
                    component={Auth(RegisterPage, false)}
                />
            </Switch>
        </Router>
    );
}

export default App;
