import React from "react"

import TodoItem from "./TodoItem"

import UserService from "../services/UserService"

const TodoList = ({ data, setData, setInput, setEditInput }) => {

	const handleCheck = id => {

		if (localStorage.getItem("userId") == -1) {
			const todos = JSON.parse(localStorage.getItem("todos"))
			const todoList = todos.map(currTodo => {
				if (currTodo.id === id) {
					currTodo.completed = !currTodo.completed
				}
				return currTodo
			})
			setData(todoList)
		} else {
			data.forEach(currItem => {
				if (currItem.id === id) {
					UserService.checkItem(id).then(res => {
						setData(res.data.todos)
					})
				}
			})
		}
	}

	const handleDelete = id => {

		if (localStorage.getItem("userId") == -1) {
			const todos = JSON.parse(localStorage.getItem("todos"))
			const todoList = todos.filter(todoItem => todoItem.id !== id)
			setData(todoList)
		} else {
			data.forEach(currItem => {
				if (currItem.id === id) {
					UserService.deleteItem(id).then(res => {
						setData(res.data.todos)
					})
				}
			})
		}
	}

	const handleEdit = id => {
		data.forEach(currItem => {
			if (currItem.id === id) {
				setInput(currItem.todo)
				setEditInput([true, id])
			}
		})
	}

	// map() returns an array, needs to be equaled to something
	// Recommended to have 'key' prop with unique identifier for lists
	const todoItemList = data.map(currItem =>
		<TodoItem
			key={currItem.id}
			todoItem={currItem}
			handleCheck={handleCheck}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)

	return (
		<div className="todo-list" style={{ visibility: data.length > 0 ? "visible" : "hidden" }} >
			{/* React renders array/list of components properly */}
			{todoItemList}
			{data.length > 0 ? null : <p className="empty-list">List is empty</p>}
		</div>
	)
}

export default TodoList