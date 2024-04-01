import React from "react";
import {useLocation} from "react-router-dom";
import "./nav.scss"
import { HashLink as Link } from 'react-router-hash-link';
import useWindowDimensions from "../useWindowDimension";


function Nav(props) {
    let location = useLocation();
    const homeClassisActive = location.pathname === "/main" ? "active" : "";
    let previousClassisActive = location.pathname.indexOf("previous") > 0 ? "active" : "";
    let contactClassisActive = location.pathname.indexOf("contact") > 0 ? "active" : "";

    const {  width } = useWindowDimensions();
    console.info("width " + width)
    const [hamburgerActive, setHamburgerActive] = React.useState(false);
    const [showHamburgerMenu, setShowHamburgerMenu] = React.useState(false);

    return (
        <>
            <nav role="navigation">
                <StandardMenu
                    i18n={props.i18n}
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


function StandardMenu(props) {
    const [lang, setLang] = React.useState("en");

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

            <CommonMenuItems navigationElement={true} type={"standard"}
                       homeClassisActive = {props.homeClassisActive}
                       previousClassisActive = {props.previousClassisActive}
                       contactClassisActive = {props.contactClassisActive}
            />
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


            <li className={"navigation-element language " + (lang === "en" ? "active": "")} onClick={
                ()=>{
                    setLang("en")
                    props.i18n.changeLanguage("en");
                }

            }>
                <div id="english"/>
            </li>
            <li className={"navigation-element language " + (lang === "de" ? "active": "")} onClick={
                ()=>{
                    setLang("de");
                    props.i18n.changeLanguage("de");
                    // window.location.reload();
                }
            }>
                <div id="german"/>
            </li>
            {/*<li className={"navigation-element art "}>*/}
            {/*    <a href="https://oliver-watkins.art/" className={""}>*/}
            {/*        art*/}
            {/*    </a>*/}
            {/*</li>*/}
        </ul>
    )
}

function HamburgerMenu(props) {
    return (
        <ul className={"hamburger-menu "  + props.homeClassisActive}>
            <CommonMenuItems navigationElement={false} type={"hamburger"}
                       homeClassisActive = {props.homeClassisActive}
                       previousClassisActive = {props.previousClassisActive}
                       contactClassisActive = {props.contactClassisActive}
            />
        </ul>
    )
}


//main menu items
function CommonMenuItems(props) {

    let ne = props.navigationElement ? "navigation-element" : " "

    return (
        <>
            <li className={ne + " " + props.type + "-menu-item " + props.homeClassisActive}>
                <Link to="/main"  className={props.homeClassisActive}>
                    Home
                </Link>
            </li>
            <li className={ne + " " + props.type + "-menu-item " + props.previousClassisActive}>
                <Link to="/main/previous" className={props.previousClassisActive}>
                    Current Projects
                </Link>
            </li>
            <li className={ne + " " + props.type + "-menu-item "}>


                <Link to="/main/services#frontend" >
                    Services
                </Link>


                {/*<a className="dropdown" href="/main/services#frontend">Services</a>*/}
                <SubMenu type={props.type}/>
            </li>
            <li className={ne + " " + props.type + "-menu-item " + props.contactClassisActive}>
                <Link to="/main/contact" className={props.contactClassisActive}>
                    Contact
                </Link>
            </li>

            <li className={ne + " " + props.type + "-menu-item "}>
                {/*<Link to="https://oliver-watkins.art/" className={props.contactClassisActive}>*/}
                {/*    Art*/}
                {/*</Link>*/}

                <a href="https://oliver-watkins.art/" className={""}>
                    ..art
                    </a>
            </li>


            {/*<li className={"navigation-element art "}>*/}
            {/*    <a href="https://oliver-watkins.art/" className={""}>*/}
            {/*        art*/}
            {/*    </a>*/}
            {/*</li>*/}

        </>
    )

}

function SubMenu(props) {
    return (
        <ul className={props.type + "-sub-menu"}>
            <li className={props.type + "-sub-menu-item"}>
                <Link to="/main/services#frontend" >
                    Front End Developement
                </Link>
            </li>
            <li className={props.type + "-sub-menu-item"}>
                <Link to="/main/services#systems" >
                    Systems Analysis and Databases
                </Link>
            </li>
            <li className={props.type + "-sub-menu-item"}>
                <Link to="/main/services#coaching" >
                    Coaching
                </Link>
            </li>
        </ul>
    )
}

export default Nav
