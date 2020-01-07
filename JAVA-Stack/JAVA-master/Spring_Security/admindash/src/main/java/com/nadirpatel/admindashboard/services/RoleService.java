package com.nadirpatel.admindashboard.services;

import org.springframework.stereotype.Service;

import com.nadirpatel.admindashboard.models.Role;
import com.nadirpatel.admindashboard.repositories.RoleRepository;

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