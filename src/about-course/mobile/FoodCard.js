import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/styles";
import PropTypes from 'prop-types';
import clsx from "clsx";
import Chip from "@material-ui/core/Chip";
import {colors} from '../../values/values';
import {useBorderRadius, useFont, useMargin, useSize} from "../../values/mobile";

const colorStyles = makeStyles(theme => colors);

export function useBackground(image) {
    const useStyles = makeStyles(theme => ({
        useBackground: {
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }
    }));
    return useStyles().useBackground;
}

export const FoodCard = (props) => {
    const colorClasses = colorStyles();
    return (
        <Grid container alignItems='center' direction='column' justify='center'
              className={clsx([useMargin(0, 0, 6, 6), useBackground(props.background), useBorderRadius(10), useSize(147, 123)])}>
            <Grid item>
                <Chip
                    label={props.foodCategory}
                    className={clsx([useMargin(0, 5), useSize(63, 23), useFont(10), colorClasses.backgroundGreenColor, colorClasses.fontWhiteColor])}
                />
            </Grid>
            <Grid item>
                <Chip
                    label={props.foodTitle}
                    className={clsx([useSize(133, 34), useFont(14, 'medium')])}
                />
            </Grid>
        </Grid>
    );
};

FoodCard.propTypes = {
    background: PropTypes.string.isRequired,
    foodCategory: PropTypes.string.isRequired,
    foodTitle: PropTypes.string.isRequired
};