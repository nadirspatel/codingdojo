//Controller for Portfolio assignment
package com.ngm01.portfolio.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	@RequestMapping("/")
	public String index() {
		return "forward:/index.html";
	}
	
	@RequestMapping("/about/")
	public String about() {
		return "/about.html";
	}
	
	@RequestMapping("/projects/")
	public String projects() {
		return "/projects.html";
	}

}
