/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.emirates.test.todo.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;

/**
 *
 * @author johnson3yo
 */
public class TodoDTO {

    private Long id;
    private String title;
    private String description;
    
    @JsonFormat(pattern="EEE, d MMM yyyy HH:mm:ss Z")
    private Date timeCreated;
    private Boolean completed;

    public TodoDTO() {
    }
    
    

    public TodoDTO(Long id, String title, String description, Date timeCreated, Boolean completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.timeCreated = timeCreated;
        this.completed = completed;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getTimeCreated() {
        return timeCreated;
    }

    public void setTimeCreated(Date timeCreated) {
        this.timeCreated = timeCreated;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }
    
    

}
