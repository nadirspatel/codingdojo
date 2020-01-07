package com.codingdojo.grouplanguages.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.codingdojo.grouplanguages.models.Language;
import com.codingdojo.grouplanguages.services.LanguageService;

@Controller
public class MainController {
	private final LanguageService languageService;

    public MainController(LanguageService languageService){
        this.languageService = languageService;
    }
    
	@RequestMapping("/")
	public String sendToIndex() {
		return "redirect:/languages";
	}
	@RequestMapping("/languages")
	public String index(Model model, @ModelAttribute("language") Language lang) {
		List<Language> langs = languageService.allLangs();
		model.addAttribute("langs",langs);
		return "index.jsp";
	}
	@PostMapping("/languages")
	public String createLang(@Valid @ModelAttribute("language") Language lang, BindingResult result, RedirectAttributes errors) {
		if(result.hasErrors()) {
			errors.addFlashAttribute("errors", result.getAllErrors());
			return "redirect:/languages";
		} else {
			languageService.addLang(lang);
			return "redirect:/languages";
		}
	}
	@RequestMapping("/languages/{id}")
	public String getLang(Model model, @PathVariable("id") int id) {
		Language lang = languageService.getLang(id);
		if(lang == null) {
			return "redirect:/languages";
		}
		model.addAttribute("lang", lang);
		return "viewlang.jsp";
	}
	@RequestMapping("/languages/edit/{id}")
	public String getLangToEdit(Model model, @PathVariable("id") int id, @ModelAttribute("language") Language lang) {
		Language getlang = languageService.getLang(id);
		if(getlang == null) {
			return "redirect:/languages";
		}
		model.addAttribute("lang", getlang);
		return "editlang.jsp";
	}
	@PostMapping("/languages/edit/{id}")
	public String editLang(@PathVariable("id") int id, @Valid @ModelAttribute("language") Language lang, BindingResult result, RedirectAttributes errors) {
		if(result.hasErrors()) {
			errors.addFlashAttribute("errors", result.getAllErrors());
		} else {
			Language retrievedlang = languageService.getLang(id);
			if(retrievedlang == null) {
				return "redirect:/languages";
			}
			languageService.editLang(lang);
		}
		return "redirect:/languages";
	}
	@RequestMapping("/languages/delete/{id}")
	public String getLangToDelete(@PathVariable("id") int id) {
		Language lang = languageService.getLang(id);
		if(lang == null) {
			return "redirect:/languages";
		}
		languageService.deleteLang(id);
		return "redirect:/languages";
	}

}
