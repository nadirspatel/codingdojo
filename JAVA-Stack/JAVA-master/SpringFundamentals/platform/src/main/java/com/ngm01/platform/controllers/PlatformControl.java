package com.ngm01.platform.controllers;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PlatformControl {
	
	@RequestMapping("/")
	public String index(HttpSession session) {
		HashMap<String, String[]> pages = new HashMap<String, String[]>();
		pages.put("0733", new String[] {"38", "0553", "Setting up your servers"});
		pages.put("0345", new String[] {"38", "0483", "Coding Forms"});
		pages.put("0342", new String[] {"38", "0553", "Punch Cards"});
		pages.put("0348", new String[] {"26", "0553", "Advanced Fortran Intro"});
		pages.put("2342", new String[] {"26", "0483", "Fortran Binary"});
		session.setAttribute("pages", pages);
		return "index.jsp";
	}
	
	@RequestMapping("/m/{chapter}/{type}/{page}")
	public String showPage(@PathVariable String chapter, @PathVariable String type, @PathVariable String page, HttpSession session) {
		System.out.println("Do we get into this function?");
		HashMap<String, String[]> data = (HashMap<String, String[]>) session.getAttribute("pages");
		if(data.containsKey(page)) {
			String[] thisPage = (String[]) data.get(page);
			session.setAttribute("thisPage", thisPage);
			if(thisPage[1].equals("0553")) {
				return "lesson.jsp";
			}
			else if(thisPage[1].equals("0483")) {
				return "assignment.jsp";
			}
			else {
				return "index.jsp";
			}
		}
		else {
			return "index.jsp";
		}
	}
}
