import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            mount(ref.current);
        }
    }, []);

    return (
        <div ref={ref} />
    );
};