package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Blog;

public interface IblogService {
	Blog create (Blog blog);
	
	List<Blog> findByTitle(String Title);
	
	Blog findById(String id);
	
	List<Blog> findAll();
	
	void delete(String id);
	
	Blog update(Blog blog);

	

}
