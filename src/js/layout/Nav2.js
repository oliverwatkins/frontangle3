import React from "react";
import {useLocation} from "react-router-dom";
import "./nav2.scss"
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';


function Nav2() {
    let location = useLocation();
    const homeClassisActive = location.pathname === "/main" ? "active" : "";
    let previousClassisActive = location.pathname.indexOf("previous") > 0 ? "active" : "";
    let contactClassisActive = location.pathname.indexOf("contact") > 0 ? "active" : "";

    const [lang, setLang] = React.useState("en");

    const { t, i18n } = useTranslation();


    const [hamburgerActive, setHamburgerActive] = React.useState(false);
    const [showHamburgerMenu, setShowHamburgerMenu] = React.useState(false);

    return (
        <>
            <nav role="navigation">
                <StandardMenu

                    hamburgerActive={hamburgerActive}
                    setHamburgerActive={setHamburgerActive}
                    setShowHamburgerMenu={setShowHamburgerMenu}

                    homeClassisActive = {homeClassisActive}
                    previousClassisActive = {previousClassisActive}
                    contactClassisActive = {contactClassisActive}

                />
                {showHamburgerMenu &&

                    <HamburgerMenu
                        homeClassisActive = {homeClassisActive}
                        previousClassisActive = {previousClassisActive}
                        contactClassisActive = {contactClassisActive}


                    />
                }
            </nav>
        </>
    );
}

function HamburgerMenu(props) {
    return (
        <ul className={"hamburger-menu"  + props.homeClassisActive}>
            <li className={"standard-menu-item " + props.homeClassisActive}>
                <Link to="/main" >
                    Home
                </Link>
            </li>
            <li className={"hamburger-menu-item " + props.previousClassisActive }>
                <Link to="/main/previous" className={props.previousClassisActive}>
                    Previous Work
                </Link>
            </li>
            <li className={"hamburger-menu-item "}><a className="dropdown" href="#">Services</a>
                <ul className={"hamburger-sub-menu"}>
                    <li className={"hamburger-sub-menu-item "}>
                        <Link to="/main/services#frontend" >
                            Front End Developement
                        </Link>
                    </li>
                    <li className={"hamburger-sub-menu-item "}>
                        <Link to="/main/services" >
                            Database
                        </Link>
                    </li>
                    <li className={"hamburger-sub-menu-item "}><a href="#">System Analysis</a></li>
                </ul>
            </li>
            <li className={"hamburger-menu-item " + props.contactClassisActive}>
                <Link to="/main/contact"
                      className={props.contactClassisActive}>
                    Contact
                </Link>
            </li>
        </ul>
    )
}


function StandardMenu(props) {

    const [lang, setLang] = React.useState("en");
    const { t, i18n } = useTranslation();

    return (

        <ul className={"standard-menu"}>
            <li className={"navigation-element hamburger-icon-item "  + (props.hamburgerActive === true ? "active": "")} onClick={()=> {
                props.setHamburgerActive(!props.hamburgerActive);
                if (!props.hamburgerActive) {
                    props.setShowHamburgerMenu(true)
                }else {
                    props.setShowHamburgerMenu(false)
                }
            }

            }>
                <div id="hamburger-icon"/>
            </li>

            <li className={"navigation-element standard-menu-item " + props.homeClassisActive}>
                <Link to="/main">
                    Home
                </Link>
            </li>
            <li className={"navigation-element standard-menu-item "}>
                <Link to="/main/previous" className={props.previousClassisActive}>
                    Previous Work
                </Link>
            </li>
            <li className={"navigation-element standard-menu-item "}><a className="dropdown" href="#">Services</a>
                <ul className={"sub-menu"}>
                    <li>
                        <Link to="/main/services#frontend" >
                            Front End Developement
                        </Link>
                    </li>
                    <li>
                        <Link to="/main/services" >
                            Database
                        </Link>
                    </li>
                    <li><a href="#">System Analysis</a></li>
                </ul>
            </li>
            <li className={"navigation-element standard-menu-item "}>
                <Link to="/main/contact" className={props.contactClassisActive}>
                    Contact
                </Link>
            </li>

            <li  className={"navigation-element standard-menu-item "}>
                <Link to="/main/snakething" className={"playground"}>
                    sn
                </Link>
            </li>
            <li  className={"navigation-element standard-menu-item "}>
                <Link to="/main/resume" className={"playground"}>
                    re
                </Link>
            </li>
            <li  className={"navigation-element standard-menu-item "}>
                <a href="https://purple-moss-0e5ca5f10.3.azurestaticapps.net/" className={"playground"}>
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
