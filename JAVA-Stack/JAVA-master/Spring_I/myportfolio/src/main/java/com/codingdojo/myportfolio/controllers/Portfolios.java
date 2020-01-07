package com.codingdojo.myportfolio.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class Portfolios {
	@RequestMapping("")
	public String index() {
		return "index";
	}
	
	@RequestMapping("about")
	public String about() {
		return "about";
	}
	
	@RequestMapping("/projects")
	public String projects() {
		return "projects";
	}
}
