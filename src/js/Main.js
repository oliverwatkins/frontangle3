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
import {useTranslation} from "react-i18next";

function Main() {

    //TODO translation only works if this hook is initialised here..but why?
    const { t, i18n } = useTranslation();

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