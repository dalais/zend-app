import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";

export default class Admin extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <h3>Admin page</h3>
                </div>
            </div>
        );
    }

}