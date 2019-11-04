import React, {Component} from "react";
import {connect} from "react-redux";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Navbar from "./Navbar";
import LoginContainer from "./containers/LoginContainer";



export default class App extends Component {
    render() {
        return (
            <div>
                <LoginContainer/>
            </div>
        );
    }
}