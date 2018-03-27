/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.emirates.test.todo.dao;

import com.emirates.test.todo.model.TodoDO;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author johnson3yo
 */
public interface TodoRepository extends CrudRepository<TodoDO,Long> {
    
}
