import React from "react";
import icebergImage from './img/icbergcharts2.PNG';
import headerImage from './img/icharts-banner.PNG';
import {Link, useLocation, withRouter} from "react-router-dom";

import './HeaderPanel.less';


export default function HeaderPanel(props) {
    const [collapsed, setCollapsed] = React.useState(true);
    // constructor() {
    //   super()
    //   this.state = {
    //     collapsed: true,
    //   };
    // }
    let location = useLocation();
    let toggleCollapse = () => {
        setCollapsed(!collapsed)
        //
        // const collapsed = !this.state.collapsed;
        // this.setState({collapsed});
    }
    // let toggleCollapse = () => {
    //     const collapsed = !this.state.collapsed;
    //     this.setState({collapsed});
    // }

    const homeClassisActive = location.pathname === "/icharts" ? "active" : "";
    const screenshotsIsActive = location.pathname === "/icharts/screenshots" ? "active" : "";
    const codesamplesIsActive = location.pathname === "/icharts/codesamples" ? "active" : "";
    const apiIsActive = location.pathname === "/icharts/api" ? "active" : "";

    return (
        <div id="header">
            <div id="header-container">
                <img id="header-title-icharts" src={headerImage}/>
                <img src={icebergImage}/>
            </div>

            <div id="header-blurb">
                Free Java Charting Library and Framework, for use in Java2D, Swing or JavaFX applications.
            </div>
            <hr/>

            <nav className="navbar navbar-inverse" role="navigation">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className={homeClassisActive}>
                            <Link to="/icharts" onClick={toggleCollapse.bind(this)}>Home</Link>
                        </li>
                        <li className={screenshotsIsActive}>
                            <Link to="/icharts/screenshots" onClick={toggleCollapse.bind(this)}>
                                Screenshots
                            </Link>
                        </li>
                        <li className={codesamplesIsActive}>
                            <Link to="/icharts/codesamples" onClick={toggleCollapse.bind(this)}>
                                Code Samples
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
