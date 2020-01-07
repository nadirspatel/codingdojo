package com.nsp.license.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nsp.license.models.Person;
import com.nsp.license.repositories.PersonRepository;

@Service
public class PersonService {
	 
	private PersonRepository personRepo;
	
	public PersonService(PersonRepository personRepo) {
		this.personRepo = personRepo;
	}
	
	public List<Person> showAll(){
		return (List<Person>) personRepo.findAll();
	}
	
	public Long addPerson(Person person) {
		personRepo.save(person);
		return person.getId();
	}
	
	public Person getPerson(Long id) {
		return personRepo.findOne(id);
	}
	
	public void updatePerson(Person person) {
		personRepo.save(person);
	}
	
	public void deletePerson(Long id) {
		personRepo.delete(id);
	}
}
