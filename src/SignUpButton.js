import React from "react";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";
import rightArrow from "./assets/arrow-pointing-to-right.png";
import Typography from "@material-ui/core/Typography";
import {useBorderRadius, useFont, useMinWidth, useSize} from "./values/web";
import Button from "@material-ui/core/Button";
import {colors, genericStyles, strings} from "./values/values";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    button: {
        padding: 0,
        justifyContent: 'space-between'
    },
    buttonWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const colorStyles = makeStyles(theme => (colors));

export default function SignUpButton(props) {
    const {pageTest1} = strings;
    const {arrowPanelWidth, arrowPanelBorderRadius, borderRadius, height, width, fontSize, ...rest} = props;
    const classes = useStyles();
    const genericClasses = genericStyles();
    const colorClasses = colorStyles();
    const {className, ...otherProps} = rest;
    return (
        <Button
            variant='contained'
            className={clsx([colorClasses.backgroundMainColor, colorClasses.fontWhiteColor, classes.button, useSize(width, height), useBorderRadius(borderRadius), className])}
            {...otherProps}
        >
            <div
                className={clsx([classes.buttonWrapper, colorClasses.backgroundLightMainColor, genericClasses.inlineFlex, useSize(arrowPanelWidth, height), useMinWidth(arrowPanelWidth), useBorderRadius(arrowPanelBorderRadius)])}>
                <img src={rightArrow} alt='rightArrow' className={useSize(31, 21)}/>
            </div>
            <div
                className={clsx([genericClasses.inlineFlex, genericClasses.genericFullWidth, genericClasses.centerJustifyContent])}>
                <Typography className={useFont(fontSize, 'medium')}>
                    {pageTest1.signUp}
                </Typography>
            </div>
        </Button>
    );
}

SignUpButton.propTypes = {
    ...Button.propTypes,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    borderRadius: PropTypes.number.isRequired,
    fontSize: PropTypes.number.isRequired,
    arrowPanelWidth: PropTypes.number.isRequired,
    arrowPanelBorderRadius: PropTypes.number.isRequired
};