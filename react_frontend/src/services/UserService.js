import axios from 'axios'

const TODOLIST_API_BASE_URL = 'https://todolist-react-spring.herokuapp.com/api/'
const TODOLIST_API_LOGIN_URL = 'https://todolist-react-spring.herokuapp.com/auth/'

class UserService {

    getUserById(id) {
        return axios.get(TODOLIST_API_BASE_URL + 'user/' + id)
    }

    addItem(todoItem) {
        return axios.post(TODOLIST_API_BASE_URL + 'addItem/', todoItem)
    }

    checkItem(id) {
        return axios.put(TODOLIST_API_BASE_URL + 'checkItem/' + id)
    }

    editItem(id, updatedTodo) {
        return axios.put(TODOLIST_API_BASE_URL + 'editItem/' + id, updatedTodo, {
            // Sending String, default request is JSON
            headers: { 'Content-Type': 'text/plain' }
        })
    }

    deleteItem(id) {
        return axios.put(TODOLIST_API_BASE_URL + 'deleteItem/' + id)
    }

    loginOrSignup(user) {
        return axios.post(TODOLIST_API_LOGIN_URL + 'loginOrSignup', user)
    }
}

// Can be used as a class with methods
export default new UserService()