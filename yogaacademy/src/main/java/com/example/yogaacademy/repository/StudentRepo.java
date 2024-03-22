package com.example.yogaacademy.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.yogaacademy.model.Student;


@Repository
public interface StudentRepo  extends JpaRepository<Student,Integer> {

    public Optional<Student> findByEmail(String email);
    
}
