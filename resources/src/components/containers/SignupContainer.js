import React from "react";
import { connect } from "react-redux";
import Signup from "../Auth/Signup";
import { signupUser } from "../../store/auth/signup/actions";
class SignupContainer extends React.Component {
    render() {
        return <Signup
            email={this.props.email}
            password={this.props.password}
            repeatPassword={this.props.repeatPassword}
            userPostFetch={this.props.userPostFetch}
        />
    }
}

const mapStateProps = state => {
    return {
        email: state.signup.email,
        password: state.signup.password,
        repeatPassword: state.signup.repeatPassword
    };
};

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch({ type: 'SIGNUP_USER', payload: userInfo}),
    signupUser
});

export default connect(mapStateProps, mapDispatchToProps)(SignupContainer);