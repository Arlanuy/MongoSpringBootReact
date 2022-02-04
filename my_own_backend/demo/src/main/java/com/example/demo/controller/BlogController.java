package com.example.demo.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import com.example.demo.model.Blog;
import com.example.demo.service.IblogService;

@RestController
public class BlogController {
	
	@Autowired
	private IblogService blogService;
	
	@GetMapping("/all")
	public List<Blog> getAllBlogs() {
		return blogService.findAll();
	}
	
	@GetMapping("/title/{title}")
	public List<Blog> getBlogsByTitle(@PathVariable String title) {
		return blogService.findByTitle(title);
	}
	
	@GetMapping("/id/{id}")
	public Blog getBlogsById(@PathVariable String id) {
		return blogService.findById(id);
	}
	
	
	@PostMapping("/create")
	public Blog create(@RequestBody Blog blog) {
		blog.setBlogId(UUID.randomUUID().toString());
		return blogService.create(blog);
	}
	
	@PutMapping("/update")
	public Blog update(@RequestBody Blog blog) {
		
		return blogService.update(blog);
	}
	
	@DeleteMapping("/delete/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void deleteById(@PathVariable String id) {
		blogService.delete(id);
	}

}
