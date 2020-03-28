import React from "react";
import {makeStyles} from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {strings} from "./values/strings";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import searchIcon from './assets/magnifying-glass.png';
import {genericStyles, useBorderRadius, useFont, useMinWidth, useSize, useWidth} from "./values/responsive";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import Chip from "@material-ui/core/Chip";
import recipe1 from './assets/Mask Group 74.png';
import recipe2 from './assets/Mask Group 76.png';
import recipe3 from './assets/Mask Group 75.png';
import card1 from './assets/Recipe1.png';
import card2 from './assets/Recipe2.png';
import card3 from './assets/Recipe3.png';
import CourseDetailsCard from "./CourseDetailsCard";
import CourseCard from "./CourseCard";
import MobileDrawer from "./Drawer";
import MobileHeader from "./MobileHeader";

const useStyles = makeStyles(theme => ({
    backgroundMainColor: {
        background: '#FF364A'
    },
    fontMainColor: {
        color: '#FF364A'
    },
    divider: {
        height: 1,
    },
    recipeChip: {
        borderColor: '#03B40F',
    },
    recommendedCoursesChip: {
        backgroundColor: '#FFDD00'
    }
}));

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
    const textFieldClasses = textFieldStyle();
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const {pageTest1} = strings;

    // noinspection DuplicatedCode
    return (
        <div>
            <MobileHeader drawerButtonCallback={() => setDrawerOpen(true)}/>
            <MobileDrawer open={drawerOpen} setOpen={setDrawerOpen}/>
            <Container className={genericClasses.genericAutoWidth}>
                <Grid container direction='column' spacing={4}> {/* Whole page wrapper */}
                    <Grid item container direction='row' justify='space-between' alignItems='center'>
                        <Grid item>
                            <Typography className={useFont(28, 'medium')}>
                                {pageTest1.learningCourse}
                            </Typography>
                        </Grid>
                        <Hidden smDown>
                            <Grid item>
                                <TextField
                                    classes={textFieldClasses}
                                    variant='outlined'
                                    placeholder={pageTest1.searchRecipe}
                                    InputProps={{
                                        endAdornment: (
                                            <Button
                                                className={clsx([useSize(66, 60), useBorderRadius(17), classes.backgroundMainColor])}
                                            >
                                                <img src={searchIcon} alt='search-icon' className={useSize(28, 28)}/>
                                            </Button>
                                        )
                                    }}
                                />
                            </Grid>
                        </Hidden>
                    </Grid>
                    <Grid item>
                        <Typography className={useFont(22, undefined, true)}>
                            {pageTest1.loremIpsum}
                        </Typography>
                    </Grid>
                    <Grid item container alignItems='center' wrap='nowrap' spacing={3}>
                        <Grid item>
                            <Typography
                                className={clsx([useFont(28, 'medium'), classes.fontMainColor])} noWrap>
                                {pageTest1.aboutCourse}
                            </Typography>
                        </Grid>
                        <Grid item className={genericClasses.genericFullWidth}>
                            <Divider
                                className={clsx([classes.divider, classes.backgroundMainColor])}
                                flexItem
                                variant='fullWidth'
                            />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography className={useFont(24, 'medium')}>
                            {pageTest1.learnThreeRecipes}
                        </Typography>
                    </Grid>
                    <Grid item container justify='space-between' wrap='nowrap'> {/* Whole images and chips */}
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
                    <Grid item>
                        <Chip
                            label={pageTest1.recommendedCourses}
                            className={clsx([classes.recommendedCoursesChip, useSize(503, 94), useBorderRadius(47), useFont(30, 'medium')])}
                        />
                    </Grid>
                    <Grid item container spacing={4} justify='center'>
                        <Grid item lg={3} md={4}>
                            <CourseCard type='presentment' recipeImage={card1} title={pageTest1.course1}/>
                        </Grid>
                        <Grid item lg={3} md={4}>
                            <CourseCard type='online' recipeImage={card2} title={pageTest1.course2}/>
                        </Grid>
                        <Grid item lg={3} md={4}>
                            <CourseCard type='online' recipeImage={card3} title={pageTest1.course1}/>
                        </Grid>
                        <Grid item lg={3} md={4}>
                            <CourseCard type='online' recipeImage={card1} title={pageTest1.course1}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}