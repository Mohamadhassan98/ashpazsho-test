import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import RTL from "./RTL";

function Index() {
    const theme = createMuiTheme({
        direction: "rtl",
        typography: {
            fontFamily: "IRANSans",
            fontWeight: 'normal'
        },
        overrides: {
            MuiButton: {
                root: {
                    minWidth: "unset"
                }
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <RTL>
                    <App/>
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
