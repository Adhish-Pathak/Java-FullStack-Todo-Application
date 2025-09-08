package com.java.full.stack.restful_web_services.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


//returning simple text
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {


//returning a bean [JASON]
    @GetMapping( path="/basicauth")
    public AuthenticationBean helloWorldBean() {
//        throw new RuntimeException("Some error occurred");
       return new AuthenticationBean("You are authenticated");
    }


}
