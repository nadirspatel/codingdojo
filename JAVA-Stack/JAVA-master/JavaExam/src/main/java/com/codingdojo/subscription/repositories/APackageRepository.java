package com.codingdojo.subscription.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.subscription.models.APackage;

@Repository
public interface APackageRepository extends CrudRepository<APackage, Long> {
    APackage findByName(String name);
}