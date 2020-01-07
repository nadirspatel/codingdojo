package com.nsp.dojo_and_ninjas.repositories;

import org.springframework.data.repository.CrudRepository;

import com.nsp.dojo_and_ninjas.models.Dojo;

public interface DojoRepo extends CrudRepository <Dojo, Long> {

}