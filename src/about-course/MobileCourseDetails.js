import React from "react";
import Grid from "@material-ui/core/Grid";
import {useFont, useMargin, useWidth} from "../values/web";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import {genericStyles, strings} from "../values/values";
import {makeStyles} from "@material-ui/styles";
import Rating from "@material-ui/lab/Rating";
import HiddenScroll from "../hiddenScroll";
import {FoodCard} from "./FoodCard";
import food1 from '../assets/food1.png';
import food2 from '../assets/food2.png';
import food3 from '../assets/food3.png';
import {Paper} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    divider: {
        height: 1,
    },
    rating: {
        [theme.breakpoints.up('md')]: {
            marginInlineStart: `${useWidth(80, 'md')}px`,
        },
        [theme.breakpoints.up('lg')]: {
            marginInlineStart: `${useWidth(80, 'lg')}px`,
        },
        [theme.breakpoints.up('xl')]: {
            marginInlineStart: '80px',
        },
    },
}));

export default function MobileCourseDetails() {
    const {pageTest1} = strings;
    const genericClasses = genericStyles();
    const classes = useStyles();
    return (
        <Grid container direction='column'>
            <Grid item container>
                <Grid item className={useMargin(0, 0, 0, 24)}>
                    <Typography
                        className={clsx([useFont(28, 'medium'), genericClasses.fontMainColor])} noWrap>
                        {pageTest1.aboutCourse}
                    </Typography>
                </Grid>
                <Grid item className={genericClasses.genericFullWidth}>
                    <Divider
                        className={clsx([classes.divider, genericClasses.backgroundMainColor])}
                        variant='fullWidth'
                    />
                </Grid>
                <Grid item className={genericClasses.inlineFlex}>
                    <Rating
                        size='small'
                        precision={0.5}
                        value={4.5}
                        className={clsx([genericClasses.ltr, classes.rating])}
                        readOnly
                    />
                </Grid>
            </Grid>
            <Grid item>
                <Typography>
                    {pageTest1.aboutCourse}
                </Typography>
            </Grid>
            <HiddenScroll horizontal>
                <Grid item container>
                    <Grid item>
                        <FoodCard
                            background={food1}
                            foodCategory={pageTest1.foodCategory1}
                            foodTitle={pageTest1.recipe1}
                        />
                    </Grid>
                    <Grid item>
                        <FoodCard
                            background={food2}
                            foodCategory={pageTest1.foodCategory1}
                            foodTitle={pageTest1.recipe2}
                        />
                    </Grid>
                    <Grid item>
                        <FoodCard
                            background={food3}
                            foodCategory={pageTest1.foodCategory1}
                            foodTitle={pageTest1.recipe3}
                        />
                    </Grid>
                </Grid>
            </HiddenScroll>
            <Grid item>
                <Paper>

                </Paper>
            </Grid>
        </Grid>
    );
}