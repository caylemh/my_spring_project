import React, {Component} from 'react';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';

class ListTodoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos : 
            [
                // {id: 1, desc: 'Learn React', done: false, targetDate: new Date()},
                // {id: 2, desc: 'Visit India', done: false, targetDate: new Date()},
                // {id: 3, desc: 'Make a Full Stack Application', done: false, targetDate: new Date()},
                // {id: 4, desc: 'Become a Full Stack Developer', done: false, targetDate: new Date()}
            ]
            
        }
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUser();
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                //console.log(response);
                this.setState({ todos: response.data });
            }
        )
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
                                        <tr key={todo.id}>
                                            <td>{todo.desc}</td>
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

export default ListTodoComponent;