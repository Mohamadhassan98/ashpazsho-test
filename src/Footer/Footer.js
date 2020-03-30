import React from "react";
import {Hidden} from "@material-ui/core";
import ResponsiveFooter from "./ResponsiveFooter";
import WebFooter from "./WebFooter";

export default function Footer() {
    return (
        <div>
            <Hidden only={["xl", "lg", "md"]}>
                <ResponsiveFooter/>
            </Hidden>
            <Hidden only={["xs", "sm"]}>
                <WebFooter/>
            </Hidden>
        </div>
    );
}
