import React from "react";
import { connect } from "react-redux";

import { setEmailText, setPasswordText } from "../../store/auth/login/actions";
import Login from "../Auth/Login";

class LoginContainer extends React.Component {
    render() {
        return <Login
            email={this.props.email}
            password={this.props.password}
            setEmailText={this.props.setEmailText}
            setPasswordText={this.props.setPasswordText}/>;
    }
}
const mapStateProps = state => {
    return {
        email: state.login.email,
        password: state.login.password
    };
};
const mapDispatchToProps = {
    setEmailText,
    setPasswordText
};
export default connect(mapStateProps, mapDispatchToProps)(LoginContainer);