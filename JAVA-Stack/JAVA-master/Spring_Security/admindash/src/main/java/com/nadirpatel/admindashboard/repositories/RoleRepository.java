package com.nadirpatel.admindashboard.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nadirpatel.admindashboard.models.Role;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
	List<Role> findAll();
    
    Role findByName(String name);
}