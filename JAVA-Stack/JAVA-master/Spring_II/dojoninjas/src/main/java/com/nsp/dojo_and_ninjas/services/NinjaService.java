package com.nsp.dojo_and_ninjas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nsp.dojo_and_ninjas.models.Ninja;
import com.nsp.dojo_and_ninjas.repositories.NinjaRepo;

@Service
public class NinjaService {
	@Autowired
	private NinjaRepo ninjaRepo;
	public NinjaService(NinjaRepo ninjaRepo) {
		this.ninjaRepo = ninjaRepo;
	}
	public void add(Ninja ninja) {
		ninjaRepo.save(ninja);
	}
	public List<Ninja> all() {
		return (List<Ninja>) ninjaRepo.findAll();
	}
}