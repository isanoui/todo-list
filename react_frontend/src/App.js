import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './style.css';

import Header from "./components/Header"
import TodoList from "./components/TodoList"
import AddTodoItem from "./components/AddTodoItem"
import UserService from "./services/UserService"
import LoginForm from "./components/LoginForm";


const App = () => {
	// Lifting the state up
	const [userId, setUserId] = useState(localStorage.getItem("userId") || -1)

	const [input, setInput] = useState('')

	// [should handleSubmission edit? , TodoItem id]
	const [editInput, setEditInput] = useState([false, -1])

	// List of Todo Items
	const [data, setData] = useState([])

	// Load todo items of user on load or refresh and when user changes
	useEffect(() => {

		// User not logged in, use localStorage
		if (userId == -1) {
			// Initialize localStorage
			if (localStorage.getItem("todos") == null) {
				localStorage.setItem("todos", JSON.stringify(data))
				localStorage.setItem("userId", userId)
			}
			setData(JSON.parse(localStorage.getItem("todos")))
		} else {
			// Load todo items of logged in user
			UserService.getUserById(localStorage.getItem("userId")).then(res => {
				if (res.data !== null) {
					setData(res.data.todos)
				}
			})
		}
	}, [userId])

	// Load todo items of user NOT logged in using localStorage
	// Order of this useEffect matters, needs to be called second 
	useEffect(() => {
		if (userId == -1) {
			localStorage.setItem("todos", JSON.stringify(data))
		}
	})


	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact>
						<Header setUserId={setUserId} />
						<AddTodoItem
							input={input}
							setInput={setInput}
							editInput={editInput}
							setEditInput={setEditInput}
							data={data}
							setData={setData}
						/>
						<TodoList
							data={data}
							setData={setData}
							setInput={setInput}
							setEditInput={setEditInput}
						/>
					</Route>
					<Route path="/login">
						<LoginForm setUserId={setUserId} />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App