import React from "react";
import {makeStyles} from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from 'prop-types';
import {colors, genericStyles, strings} from "../../values/values";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import clock from '../../assets/clock.png';
import {useBorderRadius, useFont, useMargin, useMinWidth, useSize} from "../../values/web";
import clsx from "clsx";
import SignUpButton from "../../SignUpButton";

const useStyles = makeStyles(theme => ({
    fontGreenColor2: {
        color: '#24C82F'
    },
    card: {
        boxShadow: "0 3px 20px rgba(205, 22, 38, 0.16)",
    },
}));

const colorStyles = makeStyles(theme => colors);

export default function WebCourseCard(props) {

    const {recipeImage, date, duration, price, teacher, title, type} = props;
    const classes = useStyles();
    const genericClasses = genericStyles();
    const colorClasses = colorStyles();
    const {pageTest1} = strings;

    return (
        <Card className={clsx([classes.card, useMinWidth(384), useBorderRadius(20), useMargin(24, 24, 24, 24)])}>
            <CardMedia
                className={clsx([useSize(undefined, 267), useBorderRadius(20), useMinWidth(384)])}
                image={recipeImage}
                title={title}
            />
            <CardContent>
                <Grid container direction='column' alignItems='center' spacing='3'> {/* whole card wrapper */}
                    <Grid container item justify='space-between' alignItems='center' wrap='nowrap'> {/* first row */}
                        <Grid item>
                            <Typography className={useFont(22, 'medium')} noWrap>
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Chip
                                className={clsx(useSize(94, 40), [colorClasses.backgroundGreenColor, colorClasses.fontWhiteColor, useBorderRadius(18), useFont(18, 'medium')])}
                                label={type === 'online' ? pageTest1.online : pageTest1.presentment}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container wrap='nowrap' justify='space-between'> {/* second row */}
                        <Grid item container alignItems='center' className={genericClasses.genericAutoWidth}>
                            <Grid item className={genericClasses.inlineFlex}>
                                <img src={clock} alt='clock' className={useSize(23.5, 23.5)}/>
                            </Grid>
                            <Grid item>
                                <Typography className={useFont(24)}>
                                    {duration}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Divider orientation='vertical'/>
                        </Grid>
                        <Grid item>
                            <Typography className={clsx([useFont(22), classes.fontGreenColor2])}>
                                {`${price} ${pageTest1.priceUnit}`}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item> {/* third row */}
                        <SignUpButton
                            width={191}
                            height={64}
                            borderRadius={18}
                            fontSize={24}
                            arrowPanelWidth={69}
                            arrowPanelBorderRadius={18}
                        />
                    </Grid>
                    <Grid item className={genericClasses.genericFullWidth}> {/* forth row */}
                        <Divider className={genericClasses.genericFullWidth}/>
                    </Grid>
                    <Grid item container wrap='nowrap'> {/* last row */}
                        <Grid item container>
                            <Grid item>
                                <Typography className={useFont(18)}>
                                    {pageTest1.courseDate}:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid item>
                                    <Typography className={clsx([useFont(18), colorClasses.fontGrayColor])}>
                                        {date}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography className={useFont(18)} noWrap>
                                {teacher}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

WebCourseCard.propTypes = {
    recipeImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['online', 'presentment']).isRequired,
    duration: PropTypes.string,
    price: PropTypes.number,
    date: PropTypes.string,
    teacher: PropTypes.string
};

WebCourseCard.defaultProps = {
    duration: '01:45',
    price: 45000,
    date: '3 بهمن 1398',
    teacher: strings.pageTest1.teacher1
};