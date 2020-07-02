import React, { Component } from 'react';
import { render } from '@testing-library/react';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                My Todo Application
            </div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'Enter User Name...',
            pswd: '**********',
            hasLoginFailed: false,
            showSuccessMsg: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.logonClick = this.logonClick.bind(this);
    }

    logonClick() {
        if(this.state.username==='caylemh' && this.state.pswd==='dummy') {
            console.log('Successful');
            this.setState({showSuccessMsg: true});
            this.setState({hasLoginFailed: false});
        } else {
            console.log("Failed!!!")
            this.setState({showSuccessMsg: false});
            this.setState({hasLoginFailed: true});
        }
        
    }

    handleChange(event) {
        console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {this.state.hasLoginFailed && <span>*** Invalid Credentials ***</span>}
                {/*<ShowSuccessMsg showSuccessMsg={this.state.showSuccessMsg}/>*/}
                {this.state.showSuccessMsg && <span>*** Login Successful ***</span>}
                User Name: <input type='text' name='username' placeholder={this.state.username} onChange={this.handleChange}/>
                Password: <input type='password' name='pswd' placeholder={this.state.pswd} onChange={this.handleChange}/>
                <button onClick={this.logonClick}>Login</button>
            </div>
            )
    }
}

// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed) {
//         return <span>*** Invalid Credentials ***</span>
//     }

//     return null;
// }

// function ShowSuccessMsg(props) {
//     if(props.showSuccessMsg) {
//         return <span>*** Login Successful ***</span>
//     }
//     return null;
// }

export default LoginComponent;