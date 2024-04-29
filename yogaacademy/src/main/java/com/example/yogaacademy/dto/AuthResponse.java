package com.example.yogaacademy.dto;

import lombok.Builder;

@Builder
public class AuthResponse {
    private String token;
	private String email;
	private String role;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
