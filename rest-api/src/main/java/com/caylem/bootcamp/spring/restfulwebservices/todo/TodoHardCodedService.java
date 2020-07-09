package com.caylem.bootcamp.spring.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {

    private static List<Todo> todos = new ArrayList<>();

    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "Caylem", "Learn to Dance", new Date(), false));
        todos.add(new Todo(++idCounter, "Caylem", "Travel to Peru", new Date(), false));
        todos.add(new Todo(++idCounter, "Caylem", "Create a Video Game", new Date(), false));
        todos.add(new Todo(++idCounter, "Caylem", "Travel the World", new Date(), false));
        todos.add(new Todo(++idCounter, "Caylem", "Buy a bigger home", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }
}
