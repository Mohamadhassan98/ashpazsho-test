import React from "react";
import {Hidden} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import WebCourseCard from "./web/WebCourseCard";
import card1 from "../assets/Recipe1.png";
import card2 from "../assets/Recipe2.png";
import card3 from "../assets/Recipe3.png";
import HiddenScroll from "../hiddenScroll";
import MobileCourseCard from "./mobile/MobileCourseCard";
import {strings} from "../values/values";

export default function () {
    const {pageTest1} = strings;
    return (
        <div>
            <Hidden only={["xl", "lg", "md"]}>
                <HiddenScroll horizontal>
                    <Grid container wrap='nowrap'>
                        <Grid item>
                            <MobileCourseCard type='presentment' recipeImage={card1} title={pageTest1.course1}/>
                        </Grid>
                        <Grid item>
                            <MobileCourseCard type="online" recipeImage={card2} title={pageTest1.course2}/>
                        </Grid>
                        <Grid item>
                            <MobileCourseCard type="online" recipeImage={card3} title={pageTest1.course1}/>
                        </Grid>
                        <Grid item>
                            <MobileCourseCard type="online" recipeImage={card1} title={pageTest1.course1}/>
                        </Grid>
                    </Grid>
                </HiddenScroll>
            </Hidden>
            <Hidden only={["xs", "sm"]}>
                <Grid container justify='center'>
                    <Grid item lg={3} md={4}>
                        <WebCourseCard type='presentment' recipeImage={card1} title={pageTest1.course1}/>
                    </Grid>
                    <Grid item lg={3} md={4}>
                        <WebCourseCard type='online' recipeImage={card2} title={pageTest1.course2}/>
                    </Grid>
                    <Grid item lg={3} md={4}>
                        <WebCourseCard type='online' recipeImage={card3} title={pageTest1.course1}/>
                    </Grid>
                    <Grid item lg={3} md={4}>
                        <WebCourseCard type='online' recipeImage={card1} title={pageTest1.course1}/>
                    </Grid>
                </Grid>
            </Hidden>
        </div>
    );
}