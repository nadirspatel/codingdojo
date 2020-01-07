package com.nsp.ninjagold.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.concurrent.ThreadLocalRandom;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class NinjaControl {
	ArrayList<ArrayList> updates = new ArrayList<ArrayList>();
	int gold = 0;
	Date dateTime = new java.util.Date();
	String time = String.format("(%s %te %<tB %<tY %<tI:%<tM %<tp)", "", dateTime);
	
	@RequestMapping("/")
	public String index(HttpSession session) {
		session.setAttribute("gold", gold);
		return "index.jsp";
	}
	
	@RequestMapping(path="/process_money", method=RequestMethod.POST)
	public String money(@RequestParam(value="building") String building, HttpSession session) {
		

		
		switch(building) {
		case "farm":
			int amt = ThreadLocalRandom.current().nextInt(10, 21);
			gold += amt;
			String color = "green";
			String msg = "You earned " + amt + " from the farm!";
			ArrayList<String> data = new ArrayList<String>();
			data.add(color);
			data.add(msg);
			data.add(time);
			updates.add(data);
			break;
		case "cave":
			amt = ThreadLocalRandom.current().nextInt(5, 11);
			gold += amt;
			color = "green";
			msg = "You earned " + amt + " from the cave!";
			data = new ArrayList<String>();
			data.add(color);
			data.add(msg);
			data.add(time);
			updates.add(data);
			break;
		case "house":
			amt = ThreadLocalRandom.current().nextInt(2, 6);
			gold += amt;
			color = "green";
			msg = "You stole " + amt + " from the house, you thief!";
			data = new ArrayList<String>();
			data.add(color);
			data.add(msg);
			data.add(time);
			updates.add(data);
			break;
		case "casino":
			amt = ThreadLocalRandom.current().nextInt(-50, 51);
			gold += amt;
			if (amt < 0) {
				color = "red";
				msg = "You lost " + amt + " at the casino. Ouch...";
			}
			else if (amt == 0){
				color = "black";
				msg = "You get nothing!";
			}
			else {
				color = "green";
				msg = "You won " + amt + " at the casino!";
			}
			data = new ArrayList<String>();
			data.add(color);
			data.add(msg);
			data.add(time);
			updates.add(data);
			break;
		case "spa":
			amt = ThreadLocalRandom.current().nextInt(5, 21);
			gold -= amt;
			color = "purple";
			msg = "You spent " + amt + " at the spa! Ahhh relaxing";
			data = new ArrayList<String>();
			data.add(color);
			data.add(msg);
			data.add(time);
			updates.add(data);
			break;
		}

		
		session.setAttribute("updates", updates);
		session.setAttribute("size", updates.size() - 1);
		return "redirect:/";
	}
}
