import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
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
                }
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