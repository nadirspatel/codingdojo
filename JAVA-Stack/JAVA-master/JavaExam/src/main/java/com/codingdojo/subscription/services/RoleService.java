package com.codingdojo.subscription.services;

import org.springframework.stereotype.Service;

import com.codingdojo.subscription.models.Role;
import com.codingdojo.subscription.repositories.RoleRepository;

@Service
public class RoleService {
	private RoleRepository roleRepository;
	
	public RoleService(RoleRepository roleRepository)     {
        this.roleRepository = roleRepository;
    }
    public Role findByName(String name) {
        return roleRepository.findByName(name);
    }
}