package com.nsp.license.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nsp.license.models.Person;
import com.nsp.license.services.PersonService;

@Controller
public class PersonController {
	
	private final PersonService personService;
	
	public PersonController(PersonService personService) {
		this.personService = personService;
	}
	
	@RequestMapping("/")
	public String main(Model model) {
		return "redirect:/persons/new";
	}
	
	@RequestMapping("/persons/new")
	public String newPerson(Model model) {
		model.addAttribute("person", new Person());
		return "newPerson.jsp";
	}
	
	@PostMapping("/persons/add")
	public String addPerson(@Valid @ModelAttribute("person") Person person, BindingResult result) {
		if (result.hasErrors()) {
			return "redirect:/newPerson.jsp";
		}
		else {
			Long noob = personService.addPerson(person);
			return "redirect:/licenses/new";
		}
	}
	
	
	@RequestMapping("persons/show/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		if(id != null) {
			model.addAttribute("person", personService.getPerson(id));
			return "showPerson.jsp";
		}
		else {
			return "newPerson.jsp";
		}
	}
}
