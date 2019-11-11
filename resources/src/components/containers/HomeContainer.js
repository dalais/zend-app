import React from "react";
import {connect} from "react-redux";
import Home from "../pages/Home/Home"

const HomeContainer = () => {
    return <Home/>;
};

const mapStateProps = state => {
    return {}
};
const mapDispatchToProps = dispatch => {
    return {}
};
export default connect(mapStateProps, mapDispatchToProps)(HomeContainer);