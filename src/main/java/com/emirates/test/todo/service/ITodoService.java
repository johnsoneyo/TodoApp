/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.emirates.test.todo.service;

import com.emirates.test.todo.model.TodoDO;
import java.util.List;

/**
 *
 * @author johnson3yo
 */
public interface ITodoService {

    TodoDO saveTodo(TodoDO todoDO);

    List<TodoDO> findAll();

    TodoDO toggleCompleted(TodoDO todo);

    TodoDO findOne(Long id);
    
    void deleteTodo(TodoDO todo);
}
