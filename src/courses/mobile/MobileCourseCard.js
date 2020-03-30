import React from "react";
import {makeStyles} from "@material-ui/styles";
import {colors, genericStyles, strings} from "../../values/values";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import {
    useBorderRadius,
    useBorderRadiuses,
    useFont,
    useMargin,
    useMinWidth,
    usePadding,
    useSize
} from "../../values/mobile";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import clock from "../../assets/clock.png";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    title: {
        color: '#E7301C'
    },
    content: {
        transform: 'translateY(-20px)',
        background: '#FFFFFF',
        padding: 0
    }
}));

const contentStyles = makeStyles(theme => ({
    root: {
        '&:last-child': {
            paddingBottom: 0
        }
    }
}));

const colorStyles = makeStyles(theme => colors);

export default function MobileCourseCard(props) {
    const colorClasses = colorStyles();
    const classes = useStyles();
    const genericClasses = genericStyles();
    const contentClasses = contentStyles();
    const {pageTest1} = strings;
    const {recipeImage, date, duration, price, teacher, title, type} = props;

    return (
        <Card className={clsx([classes.card, useBorderRadius(10), useMargin(0, 0, 6, 6)])}>
            <CardMedia
                className={clsx([useSize(undefined, 102), useBorderRadius(10), useMinWidth(150)])}
                image={recipeImage}
                title={title}
            >
                <Grid container justify='flex-end' alignItems='center'>
                    <Grid item>
                        <Chip
                            className={clsx([useSize(41, 15), colorClasses.backgroundGreenColor, colorClasses.fontWhiteColor, useBorderRadius(18), useFont(9), useMargin(12, 0, 0, 12)])}
                            label={type === 'online' ? pageTest1.online : pageTest1.presentment}
                        />
                    </Grid>
                </Grid>
            </CardMedia>
            <CardContent classes={contentClasses}
                         className={clsx([classes.content, useBorderRadius(10), usePadding(9), useMargin(0, -20)])}>
                <Grid container direction='column' alignItems='center'> {/* whole card wrapper */}
                    <Grid container item justify='center' alignItems='center'> {/* first row */}
                        <Grid item>
                            <Typography className={clsx([classes.title, useFont(14, 'medium')])}>
                                {title}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container wrap='nowrap' justify='space-between'
                          className={useMargin(12)}> {/* second row */}
                        <Grid item container alignItems='center' className={genericClasses.genericAutoWidth}>
                            <Grid item className={genericClasses.inlineFlex}>
                                <img src={clock} alt='clock' className={useSize(9.28, 9.28)}/>
                            </Grid>
                            <Grid item>
                                <Typography className={useFont(12)}>
                                    {duration}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Divider orientation='vertical'/>
                        </Grid>
                        <Grid item>
                            <Typography className={clsx([useFont(14), colorClasses.fontGreenColor])}>
                                {`${price} ${pageTest1.priceUnit}`}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item className={genericClasses.genericFullWidth}> {/* forth row */}
                        <Divider className={clsx([useMargin(7.5, 9.5), genericClasses.genericFullWidth])}/>
                    </Grid>
                    <Grid item container wrap='nowrap' className={genericClasses.genericFullWidth}
                          justify='center'> {/* last row */}
                        <Grid item>
                            <Typography className={useFont(12)} noWrap>
                                {teacher}/
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={clsx([useFont(12), colorClasses.fontGrayColor])}>
                                {date}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item className={genericClasses.genericFullWidth}>
                        <Button
                            className={clsx([useSize(undefined, 48), colorClasses.fontWhiteColor, colorClasses.backgroundMainColor, useBorderRadiuses(0, 0, 10, 10)])}
                            fullWidth
                        >
                            {pageTest1.signUp}
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

MobileCourseCard.propTypes = {
    recipeImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['online', 'presentment']).isRequired,
    duration: PropTypes.string,
    price: PropTypes.number,
    date: PropTypes.string,
    teacher: PropTypes.string
};

MobileCourseCard.defaultProps = {
    duration: '01:45',
    price: 45000,
    date: '3 بهمن 1398',
    teacher: strings.pageTest1.teacher1
};