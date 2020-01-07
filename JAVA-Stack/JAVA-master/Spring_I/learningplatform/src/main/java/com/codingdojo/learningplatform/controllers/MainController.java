package com.codingdojo.learningplatform.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class MainController {
	@RequestMapping("")
	public String index() {
		return "index.jsp";
	}
	@RequestMapping("/m/{chapter}/0483/{assignmentNumber}")
	public String assignment(Model model, @PathVariable("chapter") String discard, @PathVariable("assignmentNumber") String assignment) {
		if(assignment.equals("0345")) {
			model.addAttribute("assignment", "Coding Forms");
		} else if(assignment.equals("2342")) {
			model.addAttribute("assignment", "Fortran to Binary");
		} else {
			model.addAttribute("assignment", "Unknown Assignment");
		}
		return "assignment.jsp";
	}
	@RequestMapping("/m/{chapter}/0553/{lessonNumber}")
	public String lesson(Model model, @PathVariable("chapter") String discard, @PathVariable("lessonNumber") String lesson) {
		if(lesson.equals("0733")) {
			model.addAttribute("lesson", "Setting up your servers");
		} else if(lesson.equals("0342")) {
			model.addAttribute("lesson", "Punch Cards");
		} else if(lesson.equals("0348")) {
			model.addAttribute("lesson", "Advanced Fortran Info");
		} else {
			model.addAttribute("lesson", "Unknown Assignment");
		}
		return "lesson.jsp";
	}
}