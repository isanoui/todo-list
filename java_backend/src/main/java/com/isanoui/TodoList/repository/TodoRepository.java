package com.isanoui.TodoList.repository;

import com.isanoui.TodoList.model.TodoItem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<TodoItem, Long>{
    
}