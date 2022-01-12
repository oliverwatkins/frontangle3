import React from "react";

// import {BrowserRouter as Router, Route, Navigate} from "react-router-dom";
import PageLayoutMain from "./PageLayoutMain"
import PageLayoutICharts from "./pages/icharts/PageLayoutICharts"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link,
    useLocation
} from "react-router-dom";
// let location = useLocation();
import './style.less';


/**
 *test
 *
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children.
 */
function Main() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<PageLayoutMain history={history}/>}/>
                <Route path="/main" element={<PageLayoutMain/>}/>
                <Route path="/icharts" element={<PageLayoutICharts/>}/>


                {/*<Route exact path="/" element={<Home/>}/>*/}
                {/*<Route exact path="/login" element={<Login/>}/>*/}
                {/*<Route exact path="/recovery-password" element={<RecoveryPassword/>}/>*/}
                {/*<Route path="*" element={<NotFound/>}/>*/}
            </Routes>
        </Router>
    );
}

export default Main