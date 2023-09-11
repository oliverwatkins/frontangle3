// import React from "react";
// import {Link, useLocation} from "react-router-dom";
// import "./nav.scss"
// import {Typography} from "@mui/material";
// // import './';
// import { useTranslation } from 'react-i18next';
//
// function Nav() {
//
//     const [lang, setLang] = React.useState("en");
//
//     const { t, i18n } = useTranslation();
//
//     const [collapsed, setCollapsed] = React.useState(true);
//
//     let toggleCollapse = () => {
//
//         // setCollapsed(!collapsed)
//         setCollapsed(false)
//     }
//
//     const collapse = collapsed ? "collapse" : "";
//
//     let location = useLocation();
//
//     const homeClassisActive = location.pathname === "/main" ? "active" : "";
//     let previousClassisActive = location.pathname.indexOf("previous") > 0 ? "active" : "";
//     let contactClassisActive = location.pathname.indexOf("contact") > 0 ? "active" : "";
//     const [showDropdown, setShowDropdown] = React.useState(false);
//
//     const toggleDropdown = () => {
//         setShowDropdown(!showDropdown);
//     };
//
//     return (
//
//         <nav className="navbar navbar-default" role="navigation">
//             {/*{lang}*/}
//             <div className="container-fluid">
//                 <ul className="nav navbar-nav">
//
//
//
//
//                     <li className={homeClassisActive}>
//                         <Link to="/main" onClick={toggleCollapse.bind(this)}>
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/main/previous" onClick={toggleCollapse.bind(this)} className={previousClassisActive}>
//                             Previous Work
//                         </Link>
//                     </li>
//                     <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//                         <Link to="/main/services" onClick={toggleCollapse.bind(this)} className={previousClassisActive}>
//                             Services
//                         </Link>
//                         {/*{showDropdown && (*/}
//                             <div className="dropdown-content">
//                                 <a href="/subpage1">Subpage 1</a>
//                                 <a href="/subpage2">Subpage 2</a>
//                                 <a href="/subpage3">Subpage 3</a>
//                             </div>
//                         {/*)}*/}
//                     </li>
//                     {/*<li>*/}
//                     {/*    <Link to="/icharts/" onClick={toggleCollapse.bind(this)}>*/}
//                     {/*        Iceberg Charts*/}
//                     {/*    </Link>*/}
//                     {/*</li>*/}
//                     <li>
//                         <Link to="/main/contact" onClick={toggleCollapse.bind(this)} className={contactClassisActive}>
//                             Contact
//                         </Link>
//
//                     </li>
//
//                     <li >
//                         <Link to="/main/snakething" onClick={toggleCollapse.bind(this)} className={"playground"}>
//                             snakething
//                         </Link>
//                     </li>
//                     <li >
//                         <Link to="/main/resume" onClick={toggleCollapse.bind(this)} className={"playground"}>
//                             resume
//                         </Link>
//                     </li>
//                     <li >
//                         <a href="https://purple-moss-0e5ca5f10.3.azurestaticapps.net/" onClick={toggleCollapse.bind(this)} className={"playground"}>
//                             art
//                         </a>
//                     </li>
//
//
//
//
//
//
//
//                     {/*<li>*/}
//                     {/*    <Link to="/main/test2" onClick={toggleCollapse.bind(this)} className={contactClassisActive}>*/}
//                     {/*        test2*/}
//                     {/*    </Link>*/}
//                     {/*</li>*/}
//
//                     <li className={"language " + (lang === "en" ? "active": "")} onClick={
//                         ()=>{
//                             setLang("en")
//                             i18n.changeLanguage("en");
//                         }
//
//                     }>
//                         <div id="english"/>
//                     </li>
//                     <li className={"language " + (lang === "de" ? "active": "")} onClick={
//                         ()=>{
//                             setLang("de");
//                             i18n.changeLanguage("de");
//                         }
//                     }>
//                         <div id="german"/>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }
//
// export default Nav
