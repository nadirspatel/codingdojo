package com.ngm01.loginreg.controllers;

import java.security.Principal;
import java.util.Date;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ngm01.loginreg.models.User;
import com.ngm01.loginreg.services.UserService;
import com.ngm01.loginreg.validator.UserValidator;

@Controller
public class UserController {
	
	private UserService userService;
	private UserValidator userValidator;
	
	public UserController(UserService userService, UserValidator userValidator) {
		this.userService = userService;
		this.userValidator = userValidator;
	}
	
	@PostMapping("/registration")
	public String registration(@Valid @ModelAttribute("user") User user, BindingResult result, Model model) {
		userValidator.validate(user, result);
		
		//Ask Will or Tony:
		//isn't this bad practice to render a page in Post?
		//If so, is there any way to save (ie in the model) the error results produced
		//by the UserValidator?
		if(result.hasErrors()) {
			return "loginPage.jsp";
		}
		userService.saveWithUserRole(user);
		return "redirect:/login";
	}
	
	@RequestMapping("/login")
	public String login(@Valid @ModelAttribute("user") User user, @RequestParam(value="error", required=false) String error, @RequestParam(value="logout", required=false) String logout, Model model) {
		if(error != null) {
			model.addAttribute("errorMessage", "Invalid credentials. Please try again.");
			System.out.println("Where are the errors? " + error);
		}
		if (logout != null) {
			model.addAttribute("logoutMessage", "Logout Successful!");
		}
		return "loginPage.jsp";
	}
	
	@RequestMapping(value = {"/", "dashboard"})
	public String home(Principal principal, Model model) {
		String username = principal.getName();
		User currentUser = userService.findByUsername(username);
		currentUser.setLastSignIn(new Date());
		userService.updateUser(currentUser);
		model.addAttribute("currentUser", currentUser);
		return "dashboard.jsp";
	}

}
