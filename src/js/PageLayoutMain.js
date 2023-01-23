import React from "react";

import Footer from "./layout/Footer";

import {Route} from 'react-router-dom'

import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PreviousWorkPage from "./pages/PreviousWorkPage";

import Header from "./layout/Header.js";
import Nav from "./layout/Nav.js";

import {Switch} from "react-router-dom";
import {Box} from "@mui/material";
import headerImage from './pages/Fotolia_107797505_L.jpg';

/**
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children..
 */
export default function PageLayout(props) {
    const {location} = props;
    // const headerStyle = {
    //     position: "fixed",
    //     color: "pink",
    //     backgroundColor: "red"
    // };
    return (
        <div>
            <Header/>
            <Nav location={location}/>
            <Box
                // sx={{backgroundImage: `url(${headerImage})`}}
            >
                {/*// sx={{border: "red dashed medium", height: "100%"}}*/}

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
            </Box>
            <Footer/>
        </div>
    );
}


