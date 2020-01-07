package com.nsp.license.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nsp.license.models.Person;

@Repository
public interface PersonRepository extends CrudRepository<Person, Long> {
}
