package com.java.full.stack.restful_web_services.helloWorld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


//returning simple text
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
    @GetMapping( path="/hello-world")
        public String helloWorld(){
            return  "Hello World!";
        }


//returning a bean [JASON]
    @GetMapping( path="/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
//        throw new RuntimeException("Some error occurred");
       return new HelloWorldBean ("Welcome to world!");
    }

//returning path variable
@GetMapping( path="/hello-world/path-variable/{name}")
public HelloWorldBean helloWorldBean(@PathVariable String name) {
    return new HelloWorldBean (String.format("Hello World! %s", name));
}

}
