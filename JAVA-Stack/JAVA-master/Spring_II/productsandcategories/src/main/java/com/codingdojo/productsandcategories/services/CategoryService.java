package com.codingdojo.productsandcategories.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.productsandcategories.models.Category;
import com.codingdojo.productsandcategories.repositories.CategoryRepo;
import com.codingdojo.productsandcategories.repositories.ProductRepo;

@Service
public class CategoryService {
	@Autowired
	private CategoryRepo categoryRepo;
	@Autowired
	private ProductRepo productRepo;
	public CategoryService(CategoryRepo categoryRepo, ProductRepo productRepo) {
		this.categoryRepo = categoryRepo;
		this.productRepo = productRepo;
	}
	public void addCategory(Category category) {
		categoryRepo.save(category);
	}
	public List<Category> getAll() {
		return (List<Category>) categoryRepo.findAll();
	}
	public Category getOne(Long id) {
		return categoryRepo.findOne(id);
	}
	public void update(Category category) {
		categoryRepo.save(category);
	}
	public List<Category> getAllExcept(Long productId) {
		List<Category> categories = this.getAll();
		List<Category> productCategories = productRepo.findOne(productId).getCategories();
		categories.removeAll(productCategories);
		return categories;
	}
}