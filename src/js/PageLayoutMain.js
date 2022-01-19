import React from "react";

import Footer from "./layout/Footer";

import {Route} from 'react-router-dom'

import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PreviousWorkPage from "./pages/PreviousWorkPage";

import Banner from "./layout/Banner.js";
import Nav from "./layout/Nav.js";

import {Switch} from "react-router-dom";


/**
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children..
 */
export default function PageLayout(props) {
    const {location} = props;
    const headerStyle = {
        position: "fixed",
        color: "pink",
        backgroundColor: "red"
    };
    return (
        <div>
            <Banner/>
            <Nav location={location}/>
            <div>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/main">
                        <HomePage/>
                    </Route>
                    <Route path="/main/previous">
                        <PreviousWorkPage/>
                    </Route>
                    <Route path="/main/contact">
                        <ContactPage/>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}


