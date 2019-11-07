import React from "react";
import { connect } from "react-redux";
import Admin from "../pages/Admin/Admin";

class AdminContainer extends React.Component {
    render() {
        return <Admin/>;
    }
}

export default connect()(AdminContainer);