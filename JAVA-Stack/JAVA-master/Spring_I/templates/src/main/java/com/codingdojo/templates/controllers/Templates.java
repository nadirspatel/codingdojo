package com.codingdojo.templates.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class Templates {
	@RequestMapping("")
	public String index(Model model) {
		model.addAttribute("dojoName", "Burbank");
		return "index";
	}
//	@RequestMapping("about")
//	public String about() {
//		return "about";
//	}
//	
//	@RequestMapping("/projects")
//	public String projects() {
//		return "projects";
//	}
}
