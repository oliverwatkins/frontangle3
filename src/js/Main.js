import React from "react";

// import {BrowserRouter as Router, Route, Navigate} from "react-router-dom";
import PageLayoutMain from "./PageLayoutMain"
import PageLayoutICharts from "./pages/icharts/PageLayoutICharts"

import { BrowserRouter, Route, Switch } from 'react-router-dom';
// let location = useLocation();
// import './style.scss';


/**
 *test
 *
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children.
 */
function Main() {
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