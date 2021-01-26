import React from "react"

import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// Material-UI green checkbox
const GreenCheckbox = withStyles({
	root: {
		color: green[400],
		'&$checked': {
			color: green[600],
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);

const TodoItem = ({ todoItem, handleCheck, handleDelete, handleEdit }) => {

	const completedStyle = {
		fontStyle: "italic",
		color: "#cdcdcd",
		textDecoration: "line-through"
	}

	return (
		<div className="todo-item">

			<FormControlLabel
				control={<GreenCheckbox checked={todoItem.completed} onClick={() => handleCheck(todoItem.id)} />}
			/>

			{/* line-through todo item when checked, conditional rendering*/}
			<p style={todoItem.completed ? completedStyle : null}>{todoItem.todo}</p>

			<div className="icons">
				<IconButton
					onClick={() => handleEdit(todoItem.id)}
					color="primary"
					aria-label="edit todo item"
					component="span"
				>
					<EditIcon className="editIcon" fontSize="large" />
				</IconButton>

				<IconButton
					onClick={() => handleDelete(todoItem.id)}
					color="secondary"
					aria-label="delete todo item"
					component="span"
				>
					<DeleteIcon className="deleteIcon" fontSize="large" />
				</IconButton>
			</div>
		</div>
	)
}

export default TodoItem