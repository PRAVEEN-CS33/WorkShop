package com.praveen.mobile_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.praveen.mobile_service.entity.Entities;

public interface Repository extends JpaRepository<Entities, Integer>{
	
	@Query(value="update Entities e set e.mobileNumber=333333 where e.sNo = :no")
	void saveAndFlushQuery(int no);
}
