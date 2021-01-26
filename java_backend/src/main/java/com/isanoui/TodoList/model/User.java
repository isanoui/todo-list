package com.isanoui.TodoList.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "password")
	private String password;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
	private List<TodoItem> todos;

	public User() {
	}

	public User(String name, String password, List<TodoItem> todos) {
		this.name = name;
		this.password = password;
		this.todos = todos;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<TodoItem> getTodos() {
		return todos;
	}

	public void setTodos(List<TodoItem> todos) {
		this.todos = todos;
	}
}
