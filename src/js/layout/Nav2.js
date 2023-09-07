import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./nav2.scss"
import {Typography} from "@mui/material";
// import './';
import { useTranslation } from 'react-i18next';

function Nav2() {

    const [lang, setLang] = React.useState("en");

    const { t, i18n } = useTranslation();

    const [collapsed, setCollapsed] = React.useState(true);

    let toggleCollapse = () => {

        // setCollapsed(!collapsed)
        setCollapsed(false)
    }

    const collapse = collapsed ? "collapse" : "";

    let location = useLocation();

    const homeClassisActive = location.pathname === "/main" ? "active" : "";
    let previousClassisActive = location.pathname.indexOf("previous") > 0 ? "active" : "";
    let contactClassisActive = location.pathname.indexOf("contact") > 0 ? "active" : "";
    const [showDropdown, setShowDropdown] = React.useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (


        // <div>


            <nav className="navbar2 navbar-default2" role="navigation">
                <ul>
                    <li className={homeClassisActive}>
                        <Link to="/main" onClick={toggleCollapse.bind(this)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/main/previous" onClick={toggleCollapse.bind(this)} className={previousClassisActive}>
                            Previous Work
                        </Link>
                    </li>
                    <li><a className="dropdown" href="#">Services</a>
                        <ul>
                            <li><a href="#">Sub-menu Item 1</a></li>
                            <li><a href="#">Sub-menu Item 2</a></li>
                            <li><a href="#">Sub-menu Item 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/main/contact" onClick={toggleCollapse.bind(this)} className={contactClassisActive}>
                            Contact
                        </Link>

                    </li>

                    <li >
                        <Link to="/main/snakething" onClick={toggleCollapse.bind(this)} className={"playground"}>
                            snakething
                        </Link>
                    </li>
                    <li >
                        <Link to="/main/resume" onClick={toggleCollapse.bind(this)} className={"playground"}>
                            resume
                        </Link>
                    </li>
                    <li >
                        <a href="https://purple-moss-0e5ca5f10.3.azurestaticapps.net/" onClick={toggleCollapse.bind(this)} className={"playground"}>
                            art
                        </a>
                    </li>
                </ul>
            </nav>
    );
}

export default Nav2
