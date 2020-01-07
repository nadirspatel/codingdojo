package com.nadirpatel.events.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nadirpatel.events.models.Event;

@Repository
public interface EventRepo extends CrudRepository<Event, Long> {
    Event findByName(String name);

}
