import React, { Component } from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from './../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  HandleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.HandleChange}
            required
            label='email'
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.HandleChange}
            required
            label='password'
          />
          <div className="buttons">
            <CustomButton name='submit' type='submit'> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn
