import React from "react";

import Footer from "./layout/Footer";

import {Route} from 'react-router-dom'

import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PreviousWorkPage from "./pages/PreviousWorkPage";

import Header from "./layout/Header.js";
import Nav from "./layout/Nav.js";

import {Switch} from "react-router-dom";
import SnakeThing from "./pages/snakething/SnakeThing";
import DemoPage from "./pages/snakething/DemoPage";
import ResumePage from "./pages/resume/ResumePage";
import Nav2 from "./layout/Nav2";
import ServicesPage from "./pages/ServicesPage";




/**
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children..
 */
export default function PageLayout(props) {
    const {location} = props;
    return (
        <div>
            <Header/>
            {/*<Nav location={location}/>*/}
            <Nav2/>

                <Switch>
                    <Route exact path="/public/OW.html">
                        <HomePage/>
                    </Route>
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
                    <Route path="/main/snakething">
                        <DemoPage/>
                    </Route>
                    <Route path="/main/services">
                        <ServicesPage/>
                    </Route>
                    <Route path="/main/resume">
                        <ResumePage/>
                    </Route>
                </Switch>
            <Footer/>
        </div>
    );
}


