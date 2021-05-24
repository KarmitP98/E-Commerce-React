import React, {Component} from 'react';
import './register.scss';
import FormInput from '../form-input/form-input';
import Button from '../button/button';
import {signUpStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
    };
  }
  
  handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    
    this.setState({[name]: value});
  };
  
  handleSubmit = async (e) => {
    e.preventDefault();
  
    const {displayName, email, password} = this.state;
    const {signUpStart} = this.props
  
  
    signUpStart({displayName, email, password})
  };
  
  render() {
    const {displayName, email, password} = this.state;
    return (
      <div className = 'sign-up'>
        <h2 className = 'title'>I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form onSubmit = {this.handleSubmit}>
          <FormInput
            type = 'text'
            name = 'displayName'
            id = 'displayName'
            label = 'Name'
            value = {displayName}
            handleChange = {this.handleChange}
            required
          />
          <FormInput
            type = 'email'
            name = 'email'
            id = 'email'
            label = 'Email'
            value = {email}
            handleChange = {this.handleChange}
            required
          />
          <FormInput
            type = 'password'
            name = 'password'
            id = 'password'
            label = 'Password'
            value = {password}
            handleChange = {this.handleChange}
            required
          />
          <div className = 'buttons'>
            <Button type = 'submit'>Register</Button>
          </div>
        </form>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})
export default connect(null, mapDispatchToProps)(Register)
