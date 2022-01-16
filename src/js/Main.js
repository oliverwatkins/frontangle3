import React from "react";

// import {BrowserRouter as Router, Route, Navigate} from "react-router-dom";
import PageLayoutMain from "./PageLayoutMain"
import PageLayoutICharts from "./pages/icharts/PageLayoutICharts"

import { BrowserRouter, Route, Switch } from 'react-router-dom';

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