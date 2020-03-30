import React from "react";
import {makeStyles} from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {appNameShort, colors, genericStyles, strings} from "./values/values";
import {TextField, useMediaQuery} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import searchIcon from './assets/magnifying-glass.png';
import {useBorderRadius, useFont, useMargin, useSize, useWidth} from "./values/web";
import * as mobile from './values/mobile';
import Hidden from "@material-ui/core/Hidden";
import clsx from "clsx";
import Chip from "@material-ui/core/Chip";
import Header from "./headers/Header";
import AboutCourse from "./about-course/AboutCourse";
import Courses from "./courses/Courses";
import Footer from "./Footer/Footer";

const useStyles = makeStyles(theme => ({
    recommendedCoursesChip: {
        backgroundColor: '#FFDD00'
    },
    mobileRecommended: {},
    webRecommended: {
        marginBottom: useWidth(60, 'lg')
    },
    mobileTitle: {
        marginBottom: 18
    },
    webTitle: {
        marginBottom: useWidth(69, 'lg')
    },
    mobileContent: {
        marginBottom: 34
    },
    webContent: {
        marginBottom: useWidth(83, 'lg')
    }
}));

const colorStyles = makeStyles(theme => colors);

const textFieldStyle = makeStyles(theme => ({
    root: {
        '& .MuiOutlinedInput-root': {
            boxShadow: "0 3px 20px rgba(231, 48, 28, 0.19)",
            [theme.breakpoints.up('md')]: {
                width: useWidth(526, 'md'),
                height: useWidth(72, 'md'),
                borderRadius: useWidth(20, 'md'),
            },
            [theme.breakpoints.up('lg')]: {
                width: useWidth(526, 'lg'),
                height: useWidth(72, 'lg'),
                borderRadius: useWidth(20, 'lg')
            },
            [theme.breakpoints.up('xl')]: {
                width: 526,
                height: 72,
                borderRadius: 20
            },
        },
        '& .MuiInputBase-root': {
            color: 'rgba(231, 48, 28, 0.66)',
            fontWeight: 200,
            [theme.breakpoints.up('md')]: {
                fontSize: useWidth(20, 'md'),
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: useWidth(20, 'lg'),
            },
            [theme.breakpoints.up('xl')]: {
                fontSize: 20
            },
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent'
        }
    },
}));

export default function App() {

    const classes = useStyles();
    const genericClasses = genericStyles();
    const colorClasses = colorStyles();
    const textFieldClasses = textFieldStyle();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

    const {pageTest1} = strings;
    const mobileStyle = mobile.useMargin(0, 0, 16, 16);
    const webStyle = useMargin(0, 0, 146, 146);
    React.useEffect(() => {
        document.title = appNameShort
    }, []);

    // noinspection DuplicatedCode
    return (
        <div className={genericClasses.genericFullWidth}>
            <Header/>
            <Container className={clsx([isMobile ? mobileStyle : webStyle, genericClasses.genericAutoWidth])}
                       maxWidth={false}>
                <Grid container direction='column' wrap='nowrap'> {/* Whole page wrapper */}
                    <Grid
                        item
                        container
                        justify='space-between'
                        alignItems='center'
                        className={isMobile ? classes.mobileTitle : classes.webTitle}
                    >
                        <Grid item>
                            <Typography className={useFont(28, 'medium')}>
                                {pageTest1.learningCourse}
                            </Typography>
                        </Grid>
                        <Hidden only={['xs', 'sm']}>
                            <Grid item>
                                <TextField
                                    classes={textFieldClasses}
                                    variant='outlined'
                                    placeholder={pageTest1.searchRecipe}
                                    InputProps={{
                                        endAdornment: (
                                            <Button
                                                className={clsx([useSize(66, 60), useBorderRadius(17), colorClasses.backgroundMainColor])}
                                            >
                                                <img src={searchIcon} alt='search-icon' className={useSize(28, 28)}/>
                                            </Button>
                                        )
                                    }}
                                />
                            </Grid>
                        </Hidden>
                    </Grid>
                    <Grid item container className={isMobile ? classes.mobileContent : classes.webContent}>
                        <Typography className={useFont(22, undefined, true)}>
                            {pageTest1.loremIpsum}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <AboutCourse/>
                    </Grid>
                    <Grid item>
                        <Hidden only={["xl", "lg", "md"]}>
                            <Chip
                                label={pageTest1.recommendedCourses.mobile}
                                className={clsx([mobile.useMargin(undefined, 18), classes.recommendedCoursesChip, mobile.useSize(135, 36), mobile.useBorderRadius(22), mobile.useFont(12, 'medium')])}
                            />
                        </Hidden>
                        <Hidden only={["xs", "sm"]}>
                            <Chip
                                label={pageTest1.recommendedCourses.web}
                                className={clsx([classes.webRecommended, classes.recommendedCoursesChip, useSize(503, 94), useBorderRadius(47), useFont(30, 'medium')])}
                            />
                        </Hidden>
                    </Grid>
                    <Grid item>
                        <Courses/>
                    </Grid>
                </Grid>
            </Container>
            <Footer/>
        </div>
    );
}