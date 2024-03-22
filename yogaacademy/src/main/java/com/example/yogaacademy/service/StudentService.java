package com.example.yogaacademy.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import com.example.yogaacademy.model.Student;
import com.example.yogaacademy.repository.StudentRepo;

@Service
public class StudentService {

    @Autowired
    StudentRepo studentRepo;

    public Student newStudent(@NonNull Student s)
    {
         return studentRepo.save(s);
    }

    public Iterable<Student>getAllStudent()
    {
        return studentRepo.findAll();
    }

    public Student updateStudent(@NonNull String email,Student student)
    {
         return studentRepo.findByEmail(email)
         .map(existingUser->{existingUser.setEmail(student.getEmail());
            existingUser.setName(student.getName());
            existingUser.setAddress((student.getAddress()));
            existingUser.setDob((student.getDob()));
            existingUser.setAge((student.getAge()));
            return studentRepo.save(existingUser);
        }).orElseThrow(()->new RuntimeException("Student not found with this email"));
    }

    public Optional<Student> getUser(@NonNull String email) //doubt
    {
        return studentRepo.findByEmail(email);
    }

    public void deleteUser(@NonNull Integer id)
    {
        studentRepo.deleteById(id);
    }

    
}
