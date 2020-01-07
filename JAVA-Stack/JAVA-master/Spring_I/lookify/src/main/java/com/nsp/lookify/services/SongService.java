package com.nsp.lookify.services;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.Sort;
import org.springframework.stereotype.Service;

import com.nsp.lookify.models.Song;
import com.nsp.lookify.repositories.SongRepository;

@Service
public class SongService {

	private SongRepository songRepository;
	
	public SongService(SongRepository songRepository) {
		this.songRepository = songRepository;
	}
	
	public List<Song> allSongs(){
		return (List<Song>) songRepository.findAll();
	}
	
	public void addSong(Song song) {
		songRepository.save(song);
	}
	
	public Song getSong(Long id) {
		return songRepository.findOne(id);
	}
	
	public void updateSong(Song song) {
		songRepository.save(song);
	}
	
	public void deleteSong(Long id) {
		songRepository.delete(id);
	}
	
	public ArrayList<Song> sortSongs(){
		return songRepository.findTop10ByOrderByRatingDesc();
	}
}
