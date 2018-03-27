/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.emirates.test.todo.service;

import com.emirates.test.todo.dao.TodoRepository;
import com.emirates.test.todo.model.TodoDO;
import com.google.common.collect.Lists;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author johnson3yo
 */
@Service
public class TodoServiceImpl implements ITodoService {

    @Autowired
    private TodoRepository todoRepo;

    @Override
    public List<TodoDO> findAll() {
        return Lists.newArrayList(todoRepo.findAll());
    }

    @Override
    public TodoDO saveTodo(TodoDO todo) {
        todo.setCompleted(Boolean.FALSE);
        todo.setTimeCreated(new Date());
        return todoRepo.save(todo);
    }

    @Override
    public TodoDO toggleCompleted(TodoDO todo) {
        if (todo.getCompleted()) {
            todo.setCompleted(Boolean.FALSE);
        } else {
            todo.setCompleted(Boolean.TRUE);
        }
        return todoRepo.save(todo);
    }

    @Override
    public TodoDO findOne(Long id) {
        return todoRepo.findOne(id);
    }

    @Override
    public void deleteTodo(TodoDO todo) {
       todoRepo.delete(todo);
    }

}
