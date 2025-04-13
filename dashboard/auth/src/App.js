import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

// add prefix to each css style of marketing
const generateClassName = createGenerateClassName({
    productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
    return (
        <div>
            {/* add feature to append ma prefix, to scope css */}
            <StylesProvider generateClassName={generateClassName}>
                {/* use memory history obj */
                }
                <Router history={history}>
                    <Switch>
                        <Route exact path="/auth/signin">
                            {/* pass onSignIn */}
                            <Signin onSignIn={onSignIn} />
                        </Route>
                        <Route exact path="/auth/signup">
                            {/* pass onSignIn */}
                            <Signup onSignIn={onSignIn} />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
};