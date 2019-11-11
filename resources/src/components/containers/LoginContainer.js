import React from "react";
import {connect} from "react-redux";

import {setEmailText, setPasswordText} from "../../store/auth/login/actions";
import Login from "../Auth/Login";

const LoginContainer = (props) => {
    return <Login
        email={props.email}
        password={props.password}
        setEmailText={props.setEmailText}
        setPasswordText={props.setPasswordText}
    >
    </Login>;
};

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