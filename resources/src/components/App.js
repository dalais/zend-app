import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeContainer from "./containers/HomeContainer";
import LoginContainer from "./containers/LoginContainer";



export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={HomeContainer} />
                    <Route path='/login' component={LoginContainer} />
                </Switch>
            </Router>
        );
    }
}