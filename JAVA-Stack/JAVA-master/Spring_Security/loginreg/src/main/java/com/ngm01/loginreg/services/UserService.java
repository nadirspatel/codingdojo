package com.ngm01.loginreg.services;


import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ngm01.loginreg.models.User;
import com.ngm01.loginreg.repositories.RoleRepository;
import com.ngm01.loginreg.repositories.UserRepository;

@Service
public class UserService {
    private UserRepository userRepo;
    private RoleRepository roleRepo;
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    
    public UserService(UserRepository userRepo, RoleRepository roleRepo, BCryptPasswordEncoder bCryptPasswordEncoder) {
    	this.userRepo = userRepo;
    	this.roleRepo = roleRepo;
    	this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }
    
    public void saveWithUserRole(User user) {
    	user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
    	user.setRoles(roleRepo.findByName("ROLE_USER"));
    	userRepo.save(user);
    }
    
    public void saveWithAdminRole(User user) {
    	user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
    	user.setRoles(roleRepo.findByName("ROLE_ADMIN"));
    	userRepo.save(user);
    }
    
    public User findByUsername(String email) {
    	return userRepo.findByEmail(email);
    }
    
    public void updateUser(User user) {
    	userRepo.save(user);
    }
}
