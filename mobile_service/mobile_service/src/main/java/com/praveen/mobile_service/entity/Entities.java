package com.praveen.mobile_service.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="mobileService")

public class Entities {

	@Id
	@GeneratedValue
	private int sNo;
	private String name;
	private int mobileNumber;
	private String mobileBrand;
	private String mobileName;
	private String complaintType;
	private String problem;
	
	public Entities() {}
	
	public Entities(int sNo, String name, int mobileNumber, String complaintType, String mobileBrand, String mobileName,
			String problem) {
		super();
		this.sNo = sNo;
		this.name = name;
		this.mobileNumber = mobileNumber;
		this.complaintType = complaintType;
		this.mobileBrand = mobileBrand;
		this.mobileName = mobileName;
		this.problem = problem;
	}
	
	public int getsNo() {
		return sNo;
	}
	public void setsNo(int sNo) {
		this.sNo = sNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(int mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getcomplaintType() {
		return complaintType;
	}
	public void setcomplaintType(String complaintType) {
		this.complaintType = complaintType;
	}
	public String getMobileBrand() {
		return mobileBrand;
	}
	public void setMobileBrand(String mobileBrand) {
		this.mobileBrand = mobileBrand;
	}
	public String getMobileName() {
		return mobileName;
	}
	public void setMobileName(String mobileName) {
		this.mobileName = mobileName;
	}
	public String getProblem() {
		return problem;
	}
	public void setProblem(String problem) {
		this.problem = problem;
	}
}
