import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

// onSignIn is a prop passed from container
// to call when user signs in
export default ({ onSignIn }) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        if (ref.current) {
            // pass onNavigate func to subapp
            // also get func to call when container navigates
            // to a different route
            const { onParentNavigate } = mount(ref.current, {
                // get path subapp is navigating to
                onNavigate: ({ pathname: nextPathName }) => {
                    // stop inf loop, if already at that path
                    const { pathname } = history.location;
                    if (pathname === nextPathName) {
                        return;
                    }

                    // update browser history
                    history.push(nextPathName);
                },
                // pass initialPath to subapp
                initialPath: history.location.pathname,
                // callback when sign in happens
                onSignIn,
            });

            // listen to history changes
            // call onParentNavigate when container navigates
            // to a different route
            // to update route in subapp
            history.listen(onParentNavigate);
        }
    }, []);

    return (
        <div ref={ref} />
    );
};