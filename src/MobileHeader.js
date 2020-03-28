import React from "react";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";
import {genericStyles} from "./values/responsive";
import {Container, Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import drawer from './assets/drawer.png';
import {useBorderRadius, useSize} from "./values/mobileResponsive";
import logo from './assets/logo.png';
import user from './assets/user.png';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    userLogo: {
        background: 'rgba(255, 54, 74, 0.15)'
    }
}));

export default function MobileHeader(props) {
    const genericClasses = genericStyles();
    const classes = useStyles();
    return (
        <Paper
            className={clsx([genericClasses.genericFullWidth, genericClasses.inlineFlex, genericClasses.centerAlignItems, useSize(undefined, 56)])}
        >
            <Container>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item className={genericClasses.inlineFlex}>
                        <Button variant='outlined' onClick={props.drawerButtonCallback}>
                            <img src={drawer} className={useSize(24, 24)} alt='drawer'/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img src={logo} className={useSize(59, 21)} alt='logo'/>
                    </Grid>
                    <Grid item>
                        <div className={clsx([useSize(42, 36), useBorderRadius(17), classes.userLogo])}>
                            <img src={user} className={useSize(24, 24)} alt='user'/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
}

MobileHeader.propTypes = {
    drawerButtonCallback: PropTypes.func.isRequired
};