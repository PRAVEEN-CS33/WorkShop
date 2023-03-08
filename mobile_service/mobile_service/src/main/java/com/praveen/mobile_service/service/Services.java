package com.praveen.mobile_service.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.praveen.mobile_service.entity.Entities;
import com.praveen.mobile_service.repository.Repository;

@Service
public class Services {
	@Autowired
	private Repository repo;
	
	public List<Entities> getByName(String name) {
		return repo.findAll(Sort.by(Sort.Direction.ASC,name));
	}

	public Entities saveDetails(Entities s) {
		return repo.save(s);
	}

	public void updatedetail(int no) {
		repo.saveAndFlushQuery(no);
	}

	public int deletedetail(int s) {
		repo.deleteById(s);
		return s;
	}

	public List<Entities> getdetail() {
		return repo.findAll();
	}

}
