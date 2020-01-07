package com.nsp.license.controllers;


import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nsp.license.models.License;
import com.nsp.license.models.Person;
import com.nsp.license.services.LicenseService;
import com.nsp.license.services.PersonService;


@Controller
@RequestMapping("/licenses/")
public class LicenseController {
	
		private final LicenseService licenseService;
		private PersonService personService;
		private static int counter = 0;
		
		public LicenseController(LicenseService licenseService, PersonService personService){
			this.licenseService = licenseService;
			this.personService = personService;
		}
		
		
		@RequestMapping("")
		public String main() {
			return "redirect:/new";
		}
		
		@RequestMapping("/new")
		public String newLicensePage(Model model) {
			List<Person> persons = personService.showAll();
			List<License> licenses = licenseService.showAll();
			//Must learn more efficient sorting methods...
			for(int i=0; i < persons.size(); i++) {
				for(int k=0; k<licenses.size(); k++) {
					if(persons.get(i) == licenses.get(k).getPerson()) {
						persons.remove(i);
					}
				}
			}
			model.addAttribute("persons", persons);
			model.addAttribute("license", new License());
			return "newLicense.jsp";
		}
		
		@PostMapping("/new")
		public String addLicense(@Valid @ModelAttribute("license") License license, BindingResult result, Model model) {
			if(result.hasErrors()) {
				System.out.println("Hello");
				System.out.println(license);
				System.out.println(result.getAllErrors());
				
				return "redirect:/licenses/new";
			}
			else {
				// modified from: https://stackoverflow.com/questions/2128749/random-generated-number 
				counter += 1;
				NumberFormat formatter = new DecimalFormat("00000");
				String licenseNumber = formatter.format(counter);
				license.setNumber(licenseNumber);
				licenseService.addLicense(license);
				license.getPerson().setLicense(license);
				return "redirect:/persons/show/" + license.getPerson().getId();
			}
		}
}
