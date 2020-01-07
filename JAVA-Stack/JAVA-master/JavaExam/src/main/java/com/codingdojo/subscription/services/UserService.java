package com.codingdojo.subscription.services;

import java.util.Arrays;
import java.util.List;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.codingdojo.subscription.models.Role;
import com.codingdojo.subscription.models.User;
import com.codingdojo.subscription.repositories.RoleRepository;
import com.codingdojo.subscription.repositories.UserRepository;

@Service
public class UserService {
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    
    public UserService(UserRepository userRepository, RoleRepository roleRepository, BCryptPasswordEncoder bCryptPasswordEncoder)     {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }
    

    public void saveWithUserRole(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setRoles(Arrays.asList(roleRepository.findByName("ROLE_USER")));
        userRepository.save(user);
    }
     
    public void saveUserWithAdminRole(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setRoles(Arrays.asList(roleRepository.findByName("ROLE_ADMIN")));
        userRepository.save(user);
    }   
    
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    
    public List<User> getAllUsers() {
    		return (List<User>) userRepository.findAll();
    }
    
    public void deleteUser(Long id) {
    		userRepository.delete(id);
    }
    
    public void makeAdmin(Long id) {
    		User user = userRepository.findOne(id);
    		List<Role> roles = user.getRoles();
    		roles.add(roleRepository.findByName("ROLE_ADMIN"));
    		userRepository.save(user);
    }
    public void makeUser(Long id) {
		User user = userRepository.findOne(id);
		List<Role> roles = user.getRoles();
		roles.remove(roleRepository.findByName("ROLE_ADMIN"));
		userRepository.save(user);
    }
    public void update(User user) {
    		userRepository.save(user);
    }
}