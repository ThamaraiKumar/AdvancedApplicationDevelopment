package com.example.yogaacademy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.yogaacademy.model.Course;


@Repository
public interface CourseRepo extends JpaRepository<Course,Integer> {
    
}
