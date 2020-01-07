package com.codingdojo.subscription.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.subscription.models.Role;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
	List<Role> findAll();
    
    Role findByName(String name);
}