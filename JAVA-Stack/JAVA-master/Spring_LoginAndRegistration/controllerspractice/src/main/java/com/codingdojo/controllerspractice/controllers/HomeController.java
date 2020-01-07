package com.codingdojo.controllerspractice.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {
        @RequestMapping("")
        public String index() {
                return "index.html";
        }
        @RequestMapping("aboutme")
        public String me() {
                return "me.html";
        }
        @RequestMapping("myprojects")
        public String projects() {
                return "projects.html";
        }
}
