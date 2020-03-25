import React from "react";
import {makeStyles} from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {strings} from "./values/strings";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import searchIcon from './assets/magnifying-glass.png';
import {useWidth} from "./values/responsive";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
    learningCourseTypography: {
        fontWeight: 500,
        [theme.breakpoints.up('md')]: {
            fontSize: useWidth(28, 'md'),
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: useWidth(28, 'lg'),
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: 28
        },
    },
    loremIpsumTypography: {
        [theme.breakpoints.up('md')]: {
            fontSize: useWidth(22, 'md'),
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: useWidth(22, 'lg'),
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: 22
        },
    },
    searchButton: {
        [theme.breakpoints.up('md')]: {
            width: useWidth(66, 'md'),
            height: useWidth(60, 'md'),
            borderRadius: useWidth(17, 'md'),
        },
        [theme.breakpoints.up('lg')]: {
            width: useWidth(66, 'lg'),
            height: useWidth(60, 'lg'),
            borderRadius: useWidth(17, 'lg'),
        },
        [theme.breakpoints.up('xl')]: {
            width: 66,
            height: 60,
            borderRadius: 17,
        },
        background: '#FF364A',
    },
    searchIcon: {
        [theme.breakpoints.up('md')]: {
            width: useWidth(28, 'md'),
            height: useWidth(28, 'md'),
        },
        [theme.breakpoints.up('lg')]: {
            width: useWidth(28, 'lg'),
            height: useWidth(28, 'lg'),
        },
        [theme.breakpoints.up('xl')]: {
            width: 28,
            height: 28,
        }
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

export default function App(props) {

    console.log(window.innerWidth, window.innerHeight);

    const classes = useStyles();
    const textFieldClasses = textFieldStyle();

    const {pageTest1} = strings;

    return (
        <Container fullWidth>
            <Grid container direction='column'> {/* Whole page wrapper */}
                <Grid item container direction='row' justify='space-between'>
                    <Grid item>
                        <Typography className={classes.learningCourseTypography}>
                            {pageTest1.learningCourse}
                        </Typography>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item>
                            <TextField
                                classes={textFieldClasses}
                                variant='outlined'
                                placeholder={pageTest1.searchRecipe}
                                InputProps={{
                                    endAdornment: <Button className={classes.searchButton}>
                                        <img src={searchIcon} alt='search-icon' className={classes.searchIcon}/>
                                    </Button>
                                }}
                            />
                        </Grid>
                    </Hidden>
                </Grid>
                <Grid item>
                    <Typography>
                        {pageTest1.loremIpsum}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}