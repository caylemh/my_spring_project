import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService';

export default class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    }

    render() {
        return (
            <div className='Welcome'>
                <h1>Welcome</h1>
                <div className='container'>
                    Welcome {this.props.match.params.name}.
                    You can manage your todos
                    <NavLink activeStyle={{borderBottom: '2px solid red'}} to='/todos'> here</NavLink>.
                </div>
                <div className='container'>
                    Click here to get a customized welcome message.
                    <button className='btn btn-success' onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button>
                </div>
            </div>
            
        )
    }

    retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldService()
        .then(response => console.log('response'));
        //.catch()
    }
}