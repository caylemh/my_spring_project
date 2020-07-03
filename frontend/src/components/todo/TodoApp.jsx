import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class TodoApp extends Component {
    render() {
        return (
            <div>
                <Router>
                    <HeaderComponent/>
                        <Switch>
                            <Route path='/' exact component={LoginComponent}/>
                            <Route path='/login' component={LoginComponent}/>
                            <Route path='/welcome/:name' component={WelcomeComponent}/>
                            <Route path='/todos' component={ListTodoComponent}/>
                            <Route path='/logout' component={LogoutComponent}/>
                            <Route path='' component={ErrorComponent}/>
                        </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        return(
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div><a href='http://www.example.com' target='_blank' className='navbar-brand'>Some Page</a></div>
                    <ul className='navbar-nav'>
                        <li>
                            <Link to='/welcome/caylemh' className='nav-link'>Home</Link>
                        </li>
                        <li>
                            <Link to='/todos' className='nav-link'>Todo List</Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav navbar-collapse justify-content-end'>
                        <li>
                            <Link to='/login' className='nav-link'>Login</Link>
                        </li>
                        <li>
                            <Link to='/logout' className='nav-link'>Logout</Link> 
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return(
            <footer className='footer'>
                <div className='text-muted'>All Rights Reserved 2020 @Caylem Harris</div>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return(
            <div>
                <h1>You are logged out!!!</h1>
                <div className='container'>
                    Thank you for using our application. ;)
                </div>
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
                {id: 1, descrip: 'Learn React', done: false, targetDate: new Date()},
                {id: 2, descrip: 'Visit India', done: false, targetDate: new Date()},
                {id: 3, descrip: 'Make a Full Stack Application', done: false, targetDate: new Date()},
                {id: 4, descrip: 'Become a Full Stack Developer', done: false, targetDate: new Date()}
            ]
            
        }
    }
    render() {
        return (
            <div>
                <h1>List Todo's</h1>
                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map ( 
                                    todo =>
                                        <tr>
                                            <td>{todo.descrip}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td>{todo.done.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        ) 
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <div className='Welcome'>
                <h1>Welcome</h1>
                <div className='container'>
                    Welcome {this.props.match.params.name}
                    <Link to='/todos'>Go to the Todo List</Link>
                </div>
            </div>
            
        )
    }
}

function ErrorComponent() {
    return <div>An Error occurred. Contact Support at abcd efgh!</div>
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
            <div>
                <h1>Login</h1>
                <div className='container'>
                    {this.state.hasLoginFailed && <div className='alert alert-warning'>*** Invalid Credentials ***</div>}
                    {this.state.showSuccessMsg && <div>*** Login Successful ***</div>}
                    User Name: <input type='text' name='username' placeholder={this.state.username} onChange={this.handleChange}/>
                    Password: <input type='password' name='pswd' placeholder={this.state.pswd} onChange={this.handleChange}/>
                    <button className='btn btn-success' onClick={this.logonClick}>Login</button>
                </div>
            </div>
            )
    }
}

// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed) {
//         return <div>*** Invalid Credentials ***</div>
//     }

//     return null;
// }

// function ShowSuccessMsg(props) {
//     if(props.showSuccessMsg) {
//         return <div>*** Login Successful ***</div>
//     }
//     return null;
// }

export default TodoApp;