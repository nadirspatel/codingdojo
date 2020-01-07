package com.nsp.lookify.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.nsp.lookify.models.Song;
import com.nsp.lookify.services.SongService;

@Controller
public class LookifyController {

	private final SongService songService;
	
	public LookifyController(SongService songService) {
		this.songService = songService;
	}
	
	@RequestMapping("/")
	public String root() {
		return "index.jsp";
	}
	
	@RequestMapping("/dashboard")
	public String main(Model model) {
		model.addAttribute("songs", songService.allSongs());
		return "maindashboard.jsp";
	}
	
	@PostMapping("/songs/search")
	public String searchSongs(@RequestParam(value="searchTerm") String searchTerm) {
		if(searchTerm.equals("")) {
			return "redirect:/dashboard";
		}
		return "redirect:/songs/search/" + searchTerm;
	}
	
	@RequestMapping("/songs/search/{searchTerm}")
	public String searchResults(@PathVariable("searchTerm") String searchTerm, Model model) {
		System.out.println("Are we getting to the GET method?");
		List<Song> songs = songService.allSongs();
		List<Song> found = new ArrayList<Song>();
		for (int i=0; i<songs.size(); i++) {
			if (songs.get(i).getArtist().contains(searchTerm)){
				System.out.println("Are we inside the if statement?");
				found.add(songs.get(i));
			}
		}
		if(found==null) {
			return "redirect:/dashboard";
		}
		System.out.println("Are we outside the for loop?");
		model.addAttribute("found", found);
		return "SearchResults.jsp";
	}
	
	@RequestMapping("/songs/add")
	public String add(Model model) {
		model.addAttribute("song", new Song());
		return "addSong.jsp";
	}
	
	@PostMapping("/songs/add/addnew")
	public String newSong(@Valid @ModelAttribute("song") Song song, BindingResult result) {
		if(result.hasErrors()) {
			return "redirect:/addSong.jsp";
		}
		else {
			songService.addSong(song);
			return "redirect:/dashboard";
		}
	}
	
	@RequestMapping("songs/delete/{id}")
	public String deleteSong(@PathVariable("id") Long id) {
		songService.deleteSong(id);
		return "redirect:/dashboard";
	}
	
	@RequestMapping("songs/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		model.addAttribute("song", songService.getSong(id));
		return "displaySong.jsp";
	}
	
	@RequestMapping("/songs/top")
	public String showTop(Model model) {
		model.addAttribute("sortedSongs", songService.sortSongs());
		return "topSongs.jsp";
	}
}
