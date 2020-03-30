import React from "react";
import Grid from "@material-ui/core/Grid";
import {useBorderRadius, useFont, useMargin, useMinWidth, useSize, useWidth} from "../../values/web";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import recipe1 from "../../assets/food1.png";
import recipe2 from "../../assets/food2.png";
import recipe3 from "../../assets/food3.png";
import CourseDetailsCard from "./CourseDetailsCard";
import {colors, genericStyles, strings} from "../../values/values";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    divider: {
        height: 1,
    },
    recipeChip: {
        borderColor: '#03B40F',
    },
    dividerLine: {
        marginBottom: useWidth(33, 'lg')
    },
    title: {
        marginBottom: useWidth(50, 'lg')
    },
    chipsAndFish: {
        marginBottom: useWidth(73, 'lg')
    }
}));

const colorStyles = makeStyles(theme => colors);
export default function () {
    const {pageTest1} = strings;
    const colorClasses = colorStyles();
    const genericClasses = genericStyles();
    const classes = useStyles();

    return (
        <Grid container direction='column' wrap='nowrap'>
            <Grid item container alignItems='center' wrap='nowrap' className={classes.dividerLine}>
                <Grid item className={useMargin(0, 0, 0, 24)}>
                    <Typography
                        className={clsx([useFont(28, 'medium'), colorClasses.fontMainColor])} noWrap>
                        {pageTest1.aboutCourse}
                    </Typography>
                </Grid>
                <Grid item className={genericClasses.genericFullWidth}>
                    <Divider
                        className={clsx([classes.divider, colorClasses.backgroundMainColor])}
                        variant='fullWidth'
                    />
                </Grid>
            </Grid>
            <Grid item className={classes.title}>
                <Typography className={useFont(24, 'medium')}>
                    {pageTest1.learnThreeRecipes}
                </Typography>
            </Grid>
            <Grid item container justify='space-between' wrap='nowrap'
                  className={classes.chipsAndFish}> {/* Whole images and chips */}
                <Grid item container direction='column' spacing={3}> {/* chips */}
                    <Grid item container spacing={3}> {/* two upper chips */}
                        <Grid item>
                            <Chip
                                label={pageTest1.recipe1}
                                className={clsx([classes.recipeChip, useSize(undefined, 65), useMinWidth(185), useBorderRadius(41), useFont(24)])}
                                variant='outlined'
                                onClick={() => {
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Chip
                                label={pageTest1.recipe2}
                                className={clsx([classes.recipeChip, useSize(undefined, 65), useMinWidth(185), useBorderRadius(41), useFont(24)])}
                                variant='outlined'
                                onClick={() => {
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container spacing={3}> {/* two lower chips */}
                        <Grid item>
                            <Chip
                                label={pageTest1.recipe3}
                                className={clsx([classes.recipeChip, useSize(undefined, 65), useMinWidth(185), useBorderRadius(41), useFont(24)])}
                                variant='outlined'
                                onClick={() => {
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Chip
                                label={pageTest1.recipe3}
                                className={clsx([classes.recipeChip, useSize(undefined, 65), useMinWidth(185), useBorderRadius(41), useFont(24)])}
                                variant='outlined'
                                onClick={() => {
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container spacing={3} wrap='nowrap' justify='flex-end'> {/* images */}
                    <Grid item>
                        <img
                            src={recipe1}
                            alt='recipe1'
                            className={clsx([useSize(294, 246), useBorderRadius(20)])}
                        />
                    </Grid>
                    <Grid item>
                        <img
                            src={recipe2}
                            alt='recipe1'
                            className={clsx([useSize(294, 246), useBorderRadius(20)])}
                        />
                    </Grid>
                    <Grid item>
                        <img
                            src={recipe3}
                            alt='recipe1'
                            className={clsx([useSize(294, 246), useBorderRadius(20)])}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CourseDetailsCard/>
            </Grid>
        </Grid>
    );
}