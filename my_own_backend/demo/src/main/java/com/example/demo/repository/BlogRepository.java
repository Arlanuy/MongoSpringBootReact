package com.example.demo.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public class BlogRepository extends MongoRepository<Blog, String>{
	
}e
