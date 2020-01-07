package com.nadirpatel.admindashboard.services;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.nadirpatel.admindashboard.models.Role;
import com.nadirpatel.admindashboard.models.User;
import com.nadirpatel.admindashboard.repositories.RoleRepository;
import com.nadirpatel.admindashboard.repositories.UserRepository;

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
    
    public void saveUserWithSuperAdminRole(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setRoles(Arrays.asList(roleRepository.findByName("ROLE_ADMIN"), roleRepository.findByName("ROLE_SUPERADMIN")));
        userRepository.save(user);
    } 
    
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    
    public void updateLoggedIn(User user) {
    		user.setLast_login(new Date());
    		userRepository.save(user);
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
}