import axios from 'axios';
import {API_URL} from '../../Constants'

class TodoDataService {
    
    retrieveAllTodos(name) {
        return axios.get(`${API_URL}/users/${name}/todos`);
        //console.log('executed service!');
    }

    retrieveTodo(name, id) {
        return axios.get(`${API_URL}/users/${name}/todos/${id}`);
        //console.log('executed service!');
    }

   deleteTodo(name, id) {
        return axios.delete(`${API_URL}/users/${name}/todos/${id}`);
        // console.log('executed service!');
    }

    updateTodo(name, id, todo) {
        return axios.put(`${API_URL}/users/${name}/todos/${id}`, todo);
        // console.log('executed service!');
    }

    createTodo(name, todo) {
        return axios.post(`${API_URL}/users/${name}/todos/`, todo);
        // console.log('executed service!');
    }

}

export default new TodoDataService();