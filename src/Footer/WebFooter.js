import React from "react";
import {Grid, makeStyles, Typography} from "@material-ui/core";
import logo from '../assets/contained-logo.png';
import footer from '../assets/webFooter.png';
import call from '../assets/call.png';
import pin from '../assets/pin.png';
import telegram from '../assets/telegram.png';
import instagram from '../assets/instagram.png';
import fnamad from '../assets/fnamad.png';
import enamad from '../assets/enamad.png';
import {useFont, useMargin, usePadding, useSize, useWidth} from "../values/web";
import clsx from "clsx";
import {colors, genericStyles, strings} from "../values/values";
import {useBackground} from "../about-course/mobile/FoodCard";

const useStyle = makeStyles(theme => ({
    root: {
        paddingTop: useWidth(123, 'lg'),
        marginTop: useWidth(171, 'lg')
    },
    logo: {
        width: '100%',
        height: '100%'
    },
    content: {
        paddingLeft: '3%'
    },
    paddingTop5: {
        paddingTop: '5%'
    }
}));

const colorStyles = makeStyles(theme => colors);

export default function WebFooter(props) {
    const classes = useStyle();
    const genericClasses = genericStyles();
    const colorClasses = colorStyles();
    const {footer: footerString} = strings.pageTest1;
    return (
        <Grid
            container
            justify="flex-end"
            wrap='nowrap'
            className={clsx([useSize(undefined, 737), useBackground(footer), classes.root])}
        >
            <Grid item container wrap='nowrap' direction='column' xs={4} sm={4} lg={4} xl={4} md={4}> {/*first column*/}
                <Grid item className={clsx([useSize(242, 96)])}>{/*first row*/}
                    <img src={logo} className={classes.logo} alt='logo'/>
                </Grid>
                <Grid
                    item
                    container
                    wrap='nowrap'
                    className={usePadding(72)}
                    alignContent='center'
                    alignItems='flex-start'
                > {/*second row*/}
                    <Grid item>
                        <img src={pin} className={clsx([useSize(48, 48)])} alt='pin'/>
                    </Grid>
                    <Grid item className={clsx([useFont(24, 'medium'), colorClasses.fontWhiteColor, classes.content])}>
                        <Typography>
                            {footerString.address}
                        </Typography>
                    </Grid>
                    <Grid item className={clsx([useFont(24, 'medium'), colorClasses.fontWhiteColor, classes.content])}>
                        <Typography>
                            تهران - خیابان جمهوری- خیابان کارگر جنوبی-
                            <br/>
                            نرسیده به میدان پاستور- نبش کوچه سعیدی-
                            <br/>
                            پلاک 6- واحد 7
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    wrap='nowrap'
                    className={clsx([useMargin(90)])}
                    alignContent='center'
                    alignItems='center'
                > {/*third row*/}
                    <Grid item className={genericClasses.inlineFlex}>
                        <img src={call} className={useSize(48, 48)} alt='call'/>
                    </Grid>
                    <Grid
                        item
                        wrap='nowrap'
                        className={clsx([useFont(24, 'medium'), colorClasses.fontWhiteColor, classes.content])}
                    >
                        <Typography>
                            {footerString.phoneNumber}
                        </Typography>
                    </Grid>
                    <Grid item className={clsx([useFont(24, 'medium'), classes.content, colorClasses.fontWhiteColor])}>
                        <Typography>
                            {footerString.phoneNumber1}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction='column'
                wrap='nowrap'
                xs={4}
                sm={4}
                lg={4}
                xl={4}
                md={4}
                justify='space-evenly'
                className={classes.paddingTop5}
            > {/*second column*/}
                <Grid
                    item
                    className={clsx([useFont(24, 'medium'), classes.content, colorClasses.fontWhiteColor])}
                > {/*first row*/}
                    <Typography>
                        {footerString.socialMedia}
                    </Typography>
                </Grid>
                <Grid item container wrap='nowrap' alignItems='center'> {/*second row*/}
                    <Grid item className={genericClasses.inlineFlex}>
                        <img src={telegram} className={useSize(52.47, 45.22)} alt='telegram'/>
                    </Grid>
                    <Grid item className={clsx([useFont(24, 'medium'), colorClasses.fontWhiteColor, classes.content])}>
                        <Typography noWrap>
                            {footerString.telegram}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container wrap='nowrap' alignItems='center'>{/*third row*/}
                    <Grid item className={genericClasses.inlineFlex}>
                        <img src={instagram} className={useSize(42, 42)} alt='instagram'/>
                    </Grid>
                    <Grid item className={clsx([useFont(24, 'medium'), colorClasses.fontWhiteColor, classes.content])}>
                        <Typography noWrap>
                            {footerString.instagram}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    wrap='nowrap'
                    alignItems='center'
                > {/*fourth row*/}
                    <Grid item className={genericClasses.inlineFlex}>
                        <img src={fnamad} className={useSize(77, 60)} alt='fnamad'/>
                    </Grid>
                    <Grid item>
                        <img src={enamad} className={useSize(95, 95)} alt='enamad'/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
