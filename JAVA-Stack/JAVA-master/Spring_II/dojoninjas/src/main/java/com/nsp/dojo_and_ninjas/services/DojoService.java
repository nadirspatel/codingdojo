package com.nsp.dojo_and_ninjas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nsp.dojo_and_ninjas.models.Dojo;
import com.nsp.dojo_and_ninjas.repositories.DojoRepo;

@Service
public class DojoService {
	@Autowired
	private DojoRepo dojoRepo;
	public DojoService(DojoRepo dojoRepo) {
		this.dojoRepo = dojoRepo;
	}
	public void add(Dojo dojo) {
		dojoRepo.save(dojo);
	}
	public List<Dojo> all() {
		return (List<Dojo>) dojoRepo.findAll();
	}
	public Dojo getOne(Long id) {
		return dojoRepo.findOne(id);
	}
}