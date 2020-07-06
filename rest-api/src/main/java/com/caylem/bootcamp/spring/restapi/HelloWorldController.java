package com.caylem.bootcamp.spring.restapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController // Controller to handle REST Requests
public class HelloWorldController {

    @GetMapping(path="/hello-world")
    public String helloWorld() {
        return "Hello World";
    }

    //hello-world-bean
    @GetMapping(path="/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Hello World");
    }

    //hello world bean request with path parameter
    // hello-world/path-variable/caylem
    @GetMapping(path="/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathvariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }

}
