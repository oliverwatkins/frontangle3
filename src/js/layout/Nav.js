import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./header.less";

export class Nav extends React.Component {
  constructor(props) {
    super()
    this.props = props;
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {

    let location = useLocation();

    // const {location} = this.props;
    const {collapsed} = this.state;
    const homeClassisActive = location.pathname === "/" ? "active" : "";

    const collapse = collapsed ? "collapse" : "";

    let previousClassisActive = location.pathname.match(/^\/previous/) ? "active" : "";
    let contactClassisActive = location.pathname.match(/^\/contact/) ? "active" : "";

    const headerStyle = {
      position: "sticky",
      width:"100%",
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
                <Link to="/main" onClick={this.toggleCollapse.bind(this)}>Home</Link>
              </li>
              <li>
                <Link to="/main/previous" onClick={this.toggleCollapse.bind(this)} className={previousClassisActive}>
                  Previous Work
                </Link>
              </li>
              <li>
                <Link to="/icharts/" onClick={this.toggleCollapse.bind(this)} >
                  Iceberg Charts
                </Link>
              </li>
              <li >
                <Link to="/main/contact" onClick={this.toggleCollapse.bind(this)} className={contactClassisActive}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Nav
