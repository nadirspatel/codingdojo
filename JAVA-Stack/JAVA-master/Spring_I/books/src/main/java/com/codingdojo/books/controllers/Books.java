package com.codingdojo.books.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.books.models.Book;
import com.codingdojo.books.services.BookService;

@Controller 
public class Books {
	// the logic of creating the books and returning them is contained inside "Services controller"
	private final BookService bookService;
	
	public Books(BookService bookService) {
		this.bookService = bookService;
	}
	@RequestMapping("/books")
	public String books(Model model) {
		List<Book> books = bookService.allBooks();
		model.addAttribute("books",books);
		return "books.jsp";
	}
	
    @RequestMapping("/books/new")
    public String newBook(@ModelAttribute("book") Book book) {
        return "newBook.jsp";
    }
    
    //error checking
    @PostMapping("/books/new")
    public String createBook(@Valid @ModelAttribute("book") Book book, BindingResult result) {
        if (result.hasErrors()) {
            return "newBook.jsp";
        }else{
            // Add the book
        	bookService.addBook(book);
            return "redirect:/books";
        }
    }
    
    @PostMapping("/books/edit/{id}")
    public String updateBook(@PathVariable("id") int id, @Valid @ModelAttribute("book") Book book, BindingResult result) {
        if (result.hasErrors()) {
            return "editBook.jsp";
        }else{
            bookService.updateBook(id, book);
            return "redirect:/books";
        }
    }
    
    @RequestMapping(value="/books/delete/{id}")
    public String destroyBook(@PathVariable("id") int id) {
        bookService.destroyBook(id);
        return "redirect:/books";
    }
	
    @RequestMapping("/books/{index}")
    public String findBookByIndex(Model model, @PathVariable("index") int index) {
        Book book = bookService.findBookByIndex(index);
        model.addAttribute("book", book);
        return "showBook.jsp";
    }

	@RequestMapping("/bookslist")
	public String bookslist(Model model) {
		List<Book> books = bookService.allBooks();
		//adds to our model to access from "views"
		model.addAttribute("books",books);
		return "bookslist.jsp";
	}
	
	@RequestMapping("/booksdiv")
	public String booksDiv(Model model) {
		List<Book> books = bookService.allBooks();
		//adds to our model to access from "views"
		model.addAttribute("books",books);
		return "booksdiv.jsp";
	}
	// updating data
    @RequestMapping("/books/edit/{id}")
    public String editBook(@PathVariable("id") int id, Model model) {
        Book book = bookService.findBookByIndex(id);
        if (book != null){
            model.addAttribute("book", book);
            return "editBook.jsp";
        }else{
            return "redirect:/books";
        }    
}
}

