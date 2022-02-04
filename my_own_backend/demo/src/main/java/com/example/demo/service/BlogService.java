package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Blog;
import com.example.demo.repository.BlogRepository;
@Service
public class BlogService implements IblogService{
	
	@Autowired
	private BlogRepository blogRepository;
	
	@Override
	public Blog create(Blog blog) {
		return blogRepository.save(blog);
	}
	
	@Override 
	public List<Blog> findByTitle(String title) {
		return blogRepository.findByTitle(title);
	}
	
	@Override 
	public Blog findById(String id) {
		return blogRepository.findById(id).get();
	}
	
	
	@Override
	public List<Blog> findAll() {
		return blogRepository.findAll();
	}
	
	@Override
	public void delete(String id) {
		blogRepository.deleteById(id);
	}
	
	@Override
	public Blog update(Blog blog) {
		return blogRepository.save(blog);
	}

}
