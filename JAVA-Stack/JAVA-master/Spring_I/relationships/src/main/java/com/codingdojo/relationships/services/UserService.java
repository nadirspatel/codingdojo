package com.codingdojo.relationships.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.codingdojo.relationships.models.User;
import com.codingdojo.relationships.repositories.UserRepository;

@Service
public class UserService {
	private UserRepository userRepository;
	private UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	public void addUser(User user) {
		userRepository.save(user);
	}
	public List<User> getAllUsers(){
		return (List<User>) userRepository.findAll();
	}
	public void deleteUser(Long id) {
		userRepository.delete(id);
	}
	public User getUserById(Long id) {
		return userRepository.findOne(id);
	}
}