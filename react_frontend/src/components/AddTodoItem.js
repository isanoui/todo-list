import React from "react"
import UserService from "../services/UserService"

// Material-UI
import IconButton from '@material-ui/core/IconButton'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from "@material-ui/core/styles"

// Styling for the Material-UI input, this is the best way currently
const useStyles = makeStyles({
	root: {
		"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
			borderColor: "#ffdb4d"
		},
		"& .MuiOutlinedInput-input": {
			color: "#ffdb4d"
		},
		"& .MuiInputLabel-outlined": {
			color: "#ffdb4d"
		},
		"& .MuiIconButton-label": {
			color: "#ffdb4d"
		}
	}
});

const AddTodoItem = ({ input, setInput, editInput, setEditInput, data, setData }) => {
	// for the Material-UI input styling
	const classes = useStyles();

	const inputTextHandler = e => {
		setInput(e.target.value)
	}

	const submitTodoHandler = e => {
		// To not refresh the page on submit
		e.preventDefault()

		// No white space only inputs
		if (input.trim() !== '') {

			if (editInput[0]) {
				// edit todo item locally, user not logged in
				if (localStorage.getItem("userId") == -1) {
					const todos = JSON.parse(localStorage.getItem("todos"))
					const todoList = todos.map(currTodo => {
						if (currTodo.id === editInput[1]) {
							currTodo.todo = input
						}
						return currTodo
					})
					setData(todoList)
				} else {
					// edit todo item in database
					UserService.editItem(editInput[1], input).then(res => {
						setData(res.data.todos)
					})
				}
			} else {
				// store todo item locally, user not logged in
				if (localStorage.getItem("userId") == -1) {
					setData([...data, { id: Math.floor(Math.random() * Math.floor(999)), todo: input, completed: false }])
				} else {
					// store new todo in database
					let newTodo = {
						todo: input,
						completed: false,
						user: {
							id: localStorage.getItem("userId")
						}
					}

					UserService.addItem(newTodo).then(res => {
						setData(res.data.todos)
					})
				}

			}
			// Clear input field
			setInput("")
			setEditInput([false, -1])
		}
	}

	return (
		<form className="addTodoItemContainer" onSubmit={submitTodoHandler} >
			<TextField
				value={input}
				onChange={inputTextHandler}
				id="standard-basic"
				label="Add Item"
				className={classes.root}
				variant="outlined"
			/>
			<IconButton
				onClick={submitTodoHandler}
				color="primary"
				aria-label="add todo item"
				component="span"
				className={classes.root}
			>
				<AddCircleOutlineIcon fontSize="large" />
			</IconButton>
		</form>
	)
}

export default AddTodoItem