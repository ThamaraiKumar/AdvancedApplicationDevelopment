package com.example.yogaacademy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.yogaacademy.model.User;

public interface UserRepo extends JpaRepository<User,String>{
    
    
}
