package com.codingdojo.secondproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// last two are for importing dependencies
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
// 1. annotation
@RestController
public class SecondprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SecondprojectApplication.class, args);
	}
	
	// 1. annotation
	@RequestMapping("/")
	// 3. method that maps to the request route above
	public String hello() { // 3
		return "Hello client! How are you doing?";
	}
	@RequestMapping("/random")
	public String random() { 
		return "Don't talk to me until I finish my damn coffee.";
	}
}
