import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeContainer from "./containers/HomeContainer";
import AdminContainer from "./containers/AdminContainer";
import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";
import Navbar from "./pages/Home/Navbar";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={HomeContainer}/>
                <Route path="/admin" component={AdminContainer}/>
                <Route path='/login' component={LoginContainer}/>
                <Route path="/signup" component={SignupContainer}/>
            </Switch>
        </Router>
    );
};

export default App;