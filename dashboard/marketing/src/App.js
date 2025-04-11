import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";

import Landing from "./components/Landing";
import Princing from "./components/Pricing";

export default () => {
    return (
        <div>
            <StylesProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/pricing" component={Princing} />
                        <Route exact path="/" component={Landing} />
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
};