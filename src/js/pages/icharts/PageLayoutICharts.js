import React from "react";

import HeaderPanel from "./HeaderPanel";
import RightPanel from "./RightPanel";
import {Switch, Route} from "react-router-dom";
import HomePage from "../HomePage";
import PreviousWorkPage from "../PreviousWorkPage";
import ContactPage from "../ContactPage";
import HomePanel from "./HomePanel";
import Screenshots from "./Screenshots";
import CodesamplesPanel from './CodesamplesPanel';
// import Route from "react-router-dom/es/Route";
// import { Routes, Route, withRouter, Router, Redirect } from 'react-router-dom'
/**
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children..
 */
export default function PageLayoutICharts(props) {
    const {location} = props;
    const containerStyle = {
        marginTop: "0px"
    };

    return (
        <div className="icharts">
            <HeaderPanel location={location}/>
            <RightPanel location={location}/>
            <div style={containerStyle}>
                <div>
                    <div>
                        {/*<Switch>*/}
                        {/*  /!*<Route exact path="/icharts" component = {HomePanel}/>*!/*/}
                        {/*  /!*<Route path="/icharts/screenshots" component = {Screenshots}/>*!/*/}
                        {/*  /!*<Route path="/icharts/codesamples" component = {CodesamplesPanel}/>*!/*/}
                        {/*</Switch>*/}
                        <Switch>
                            <Route exact path="/icharts">
                                <HomePanel/>
                            </Route>
                            <Route path="/icharts/screenshots">
                                <Screenshots/>
                            </Route>
                            <Route path="/icharts/codesamples">
                                <CodesamplesPanel/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}
