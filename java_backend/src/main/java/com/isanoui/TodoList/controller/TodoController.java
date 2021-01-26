package com.isanoui.TodoList.controller;

import java.util.Optional;

import com.isanoui.TodoList.model.TodoItem;
import com.isanoui.TodoList.model.User;
import com.isanoui.TodoList.repository.TodoRepository;
import com.isanoui.TodoList.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// To link with React server
@CrossOrigin(origins = "https://festive-chandrasekhar-e40420.netlify.app")
@RestController
@RequestMapping("/api")
public class TodoController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TodoRepository todoRepository;

    @PostMapping("/addItem")
    public Optional<User> addTodoItem(@RequestBody TodoItem todoItem) {
        todoRepository.save(todoItem);
        return userRepository.findById(todoItem.getUserId());
    }

    @PutMapping("/checkItem/{id}")
    public Optional<User> checkTodoItem(@PathVariable Long id) {
        TodoItem todoItem = todoRepository.findById(id).get();
        todoItem.setCompleted(!todoItem.isCompleted());
        todoRepository.save(todoItem);
        return userRepository.findById(todoItem.getUserId());
    }

    @PutMapping("/deleteItem/{id}")
    public Optional<User> deleteTodoItem(@PathVariable Long id) {
        TodoItem todoItem = todoRepository.findById(id).get();
        todoRepository.deleteById(id);
        return userRepository.findById(todoItem.getUserId());
    }

    @PutMapping("/editItem/{id}")
    public Optional<User> editTodoItem(@PathVariable Long id, @RequestBody String updatedTodo) {
        TodoItem todoItem = todoRepository.findById(id).get();
        todoItem.setTodo(updatedTodo);
        todoRepository.save(todoItem);
        return userRepository.findById(todoItem.getUserId());
    }

    @GetMapping("/user/{id}")
    public Optional<User> getUserById(@PathVariable Long id) {
        return userRepository.findById(id);
    }
}
