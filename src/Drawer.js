import React from "react";
import {SwipeableDrawer} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import logo from './assets/logo.png';
import {useFont, useSize} from "./values/mobileResponsive";
import Typography from "@material-ui/core/Typography";
import {appName, strings} from "./values/strings";
import Divider from "@material-ui/core/Divider";
import PropTypes from 'prop-types';

export default function MobileDrawer(props) {
    const {open, setOpen} = props;
    const {pageTest1} = strings;
    return (
        <SwipeableDrawer anchor='right' onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
            <List>
                <ListItem disableRipple>
                    <Container>
                        <img src={logo} alt='logo' className={useSize(103, 36)}/>
                        <Typography className={useFont(12, 'medium')}>
                            {appName}
                        </Typography>
                    </Container>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <Typography className={useFont(14, 'medium')}>
                        {pageTest1.signInUp}
                    </Typography>
                </ListItem>
                <ListItem button>
                    <Typography className={useFont(14, 'medium')}>
                        {pageTest1.mainPage}
                    </Typography>
                </ListItem>
            </List>
        </SwipeableDrawer>
    );
}

MobileDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
};