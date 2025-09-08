package com.java.full.stack.restful_web_services.basic.auth;

public class AuthenticationBean {


    private String message;

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public AuthenticationBean(String message) {
            this.message = message;

    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "message='" + message + '\'' +
                '}';
    }
}
