import React from "react";

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
                        <a className="navbar-brand" href="/">
                            <img src="/" height="28"/>&nbsp;Skeleton Application
                        </a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/">Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}