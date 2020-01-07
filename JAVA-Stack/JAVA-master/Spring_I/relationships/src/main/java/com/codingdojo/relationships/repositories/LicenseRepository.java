package com.codingdojo.relationships.repositories;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.relationships.models.License;

public interface LicenseRepository extends CrudRepository <License, Long> {

	License getLicenseByUserId(Long id);

}