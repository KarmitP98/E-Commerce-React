import React, {Component} from 'react';
import './register.scss';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input';
import Button from '../button/button';

export default class Register extends Component {
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

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
            });
        } catch (e) {
            console.log(e.message);
        }
    };

    render() {
        const {displayName, email, password} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        id="displayName"
                        label="Name"
                        value={displayName}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        id="email"
                        label="Email"
                        value={email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        id="password"
                        label="Password"
                        value={password}
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <Button type="submit">Register</Button>
                    </div>
                </form>
            </div>
        );
    }
}
