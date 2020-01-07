package com.codingdojo.grouplanguages.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.codingdojo.grouplanguages.models.Language;

@Service
public class LanguageService {
    private List<Language> langs = new ArrayList<>();
    
    public List<Language> allLangs() {
        return langs;
    }
    
    public void addLang(Language lang) {
    		langs.add(lang);
    }
    
    public Language getLang(int id) {
    		for(Language lang : langs) {
    			if(lang.getThisid() == id) {
    				return lang;
    			}
    		}
    		return null;
    }
    
    public void editLang(Language lang) {
    		langs.set(lang.getThisid(), lang);
    }
    
    public void deleteLang(int id) {
    		langs.remove(id);
    }
	

}
