import React, {Component} from 'react';

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
                                        <tr key={todo.id}>
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

export default ListTodoComponent;