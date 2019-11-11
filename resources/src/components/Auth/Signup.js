import React from "react";

const Signup = (props) => {
    const state = () => {
        return {
            email: "",
            password: "",
            repeatPassword: ""
        }
    };

    const handleChange = (event) => {
    };

    const handleSubmit = (event) => {
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Sign Up For An Account</h1>

                <label>E-mail</label>
                <input
                    name='email'
                    placeholder='Email'
                    value={state.email}
                    onChange={handleChange}
                />
                <br/>

                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={state.password}
                    onChange={handleChange}
                /><br/>
                <label>Repeat password</label>
                <input
                    type='password'
                    name='confirm_password'
                    placeholder='Confirm password'
                    value={state.repeatPassword}
                    onChange={handleChange}
                /><br/>

                <input type='submit'/>
            </form>
        </div>
    );

};

export default Signup;