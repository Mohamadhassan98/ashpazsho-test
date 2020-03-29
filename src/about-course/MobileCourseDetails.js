import React from "react";
import Grid from "@material-ui/core/Grid";
import {useFont, useMargin, useWidth} from "../values/web";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import {colors, genericStyles, strings} from "../values/values";
import {makeStyles} from "@material-ui/styles";
import Rating from "@material-ui/lab/Rating";
import HiddenScroll from "../hiddenScroll";
import {FoodCard} from "./FoodCard";
import food1 from '../assets/food1.png';
import food2 from '../assets/food2.png';
import food3 from '../assets/food3.png';
import {Paper} from "@material-ui/core";
import chef from '../assets/chef.png';
import calendar from '../assets/calendar.png';
import license from '../assets/license.png';
import teacher from '../assets/Teacher.png';
import {useSize} from "../values/mobile";

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
    honorBullet: {
        width: 6,
        height: 6,
        borderRadius: 3,
        background: '#FF364A'
    },
    honor: {
        fontSize: 12
    }
}));

const colorStyles = makeStyles(theme => colors);

export default function MobileCourseDetails() {
    const {pageTest1} = strings;
    const genericClasses = genericStyles();
    const colorClasses = colorStyles();
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
                    {pageTest1.learnThreeRecipes}
                </Typography>
            </Grid>
            <HiddenScroll horizontal>
                <Grid item container wrap='nowrap'>
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
                    <Grid container direction='column'>
                        <Grid item>
                            <Paper elevation={0}>
                                <Grid container direction='column'>
                                    <Grid item container>
                                        <Grid item container>
                                            <Grid item>
                                                <img src={chef} className={useSize(24, 24)} alt='chef'/>
                                            </Grid>
                                            <Grid item>
                                                <Typography className={useFont(14)}>
                                                    {pageTest1.teacher}:
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={useFont(14, 'medium')}>
                                                {pageTest1.teacher1}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item container>
                                        <Grid item container>
                                            <Grid item>
                                                <img src={calendar} className={useSize(24, 24)} alt='calendar'/>
                                            </Grid>
                                            <Grid item>
                                                <Typography className={useFont(14)}>
                                                    {pageTest1.courseDate}:
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={useFont(14, 'medium')}>
                                                {pageTest1.courseDate1}
                                                <wbr/>
                                                {pageTest1.courseTime1}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item container>
                            <Grid item container>
                                <Grid item>
                                    <img src={license} className={useSize(24, 24)} alt='license'/>
                                </Grid>
                                <Grid item>
                                    <Typography className={useFont(16, 'medium')}>
                                        {pageTest1.license}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography className={clsx([useFont(16, 'bold'), colorClasses.fontGreenColor])}>
                                    {pageTest1.price1}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item>
                <Paper>
                    <Grid container>
                        <Grid item container direction='column'>
                            <Grid item container>
                                <Grid item>
                                    <Typography>
                                        {pageTest1.teacher}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        {pageTest1.teacher1}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container>
                                {pageTest1.teacherHonors.map((item, index) => (
                                    <Grid item container key={index}>
                                        <Grid item>
                                            <div className={classes.honorBullet}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.honor}>
                                                {item}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item>
                            <img src={teacher} className={useSize(65, 65)} alt='teacher'/>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}