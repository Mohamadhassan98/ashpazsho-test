import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import telegram from '../assets/telegram.png';
import instagram from '../assets/instagram.png';
import enamad from '../assets/enamad.png';
import fnamad from '../assets/fnamad.png';
import call from '../assets/call.png';
import pin from '../assets/pin.png';
import footer from '../assets/mobileFooter.png';
import {useFont, useMargin, usePadding, useSize} from "../values/mobile";
import clsx from "clsx";
import {colors, genericStyles, strings} from "../values/values";
import {useBackground} from "../about-course/mobile/FoodCard";

const useStyles = makeStyles(theme => ({
    container: {
        backgroundPosition: 'center',
        width: '100vw',
    }
}));

const colorStyles = makeStyles(theme => colors);

export default function ResponsiveFooter() {
    const classes = useStyles();
    const colorClasses = colorStyles();
    const genericClasses = genericStyles();
    const {footer: footerStrings} = strings.pageTest1;

    return (
        <Grid
            container
            direction='column'
            wrap='nowrap'
            justify="center"
            maxWidth={false}
            className={clsx([useBackground(footer), classes.container, useSize(undefined, 527), usePadding(undefined, undefined, 28.5)], useMargin(22))}
        >
            <Grid item container alignContent='center' alignItems='flex-start'>{/*first row*/}
                <Grid item container alignItems='center'
                      className={clsx([genericClasses.genericAutoWidth, genericClasses.inlineFlex])}>
                    <Grid item className={genericClasses.inlineFlex}>
                        <img src={pin} className={useSize(20, 21)} alt='pin'/>
                    </Grid>
                    <Grid item>
                        <Typography className={clsx([colorClasses.fontWhiteColor, useFont(12)])}>
                            {footerStrings.address}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item className={usePadding(undefined, undefined, 12)}>
                    <Typography className={clsx([colorClasses.fontWhiteColor, useFont(12, 'medium')])}>
                        تهران - خیابان جمهوری- خیابان کارگر جنوبی
                        <br/>
                        نرسیده به میدان پاستور
                        <br/>
                        نبش کوچه سعیدی- پلاک 6- واحد 7
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                wrap='nowrap'
                alignContent='center'
                alignItems='center'
                className={usePadding(36)}
            > {/*second row*/}
                <Grid item className={clsx([genericClasses.inlineFlex, genericClasses.centerAlignItems])}>
                    <img src={call} className={useSize(20, 20)} alt='call'/>
                </Grid>
                <Grid item>
                    <Typography className={clsx([colorClasses.fontWhiteColor, useFont(12)])}>
                        {footerStrings.phoneNumber}
                    </Typography>
                </Grid>
                <Grid item className={usePadding(undefined, undefined, 12)}>
                    <Typography className={clsx([colorClasses.fontWhiteColor, useFont(14, 'medium')])}>
                        {footerStrings.phoneNumber1}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                alignContent='center'
                alignItems='center'
                className={usePadding(30)}
            >{/*third row*/}
                <Grid
                    item
                    className={clsx([useSize(35.8, 35.8), genericClasses.inlineFlex, genericClasses.centerAlignItems])}
                >
                    <img src={instagram} className={useSize(26.41, 26.41)} alt='instagram'/>
                </Grid>
                <Grid item>
                    <Typography className={clsx([colorClasses.fontWhiteColor, useFont(12)])}>
                        {footerStrings.telegram}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                alignContent='center'
                alignItems='center'
                className={usePadding(30)}
            >{/*fourth row*/}
                <Grid item
                      className={clsx([useSize(35.8, 35.8), genericClasses.inlineFlex, genericClasses.centerAlignItems])}>
                    <img src={telegram} className={useSize(21.56, 20.3)} alt='telegram'/>
                </Grid>
                <Grid item>
                    <Typography className={clsx([colorClasses.fontWhiteColor, useFont(12)])}>
                        {footerStrings.instagram}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                justify='center'
                alignItems='center'
                className={usePadding(43)}
            > {/*fifth row*/}
                <Grid item
                      className={clsx([useSize(51, 51), genericClasses.inlineFlex, genericClasses.centerAlignItems])}>
                    <img src={fnamad} alt='fnamad'/>
                </Grid>
                <Grid item className={useSize(47, 36)}>
                    <img src={enamad} alt='enamad'/>
                </Grid>
            </Grid>
        </Grid>
    );
}
