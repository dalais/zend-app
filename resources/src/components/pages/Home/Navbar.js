import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">
                            <img src="img/zf-logo-mark.svg" height="28"
                                 alt="Zend Framework"/>&nbsp;Skeleton App
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className=""><Link to="/">Home</Link></li>
                            <li className=""><Link to="/admin">AdminPanel</Link></li>
                            <li className=""><Link to="/login">Log In</Link></li>
                            <li className=""><Link to="/signup">Sign Un</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}