import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./header.scss";
import "./style.scss"
import "./nav.scss"
import {Typography} from "@mui/material";

function Nav(props) {

    const [collapsed, setCollapsed] = React.useState(true);

    let toggleCollapse = () => {
        setCollapsed(!collapsed)
        //
        // const collapsed = !this.state.collapsed;
        // this.setState({collapsed});
    }

    const collapse = collapsed ? "collapse" : "";

    let location = useLocation();

    const homeClassisActive = location.pathname === "/main" ? "active" : "";
    let previousClassisActive = location.pathname.indexOf("previous") > 0 ? "active" : "";
    let contactClassisActive = location.pathname.indexOf("contact") > 0 ? "active" : "";

    return (

        <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li className={homeClassisActive}>
                        <Link to="/main" onClick={toggleCollapse.bind(this)}>
                            <Typography variant="body1">Home</Typography>
                        </Link>
                    </li>
                    <li>
                        <Link to="/main/previous" onClick={toggleCollapse.bind(this)} className={previousClassisActive}>
                            <Typography variant="body1">Previous Work</Typography>
                        </Link>
                    </li>
                    <li>
                        <Link to="/icharts/" onClick={toggleCollapse.bind(this)}>
                            <Typography variant="body1">Iceberg Charts</Typography>
                        </Link>
                    </li>
                    <li>
                        <Link to="/main/contact" onClick={toggleCollapse.bind(this)} className={contactClassisActive}>
                            <Typography variant="body1">Contact</Typography>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav
