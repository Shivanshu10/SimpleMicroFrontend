import React, { lazy, Suspense, useState, useEffect } from "react";
import Header from "./components/Header";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { createBrowserHistory } from "history";
import Progress from "./components/Progress";

// lazily load marketing and auth app
const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

// add prefix to each css style of marketing
const generateClassName = createGenerateClassName({
    productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
    // use state to keep track of sign in status
    const [isSignedIn, setIsSignedIn] = useState(false);

    // redirect to user when user signs in
    useEffect(() => {
        if (isSignedIn) {
            history.push("/dashboard");
        } 
    }, [isSignedIn])

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    {/* Use suspense to show loading when app is not loaded  */}
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                {/* pass func to call when sign in changes */}
                                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/" >
                                {!isSignedIn && <Redirect to="/" />}
                                <DashboardLazy />
                            </Route>
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    )
}