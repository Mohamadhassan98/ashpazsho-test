import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import {colors, genericStyles, strings} from "../../values/values";
import {makeStyles} from "@material-ui/styles";
import Rating from "@material-ui/lab/Rating";
import HiddenScroll from "../../hiddenScroll";
import {FoodCard} from "./FoodCard";
import food1 from '../../assets/food1.png';
import food2 from '../../assets/food2.png';
import food3 from '../../assets/food3.png';
import {Paper} from "@material-ui/core";
import chef from '../../assets/chef.png';
import calendar from '../../assets/calendar.png';
import license from '../../assets/license.png';
import teacher from '../../assets/Teacher.png';
import {useBorderRadius, useFont, useMargin, usePadding, useSize} from "../../values/mobile";

const useStyles = makeStyles(theme => ({
    divider: {
        height: 1,
    },
    rating: {
        fontSize: '1rem'
    },
    honorBullet: {
        width: 6,
        height: 6,
        borderRadius: 3,
        background: '#FF364A',
        marginRight: 6
    },
    honor: {
        fontSize: 12
    },
    innerCard: {
        border: 'rgba(141, 141, 141, 0.57) solid 1px'
    },
    outerCard: {
        marginTop: 2.5,
        marginBottom: 2.5,
        marginLeft: 12
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
            <Grid item container wrap='nowrap' alignItems='center' className={useMargin(0, 15)}>
                <Grid item className={useMargin(0, 0, 0, 9)}>
                    <Typography
                        className={clsx([useFont(16, 'medium'), colorClasses.fontMainColor])} noWrap>
                        {pageTest1.aboutCourse}
                    </Typography>
                </Grid>
                <Grid item className={genericClasses.genericFullWidth}>
                    <Divider
                        className={clsx([classes.divider, colorClasses.backgroundMainColor])}
                        variant='fullWidth'
                    />
                </Grid>
                <Grid item className={useMargin(0, 0, 9, 9)}>
                    <Typography className={useFont(12)} noWrap>
                        {pageTest1.likes(10)}
                    </Typography>
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
            <Grid item className={useMargin(0, 16)}>
                <Typography className={useFont(14)}>
                    {pageTest1.learnThreeRecipes}
                </Typography>
            </Grid>
            <HiddenScroll horizontal>
                <Grid item container wrap='nowrap' className={useMargin(0, 17)}>
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
            <Grid item className={useMargin(0, 17)}>
                <Paper className={clsx([usePadding(8, 20, 8, 8), useBorderRadius(10)])}>
                    <Grid container direction='column' wrap='nowrap' justify='space-between'>
                        <Grid item>
                            <Paper
                                elevation={0}
                                className={clsx([useBorderRadius(10), classes.innerCard, usePadding(9, 9)])}
                            >
                                <Grid container direction='column' wrap='nowrap'>
                                    <Grid item container wrap='nowrap'>
                                        <Grid item container wrap='nowrap' className={genericClasses.genericAutoWidth}>
                                            <Grid item className={useMargin(0, 0, 12, 7)}>
                                                <img src={chef} className={useSize(24, 24)} alt='chef'/>
                                            </Grid>
                                            <Grid item className={useMargin(0, 0, 0, 7)}>
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
                                    <Grid item container wrap='nowrap'>
                                        <Grid item container wrap='nowrap' className={genericClasses.genericAutoWidth}>
                                            <Grid item
                                                  className={clsx([genericClasses.inlineFlex, useMargin(0, 0, 12, 7)])}>
                                                <img src={calendar} className={clsx([useSize(24, 24)])} alt='calendar'/>
                                            </Grid>
                                            <Grid item className={useMargin(0, 0, 0, 7)}>
                                                <Typography className={useFont(14, 'medium')} noWrap>
                                                    <span className={clsx([useFont(14), useMargin(0, 0, 0, 7)])}>
                                                        {pageTest1.courseDate}:
                                                    </span>
                                                    {`${pageTest1.courseDate1} `}
                                                    <wbr/>
                                                    <span className={useFont(14)}>
                                                        {pageTest1.courseTime1}
                                                    </span>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item container justify='space-between' className={useMargin(20)}>
                            <Grid item container className={genericClasses.genericAutoWidth}>
                                <Grid item className={useMargin(0, 0, 0, 7)}>
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
                <Paper className={clsx([useBorderRadius(10), usePadding(9, 13.6, 8, 15)])}>
                    <Grid container wrap='nowrap'>
                        <Grid item container direction='column'>
                            <Grid item container>
                                <Grid item>
                                    <Typography className={useFont(14)}>
                                        {pageTest1.teacher}:
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={clsx([useMargin(0, 0, 6), useFont(14, 'medium')])}>
                                        {pageTest1.teacher1}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container justify='center'>
                                {pageTest1.teacherHonors.map((item, index) => (
                                    <Grid item container key={index} alignItems='baseline' alignContent='center'
                                          className={classes.outerCard}>
                                        <Grid item>
                                            <div className={classes.honorBullet}/>
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