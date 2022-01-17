import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./header.scss";
import "./style.scss"
import "./nav.scss"

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
                        <Link to="/main" onClick={toggleCollapse.bind(this)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/main/previous" onClick={toggleCollapse.bind(this)} className={previousClassisActive}>
                            Previous Work
                        </Link>
                    </li>
                    <li>
                        <Link to="/icharts/" onClick={toggleCollapse.bind(this)}>
                            Iceberg Charts
                        </Link>
                    </li>
                    <li>
                        <Link to="/main/contact" onClick={toggleCollapse.bind(this)} className={contactClassisActive}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav
