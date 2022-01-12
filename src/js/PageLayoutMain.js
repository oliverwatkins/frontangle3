import React from "react";

import Footer from "./layout/Footer";

import {Route} from 'react-router-dom'

import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PreviousWorkPage from "./pages/PreviousWorkPage";

import Banner from "./layout/Banner.js";
import Nav from "./layout/Nav.js";

// import BouncySwitch from "./BouncySwitch"
import './style.less';


/**
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children..
 *
 */
export default function PageLayout(props) {
    const {location} = props;
    const headerStyle = {
        position: "fixed",
        color: "pink",
        backgroundColor: "red"
    };
    //TODO disabling fadeswitch for now! It is interfering with the sticky header!!
    return (
        <div>
            <Banner/>
            <Nav location={location}/>

            <div>
                <div>
                    <div>
                        {/*<FadeSwitch>*/}
                        <Route exact path="/main" component={HomePage}/>
                        <Route path="/main/previous" component={PreviousWorkPage}/>
                        <Route path="/main/contact" component={ContactPage}/>
                        {/*</FadeSwitch>*/}
                    </div>
                </div>
                <Footer/>
            </div>


        </div>
    );
}
