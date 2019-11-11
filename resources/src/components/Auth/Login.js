import React from "react";

const Login = (props) => {

    const onEmailChange = (event) => {
        props.setEmailText(event.target.value)
    };

    const onPasswordChange = () => {
        props.setPasswordText(event.target.value)
    };

    return (
        <div className="container">
            <h3>Log In</h3>
            <form>
                <div>
                    <input
                        type="text"
                        name="login"
                        autoComplete="off"
                        placeholder="E-mail"
                        spellCheck={false}
                        value={props.email}
                        onChange={onEmailChange}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={props.password}
                        onChange={onPasswordChange}
                    />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );

};

export default Login;