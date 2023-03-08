package com.praveen.mobile_service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.praveen.mobile_service.entity.Entities;
import com.praveen.mobile_service.service.Services;


@RestController
public class Controller {
	@Autowired
	private Services service;
	
	@GetMapping("/get")
	public List<Entities> getdetail()
	{
		return  service.getdetail();
	}
	@GetMapping("/getByname/{name}")
	public List<Entities> getdetails(@PathVariable String name)
	{
		List<Entities> sorted =  service.getByName(name);
		return sorted;
	}
	@PostMapping("/post")
	public String postlibs (@RequestBody Entities s)
	{
		service.saveDetails(s);
		return "Value added";
	}
	@PutMapping("/update/{No}")
	public String update(@PathVariable int no)
	{
		service.deletedetail(no);
		return "Value updated";
	}
	@DeleteMapping("/delete/{s}")
	public String deletelibs (@PathVariable int s)
	{
		service.deletedetail(s);
		return "Value deleted";
	}
}
