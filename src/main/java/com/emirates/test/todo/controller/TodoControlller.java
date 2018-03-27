/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.emirates.test.todo.controller;

import com.emirates.test.todo.dto.TodoDTO;
import com.emirates.test.todo.model.TodoDO;
import com.emirates.test.todo.service.DTOTransformer;
import com.emirates.test.todo.service.ITodoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author johnson3yo
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("v1/todo/")
public class TodoControlller {

    @Autowired
    private ITodoService service;

    @PostMapping("saveTodo")
    public ResponseEntity saveTodo(@RequestBody TodoDTO todo) {

        TodoDO created = service.saveTodo(DTOTransformer.createDO(todo));

        return new ResponseEntity<TodoDTO>(DTOTransformer.createDTO(created), HttpStatus.CREATED);
    }

    @GetMapping("getTodos")
    public ResponseEntity getTodos() {

        List<TodoDO> list = service.findAll();

        return new ResponseEntity<List<TodoDO>>(list, HttpStatus.OK);
    }

    @GetMapping("find/{id}")
    public ResponseEntity findTodo(@PathVariable("id") Long id) {

        TodoDO todo = service.findOne(id);

        return new ResponseEntity<TodoDTO>(DTOTransformer.createDTO(todo), HttpStatus.OK);
    }

    @GetMapping("toggleCompleted/{id}")
    public ResponseEntity toggleCompleted(@PathVariable("id") Long id) {
        TodoDO todo = service.findOne(id);
        TodoDO t = service.toggleCompleted(todo);
        return new ResponseEntity<TodoDTO>(DTOTransformer.createDTO(t), HttpStatus.OK);
    }

    @GetMapping("deleteTodo/{id}")
    public ResponseEntity deleteTodo(@PathVariable("id") Long id) {
         TodoDO todo = service.findOne(id);
        service.deleteTodo(todo);
        return new ResponseEntity<TodoDO>(todo,HttpStatus.OK);
    }

}