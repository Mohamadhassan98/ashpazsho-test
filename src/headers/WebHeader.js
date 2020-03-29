import React from "react";
import {Container, Paper, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import pic2 from '../assets/logo.png';
import Grid from "@material-ui/core/Grid";
import {useBorderRadius, useBorderRadiuses, useFont, useMargin, useSize} from "../values/web";
import clsx from "clsx";
import {colors, genericStyles, strings} from "../values/values";
import downArrow from "../assets/down arrow.png";

const useStyle = makeStyles(theme => ({
    root: {
        boxShadow: '0px 3px 20px rgba(141, 141, 141, 0.38)'
    },
    loginButton: {
        border: '1px solid #CD1626',
    },
    container: {
        height: '100%',
    }
}));

const colorStyles = makeStyles(theme => colors);

export default function WebHeader(props) {
    const classes = useStyle();
    const genericClasses = genericStyles();
    const colorClasses = colorStyles();
    const {pageTest1} = strings;

    return (
        <Paper
            className={clsx([useMargin(0, 73), genericClasses.genericFullWidth, genericClasses.inlineFlex, genericClasses.centerAlignItems, useSize(undefined, 169), useBorderRadiuses('0', '0', 50, 50), classes.root])}
        >
            <Container maxWidth={false} className={clsx([useMargin(0, 0, 146, 146), genericClasses.genericFullWidth])}>
                <Grid container wrap='nowrap' alignItems='center'
                      justify='space-between'> {/* whole WebHeader wrapper */}
                    <Grid item className={genericClasses.inlineFlex}>
                        <img src={pic2} className={useSize(145, 51)} alt='logo'/>
                    </Grid>
                    <Grid item container justify='space-between' wrap='nowrap' className={useMargin(0, 0, 94)}>
                        <Grid item>
                            <Typography className={useFont(22, 'medium')} noWrap>
                                {pageTest1.mainPage}
                            </Typography>
                        </Grid>
                        <Grid item container wrap='nowrap' alignItems='center'
                              className={genericClasses.genericAutoWidth}>
                            <Grid item>
                                <Typography className={useFont(22, 'medium')} noWrap>
                                    {pageTest1.learningCourses}
                                </Typography>
                            </Grid>
                            <Grid item className={genericClasses.inlineFlex}>
                                <img src={downArrow} alt='downArrow' className={useSize(24, 24)}/>
                            </Grid>
                        </Grid>
                        <Grid item container wrap='nowrap' alignItems='center'
                              className={genericClasses.genericAutoWidth}>
                            <Grid item>
                                <Typography className={useFont(22, 'medium')} noWrap>
                                    {pageTest1.learningClips}
                                </Typography>
                            </Grid>
                            <Grid item className={genericClasses.inlineFlex}>
                                <img src={downArrow} alt='downArrow' className={useSize(24, 24)}/>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography className={useFont(22, 'medium')} noWrap>
                                {pageTest1.contactUs}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={useFont(22, 'medium')} noWrap>
                                {pageTest1.aboutUs}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container wrap='nowrap' className={genericClasses.genericAutoWidth}>
                        <Grid item>
                            <Button
                                variant="outlined"
                                className={clsx([colorClasses.fontDarkMainColor, classes.loginButton, useMargin(undefined, undefined, 162, 46), useSize(164, 72), useBorderRadius(36), useFont(24, 'medium')])}
                            >
                                {pageTest1.login}
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant='contained'
                                    className={clsx([colorClasses.fontWhiteColor, colorClasses.backgroundMainColor, useSize(164, 72), useBorderRadius(36), useFont(24, 'medium')])}>
                                {pageTest1.signUp}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
}
