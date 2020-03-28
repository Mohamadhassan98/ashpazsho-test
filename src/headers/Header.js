import React from "react";
import {Hidden} from "@material-ui/core";
import MobileHeader from "./MobileHeader";
import WebHeader from "./WebHeader";
import MobileDrawer from "../Drawer";

export default function Header() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    return (
        <div>
            <Hidden only={["xl", "lg", "md"]}>
                <MobileHeader drawerButtonCallback={() => setDrawerOpen(true)}/>
                <MobileDrawer open={drawerOpen} setOpen={setDrawerOpen}/>
            </Hidden>
            <Hidden only={["xs", "sm"]}>
                <WebHeader/>
            </Hidden>
        </div>
    );
}