import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import RTL from "./RTL";
import {strings} from "./values/values";
import HiddenScroll from "./hiddenScroll";

function Index() {
    const theme = createMuiTheme({
        direction: "rtl",
        typography: {
            fontFamily: "IRANSans",
            fontWeight: 'normal'
        },
        breakpoints: {
            values: {
                xs: 360,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920
            }
        },
        overrides: {
            MuiButton: {
                root: {
                    minWidth: "unset"
                }
            },
            MuiRating: {
                root: {
                    textAlign: undefined
                }
            }
        }
    });

    const {pageTest1} = strings;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <RTL>
                    {/*<FoodCard background={food1} foodCategory={pageTest1.foodCategory1} foodTitle={pageTest1.recipe1}/>*/}
                    <HiddenScroll vertical horizontal>
                        <App/>
                    </HiddenScroll>
                </RTL>
            </CssBaseline>
        </ThemeProvider>
    );
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
