import React from "react";

export default class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state() {
        return {
            email: "",
            password: "",
            repeatPassword: ""
        }
    }

    handleChange(event) {
    }

    handleSubmit(event) {
    }

    render() {
        return <div className="container">
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up For An Account</h1>

                <label>E-mail</label>
                <input
                    name='email'
                    placeholder='Email'
                    value={this.state.email}
                    onChange={this.handleChange}
                /><br/>

                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handleChange}
                /><br/>
                <label>Repeat password</label>
                <input
                    type='password'
                    name='confirm_password'
                    placeholder='Confirm password'
                    value={this.state.repeatPassword}
                    onChange={this.handleChange}
                /><br/>

                <input type='submit'/>
            </form>
            </div>
    }

}