package com.example.yogaacademy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.yogaacademy.model.Academy;

@Repository
public interface AcademyRepo extends JpaRepository<Academy,Integer> {
    
}
