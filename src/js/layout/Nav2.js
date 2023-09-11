import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./nav2.scss"
import {Typography} from "@mui/material";
// import './';
import { useTranslation } from 'react-i18next';

function Nav2() {

    const [lang, setLang] = React.useState("en");

    const { t, i18n } = useTranslation();


    const [hamburgerActive, setHamburgerActive] = React.useState(false);
    const [showHamburgerMenu, setShowHamburgerMenu] = React.useState(false);

    let location = useLocation();

    const [showDropdown, setShowDropdown] = React.useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <>
            <nav role="navigation">
                <StandardMenu hamburgerActive={hamburgerActive} setHamburgerActive={setHamburgerActive} setShowHamburgerMenu={setShowHamburgerMenu}/>
                {showHamburgerMenu &&

                    <ul className={"hamburger-menu"}>

                        <li>sdafasfasd</li>
                        <li>sdfasd</li>
                        <li>sdfasd</li>
                        <li>sdfasd</li>
                        <li>sdfasd</li>
                    </ul>
                }
            </nav>
        </>
    );
}



function HamburgerMenu(props) {



    return (
        <ul className={"hamburger-menu"}>

            <li>sdafasfasd</li>
            <li>sdfasd</li>
            <li>sdfasd</li>
            <li>sdfasd</li>
            <li>sdfasd</li>
        </ul>
    )
}






function StandardMenu(props) {

    let location = useLocation();

    const [lang, setLang] = React.useState("en");
    const { t, i18n } = useTranslation();
    const [collapsed, setCollapsed] = React.useState(true);

    let toggleCollapse = () => {

        // setCollapsed(!collapsed)
        setCollapsed(false)
    }
    const collapse = collapsed ? "collapse" : "";
    const homeClassisActive = location.pathname === "/main" ? "active" : "";
    let previousClassisActive = location.pathname.indexOf("previous") > 0 ? "active" : "";
    let contactClassisActive = location.pathname.indexOf("contact") > 0 ? "active" : "";
    return (

        <ul className={"standard-menu"}>
            <li className={"navigation-element hamburger-icon-item"  + (props.hamburgerActive === true ? "active": "")} onClick={()=> {
                props.setHamburgerActive(!props.hamburgerActive);
                if (!props.hamburgerActive) {
                    props.setShowHamburgerMenu(true)
                }else {
                    props.setShowHamburgerMenu(false)
                }
            }

            }>
                {/*<a href="javascript:void(0);" className="icon" onClick="myFunction()">*/}
                {/*    <i className="fa fa-bars"></i>*/}

                <div id="hamburger-icon"/>
                {/*</a>*/}
            </li>

            <li className={"navigation-element standard-menu-item " + homeClassisActive}>
                <Link to="/main" onClick={toggleCollapse.bind(this)}>
                    Home
                </Link>
            </li>
            <li className={"navigation-element standard-menu-item "}>
                <Link to="/main/previous" onClick={toggleCollapse.bind(this)} className={previousClassisActive}>
                    Previous Work
                </Link>
            </li>
            <li className={"navigation-element standard-menu-item "}><a className="dropdown" href="#">Services</a>
                <ul className={"sub-menu"}>
                    <li><a href="#">Sub-menu Item 1</a></li>
                    <li><a href="#">Sub-menu Item 2</a></li>
                    <li><a href="#">Sub-menu Item 3</a></li>
                </ul>
            </li>
            <li className={"navigation-element standard-menu-item "}>
                <Link to="/main/contact" onClick={toggleCollapse.bind(this)} className={contactClassisActive}>
                    Contact
                </Link>

            </li>

            <li  className={"navigation-element standard-menu-item "}>
                <Link to="/main/snakething" onClick={toggleCollapse.bind(this)} className={"playground"}>
                    sn
                </Link>
            </li>
            <li  className={"navigation-element standard-menu-item "}>
                <Link to="/main/resume" onClick={toggleCollapse.bind(this)} className={"playground"}>
                    re
                </Link>
            </li>
            <li  className={"navigation-element standard-menu-item "}>
                <a href="https://purple-moss-0e5ca5f10.3.azurestaticapps.net/" onClick={toggleCollapse.bind(this)} className={"playground"}>
                    art
                </a>
            </li>


            <li className={"navigation-element language " + (lang === "en" ? "active": "")} onClick={
                ()=>{
                    setLang("en")
                    i18n.changeLanguage("en");
                }

            }>
                <div id="english"/>
            </li>
            <li className={"navigation-element language " + (lang === "de" ? "active": "")} onClick={
                ()=>{
                    setLang("de");
                    i18n.changeLanguage("de");
                }
            }>
                <div id="german"/>
            </li>
        </ul>
    )
}

export default Nav2
