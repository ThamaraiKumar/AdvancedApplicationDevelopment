package com.example.yogaacademy.dto;

import lombok.Builder;

@Builder
public class AuthResponse {
    private String token;
	private String emailid;
	private String role;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public void setRole(String role)
	{
		this.role=role;
	}
	public String getRole()
	{
		return role;
	}
    
}
