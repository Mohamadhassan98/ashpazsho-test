import React from "react";
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {strings} from './values/strings';
import Rating from '@material-ui/lab/Rating';
import chef from './assets/chef.png';
import calendar from './assets/calendar.png';
import license from './assets/license.png';
import teacher from './assets/Teacher.png';
import clsx from "clsx";
import {genericStyles, useBorderRadius, useFont, usePadding, useSize, useWidth} from "./values/responsive";
import SignUpButton from "./SignUpButton";

const useStyles = makeStyles(theme => ({
    backgroundMainColor: {
        background: '#FF364A'
    },
    fontMainColor: {
        color: '#FF364A'
    },
    fontGreenColor: {
        color: '#03B40F'
    },
    divider: {
        background: 'rgba(141, 141, 141, 0.16)',
        marginLeft: 12,
        marginRight: 12
    },
    secondRow: {
        padding: 6,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(141, 141, 141, 0.57)',
        width: '100%',
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
    button: {
        [theme.breakpoints.up('md')]: {
            marginInlineEnd: `${useWidth(80, 'md')}px`,
        },
        [theme.breakpoints.up('lg')]: {
            marginInlineEnd: `${useWidth(80, 'lg')}px`,
        },
        [theme.breakpoints.up('xl')]: {
            marginInlineEnd: '80px',
        },
    },
}));

export default function () {
    const classes = useStyles();
    const genericClasses = genericStyles();
    const {pageTest1} = strings;

    return (
        <Paper
            elevation={3}
            className={clsx([useBorderRadius(20), usePadding(undefined, undefined, 40, 40)])}
        >
            <Grid container justify='space-between' wrap='nowrap'> {/* whole card wrapper */}
                <Grid
                    item
                    container
                    direction='column'
                    wrap='nowrap'
                    lg={8}
                    justify='space-between'
                    spacing={3}
                    className={usePadding(40, 40)}
                > {/* right panel wrapper */}
                    <Grid item container wrap='nowrap' justify='space-between' alignItems='center'> {/* first row */}
                        <Grid item>
                            <Typography className={useFont(24, 'medium')} noWrap>
                                {pageTest1.learnThreeRecipes}
                            </Typography>
                        </Grid>
                        <Grid item container wrap='nowrap' justify='flex-end' alignItems='center'>
                            <Grid item>
                                <Typography className={useFont(18, 'medium')}>
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
                    </Grid>
                    <Grid item>
                        <Paper
                            elevation={0}
                            className={clsx([classes.secondRow, useSize(undefined, 100), useBorderRadius(29), genericClasses.inlineFlex])}
                        >
                            <Grid container wrap='nowrap' alignItems='center' justify='center'> {/* second row */}
                                <Grid item container wrap='nowrap' alignItems='center' spacing={1}>
                                    <Grid item>
                                        <img src={chef} className={useSize(48, 48)} alt='chef'/>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={useFont(24)} noWrap>
                                            {pageTest1.teacher}:
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={useFont(24, 'medium')} noWrap>
                                            {pageTest1.teacher1}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container wrap='nowrap' alignItems='center' spacing={1}>
                                    <Grid item>
                                        <img src={calendar} className={useSize(48, 48)} alt='calendar'/>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={useFont(24)} noWrap>
                                            {pageTest1.courseDate}:
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={useFont(24, 'medium')} noWrap>
                                            {pageTest1.courseDate1} /
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography noWrap className={useFont(22, 'medium')}>
                                            {pageTest1.courseTime1}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item container wrap='nowrap' alignItems='center' justify='space-between'> {/* third row */}
                        <Grid item container wrap='nowrap' alignItems='center'
                              className={genericClasses.genericAutoWidth}>
                            <Grid item className={genericClasses.inlineFlex}>
                                <img src={license} className={useSize(43, 43)} alt='license'/>
                            </Grid>
                            <Grid item>
                                <Typography className={useFont(30, 'bold')}>
                                    {pageTest1.license}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography
                                className={clsx([classes.fontGreenColor, useFont(35, 'bold')])}
                                noWrap
                            >
                                {pageTest1.price1}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <SignUpButton
                                className={classes.button}
                                width={241}
                                height={84}
                                borderRadius={20}
                                fontSize={30}
                                arrowPanelWidth={84}
                                arrowPanelBorderRadius={18}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={usePadding(17, 40)}>
                    <Divider orientation='vertical' className={classes.divider}/>
                </Grid>
                <Grid
                    item
                    container
                    direction='column'
                    wrap='nowrap'
                    lg={4}
                    className={clsx([usePadding(17), useSize(520)])}
                > {/* left panel wrapper */}
                    <Grid item container wrap='nowrap' alignItems='center' justify='space-between'> {/* first row */}
                        <Grid item>
                            <Typography
                                className={useFont(24, 'medium')}>
                                {pageTest1.aboutTeacher}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={teacher} className={useSize(95, 95)} alt='teacher'/>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography className={useFont(20, undefined, true)}>
                            {pageTest1.miniLoremIpsum}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}