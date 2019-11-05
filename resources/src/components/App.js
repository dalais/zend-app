import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeContainer from "./containers/HomeContainer";
import LoginContainer from "./containers/LoginContainer";
import Navbar from "./Navbar";



export default class App extends Component {
    render() {
        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={HomeContainer} />
                    <Route path='/login' component={LoginContainer} />
                </Switch>
            </Router>
        );
    }
}