import React, {useEffect} from "react";

// import {BrowserRouter as Router, Route, Navigate} from "react-router-dom";
import PageLayoutMain from "./PageLayoutMain"
import PageLayoutICharts from "./pages/icharts/PageLayoutICharts"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './global.scss';





import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Main() {


    useEffect((e) => {

    })
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <PageLayoutMain/>
                </Route>
                <Route path="/main">
                    <PageLayoutMain/>
                </Route>
                <Route path="/icharts">
                    <PageLayoutICharts/>
                </Route>
                <Route path="*" element={<div>Not found</div>}/>
            </Switch>
        </BrowserRouter>
    );
}



export default Main