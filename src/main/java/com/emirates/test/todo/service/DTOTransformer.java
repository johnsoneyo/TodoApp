/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.emirates.test.todo.service;

import com.emirates.test.todo.dto.TodoDTO;
import com.emirates.test.todo.model.TodoDO;
import java.util.List;
import org.modelmapper.ModelMapper;

/**
 *
 * @author johnson3yo
 */
public class DTOTransformer {

    private static ModelMapper modelMapper = new ModelMapper();

    public static TodoDTO createDTO(TodoDO todo) {
        return modelMapper.map(todo, TodoDTO.class);
    }

    public static TodoDO createDO(TodoDTO todo) {
        return modelMapper.map(todo, TodoDO.class);
    }
    
   

}
