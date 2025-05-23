import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

// take initialPath from container
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    // create memory history obj if default hisotry is not given
    // pass initialPath to memory history
    const history = defaultHistory || createMemoryHistory({
        initalEntries: [initialPath],
    });

    // handle case when onNavigate is not provided .i.e it runs in isolation
    if (onNavigate) {
        // add listeners to history changes
        history.listen(onNavigate);
    }

    // pass memory hisotry to app
    ReactDOM.render(
        <App history={history}/>,
        el
    );

    // return callback funcs to be called from container
    return {
        // get next location, contianer is navigating to
        onParentNavigate({ pathname: nextPathName }) {
            // stop inf loop, if already at that path
            const { pathname } = history.location;
            if (pathname === nextPathName) {
                return;
            }

            // update browser history
            history.push(nextPathName);
        }
    }
};

if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_marketing-dev-root");

    if (devRoot) {
        // dont pass onNavigate when running in isolation
        // use browser history in isolation
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

export { mount };