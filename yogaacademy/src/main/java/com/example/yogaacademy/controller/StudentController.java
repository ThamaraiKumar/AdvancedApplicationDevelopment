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

import com.example.yogaacademy.model.Student;
import com.example.yogaacademy.service.StudentService;

@RestController
@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/getAllStudents")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Iterable<Student>getAllStudent()
    {
        return studentService.getAllStudent();
    }

    @GetMapping("/getStudent/{id}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<?> getStudent(@NonNull @PathVariable String email)
    {
        Optional<Student> student=studentService.getStudent(email);
        return student.map(value-> new ResponseEntity<>(value,HttpStatus.FOUND))
        .orElseGet(()->new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/new/student")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<Student> createNewStudent(@NonNull @RequestBody Student student)
    {
        Student newstudent=studentService.newStudent(student);
        return new ResponseEntity<>(newstudent,HttpStatus.CREATED);
    }

    @DeleteMapping("/remove/Student/{id}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public void reoveAcademy(@NonNull @PathVariable Integer id)
    {
       studentService.deleteStudent(id);
    }

    @PutMapping("/update/student/{id}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<Student> updateStudent(@NonNull @PathVariable String email,
     @RequestBody Student student)
    {
        Student updated=studentService.updateStudent(email,student);
        return new ResponseEntity<>(updated,HttpStatus.ACCEPTED);
    }
    
}
