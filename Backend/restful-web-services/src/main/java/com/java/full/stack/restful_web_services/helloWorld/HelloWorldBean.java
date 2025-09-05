package com.java.full.stack.restful_web_services.helloWorld;

public class HelloWorldBean {


    private String message;

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public HelloWorldBean(String message) {
            this.message = message;

    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "message='" + message + '\'' +
                '}';
    }
}
