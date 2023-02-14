import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./nav.scss"
import {Typography} from "@mui/material";
// import './';
import { useTranslation } from 'react-i18next';

function Nav() {

    const [lang, setLang] = React.useState("en");

    const { t, i18n } = useTranslation();

    const [collapsed, setCollapsed] = React.useState(true);

    let toggleCollapse = () => {
        setCollapsed(!collapsed)
    }

    const collapse = collapsed ? "collapse" : "";

    let location = useLocation();

    const homeClassisActive = location.pathname === "/main" ? "active" : "";
    let previousClassisActive = location.pathname.indexOf("previous") > 0 ? "active" : "";
    let contactClassisActive = location.pathname.indexOf("contact") > 0 ? "active" : "";

    return (

        <nav className="navbar navbar-default" role="navigation">
            {/*{lang}*/}
            <div className="container-fluid">
                <ul className="nav navbar-nav">
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
                    {/*<li>*/}
                    {/*    <Link to="/icharts/" onClick={toggleCollapse.bind(this)}>*/}
                    {/*        Iceberg Charts*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link to="/main/contact" onClick={toggleCollapse.bind(this)} className={contactClassisActive}>
                            Contact
                        </Link>

                    </li>

                    {/*<li>*/}
                    {/*<Link to="/main/test" onClick={toggleCollapse.bind(this)} className={contactClassisActive}>*/}
                    {/*    test*/}
                    {/*</Link>*/}
                    {/*</li>*/}

                    {/*<li>*/}
                    {/*    <Link to="/main/test2" onClick={toggleCollapse.bind(this)} className={contactClassisActive}>*/}
                    {/*        test2*/}
                    {/*    </Link>*/}
                    {/*</li>*/}

                    <li className={"language " + (lang === "en" ? "active": "")} onClick={
                        ()=>{
                            setLang("en")
                            i18n.changeLanguage("en");
                        }

                    }>
                        <div id="english"/>
                    </li>
                    <li className={"language " + (lang === "de" ? "active": "")} onClick={
                        ()=>{
                            setLang("de");
                            i18n.changeLanguage("de");
                        }
                    }>
                        <div id="german"/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav
