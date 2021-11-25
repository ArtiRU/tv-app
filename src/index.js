import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import 'normalize.css';
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./themes";
import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
