import React from "react";
import {Hidden} from "@material-ui/core";
import WebCourseDetails from "./web/WebCourseDetails";
import MobileCourseDetails from "./mobile/MobileCourseDetails";
import {makeStyles} from "@material-ui/styles";
import {useWidth} from "../values/web";

const useStyles = makeStyles(theme => ({
    mobile: {
        marginBottom: 29.4
    },
    web: {
        marginBottom: useWidth(131, 'lg')
    }
}));

export default function () {
    const classes = useStyles();
    return (
        <div>
            <Hidden only={["xl", "lg", "md"]}>
                <div className={classes.mobile}>
                    <MobileCourseDetails/>
                </div>
            </Hidden>
            <Hidden only={["xs", "sm"]}>
                <div className={classes.web}>
                    <WebCourseDetails/>
                </div>
            </Hidden>
        </div>
    );
}