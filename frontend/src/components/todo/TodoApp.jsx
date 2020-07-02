import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './TodoApp.css';


class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Switch>
                        <Route path='/' exact component={LoginComponent}/>
                        <Route path='/login' component={LoginComponent}/>
                        <Route path='/welcome/:name' component={WelcomeComponent}/>
                        <Route path='/todos' component={ListTodoComponent}/>
                        <Route path='' component={ErrorComponent}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

class ListTodoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos : 
            [
                {id: 1, descrip: 'Learn React'},
                {id: 2, descrip: 'Visit India'},
                {id: 3, descrip: 'Make a Full Stack Application'},
                {id: 4, descrip: 'Become a Full Stack Developer'}
            ]
            
        }
    }
    render() {
        return (
            <span id='TodoApp'>
                <h1>List Todo's</h1>
                <table >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map ( 
                                todo =>
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.descrip}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </span>
        ) 
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <span id='TodoApp' className='Welcome'>
                Welcome {this.props.match.params.name}
                <Link to='/todos'>Go to the Todo List</Link>
            </span>
            
        )
    }
}

function ErrorComponent() {
    return <span id='TodoApp'>An Error occurred. Contact Support at abcd efgh!</span>
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
            this.props.history.push(`/welcome/${this.state.username}`);
            // this.setState({showSuccessMsg: true});
            // this.setState({hasLoginFailed: false});
        } else {
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
            <div id='TodoApp'>
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

export default TodoApp;