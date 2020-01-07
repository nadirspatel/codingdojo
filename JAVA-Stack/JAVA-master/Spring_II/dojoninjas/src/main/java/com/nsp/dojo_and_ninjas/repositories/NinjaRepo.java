package com.nsp.dojo_and_ninjas.repositories;

import org.springframework.data.repository.CrudRepository;

import com.nsp.dojo_and_ninjas.models.Ninja;

public interface NinjaRepo extends CrudRepository <Ninja, Long> {

}