package com.nadirpatel.events.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nadirpatel.events.models.Message;

@Repository
public interface MessageRepo extends CrudRepository<Message, Long> {

}
