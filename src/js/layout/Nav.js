import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./header.scss";
import "./style.scss"
import "./nav.css"


function Nav(props) {

    const [collapsed, setCollapsed] = React.useState(true);

    let toggleCollapse = () => {
        setCollapsed(!collapsed)
        //
        // const collapsed = !this.state.collapsed;
        // this.setState({collapsed});
    }

    let location = useLocation();

    // const {location} = this.props;
    // const {collapsed} = this.state;
    const homeClassisActive = location.pathname === "/" ? "active" : "";

    const collapse = collapsed ? "collapse" : "";

    let previousClassisActive = location.pathname.match(/^\/previous/) ? "active" : "";
    let contactClassisActive = location.pathname.match(/^\/contact/) ? "active" : "";

    const headerStyle = {
        position: "sticky",
        width: "100%",
        color: "pink",
        backgroundColor: "white",
        top: 0,
        zIndex: 99
    };

    return (

        <nav style={headerStyle} className="navbar navbar-default" role="navigation">
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
