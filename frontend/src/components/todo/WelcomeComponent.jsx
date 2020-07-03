import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class WelcomeComponent extends Component {
    render() {
        return (
            <div className='Welcome'>
                <h1>Welcome</h1>
                <div className='container'>
                    Welcome {this.props.match.params.name}
                    <NavLink activeStyle={{borderBottom: '2px solid red'}} to='/todos'>Go to the Todo List</NavLink>
                </div>
            </div>
            
        )
    }
}