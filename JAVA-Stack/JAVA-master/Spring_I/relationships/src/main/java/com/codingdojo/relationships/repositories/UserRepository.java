package com.codingdojo.relationships.repositories;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.relationships.models.User;

public interface UserRepository extends CrudRepository <User, Long> {

}