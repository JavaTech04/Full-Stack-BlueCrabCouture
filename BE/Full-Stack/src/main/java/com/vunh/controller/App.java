package com.vunh.controller;

import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class App {
    @GetMapping
    String index(){
        return "index";
    }
}
