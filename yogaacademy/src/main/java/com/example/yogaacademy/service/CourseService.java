package com.example.yogaacademy.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.yogaacademy.model.Course;
import com.example.yogaacademy.repository.CourseRepo;

@Service
public class CourseService {

    @Autowired
    private CourseRepo courseRepo;

    public Iterable<Course>getAllCourse()
    {
        return courseRepo.findAll();
    }

    public Course creatCourse(@NonNull Course course)
    {
        return courseRepo.save(course);
    }
    public Course updatecourse(@NonNull Integer id,Course course)
    {
         return courseRepo.findById(id)
         .map(update->{update.setAcademy(course.getAcademy());
            update.setCoursename(course.getCoursename());
            update.setDescrption(course.getDescrption());
            update.setDuration(course.getDuration());
            return courseRepo.save(update);
        }).orElseThrow(()->new RuntimeException("Course Not Found with this id"));
    }

    public Optional<Course> getCourse(@NonNull Integer id) //doubt
    {
        return courseRepo.findById(id);
    }

    public void deletecourse(@NonNull Integer id)
    {
        courseRepo.deleteById(id);
    }
    
    
}
