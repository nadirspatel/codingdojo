package com.codingdojo.hellohuman.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/")

public class MainController {
	 @RequestMapping("")
	 public String index(Model model, @RequestParam(value="first_name", defaultValue="Human") String firstname, @RequestParam(value="last_name", defaultValue="lastname") String lastname) {
		 model.addAttribute("firstname", firstname);
		 model.addAttribute("lastname","");
		 if(!lastname.equals("lastname")) {
			 model.addAttribute("lastname", " "+lastname);
		 }
		 return "index.jsp";
	 }
}
