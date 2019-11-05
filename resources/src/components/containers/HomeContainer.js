import React from "react";
import { connect } from "react-redux";
import Home from "../Home"

class HomeContainer extends React.Component {
    render() {
        return <Home/>;
    }
}

const mapStateProps = state => {
    return {}
};
const mapDispatchToProps = dispatch => {
    return {}
};
export default connect(mapStateProps, mapDispatchToProps)(HomeContainer);