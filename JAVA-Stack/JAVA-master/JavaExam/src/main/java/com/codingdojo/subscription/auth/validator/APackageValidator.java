package com.codingdojo.subscription.auth.validator;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

import com.codingdojo.subscription.models.APackage;
import com.codingdojo.subscription.services.APackageService;

@Component
public class APackageValidator {
	private APackageService apackageservice;
	public APackageValidator(APackageService apackageservice) {
		this.apackageservice = apackageservice;
	}
	public boolean supports(Class<?> clazz) {
        return APackage.class.equals(clazz);
    }
    
    public void validate(Object object, Errors errors) {
    		APackage apackage = (APackage) object;    
        
        if(apackageservice.findByName(apackage.getName()) != null) {
        		errors.rejectValue("name", "Taken");
        }
    }
}