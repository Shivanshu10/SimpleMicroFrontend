import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
     
import Landing from "./components/Landing";
import Princing from "./components/Pricing";

// add prefix to each css style of marketing
const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
});

export default ({ history }) => {
    return (
        <div>
            {/* add feature to append ma prefix, to scope css */}
            <StylesProvider generateClassName={generateClassName}>
                {/* use memory history obj */}
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Princing} />
                        <Route exact path="/" component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
};