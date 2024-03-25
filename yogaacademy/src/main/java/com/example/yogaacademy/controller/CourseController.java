package com.example.yogaacademy.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.yogaacademy.model.Course;
import com.example.yogaacademy.service.CourseService;

@RestController
@RequestMapping("/api/course")
public class CourseController {

    @Autowired
    private CourseService courseService;


    @GetMapping("/getAllCourse")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public Iterable<Course>getAllCourse()
    {
        return courseService.getAllCourse();
    }

    @GetMapping("/getCourse/{id}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<?> getStudent(@NonNull @PathVariable Integer id)
    {
        Optional<Course> course=courseService.getCourse(id);
        return course.map(value-> new ResponseEntity<>(value,HttpStatus.FOUND))
        .orElseGet(()->new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/new/course")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Course> createNewCourse(@NonNull @RequestBody Course course)
    {
        Course newcourse=courseService.creatCourse(course);
        return new ResponseEntity<>(newcourse,HttpStatus.CREATED);
    }

    @DeleteMapping("/remove/course/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void reoveAcademy(@NonNull @PathVariable Integer id)
    {
       courseService.deletecourse(id);
    }

    @PutMapping("/update/course/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Course> updateStudent(@NonNull @PathVariable Integer id,
     @RequestBody Course course)
    {
        Course updated=courseService.updatecourse(id,course);
        return new ResponseEntity<>(updated,HttpStatus.ACCEPTED);
    }

    
}
