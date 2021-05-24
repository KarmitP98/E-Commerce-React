import React, {Component} from 'react';
import Button from '../button/button';
import FormInput from '../form-input/form-input';
import './signin.scss';
import {connect} from "react-redux";
import {emailSignInStart, googleSignInStart} from "../../redux/user/user.actions";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  
  handleSubmit = async e => {
    e.preventDefault();
    
    const {emailSignInStart} = this.props
    const {email, password} = this.state
    
    emailSignInStart(email, password)
  };
  
  handleChange = (e) => {
    const {value, name} = e.target;
    
    this.setState({[name]: value});
  };
  
  render() {
    const {googleSignInStart} = this.props
    return (
      <div className = 'sign-in'>
        <h2 className = 'title'>I already have an account</h2>
        <span>Sign in with your email and password</span>
        
        <form onSubmit = {this.handleSubmit}>
          <FormInput
            type = 'email'
            name = 'email'
            id = 'email'
            label = 'Email'
            value = {this.state.email}
            handleChange = {this.handleChange}
            required
          />
          <FormInput
            type = 'password'
            name = 'password'
            id = 'password'
            label = 'Password'
            value = {this.state.password}
            handleChange = {this.handleChange}
            required
          />
          <div className = 'buttons'>
            <Button type = 'submit'>
              Login
            </Button>
            <Button
              type = {'button'}
              onClick = {googleSignInStart}
              isGoogle>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);
