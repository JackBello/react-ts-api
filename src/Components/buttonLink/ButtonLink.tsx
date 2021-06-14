import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import "./ButtonLink.css"

export default function ButtonLink(
    {
        rute,
        active,
        icon
    } : {
        rute: string;
        active?: boolean;
        icon: string;
    }
) {
    const match = useRouteMatch({
        path: rute,
        exact: active
    });

    return(
        <div className={`button-link ${match ? "button-link-active" : ""}`}>
            <Link to={rute}>
                <i className={`fas fa-${icon}`}></i>
            </Link>
        </div>
    );
}