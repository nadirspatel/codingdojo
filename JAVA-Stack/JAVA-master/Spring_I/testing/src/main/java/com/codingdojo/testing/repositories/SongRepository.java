package com.codingdojo.testing.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.testing.models.Song;

public interface SongRepository extends CrudRepository<Song, Long> {
	List<Song> findByArtist(String artist);
	
	List<Song> findTop10ByOrderByRatingDesc();
}