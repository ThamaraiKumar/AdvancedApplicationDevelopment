package com.example.yogaacademy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.yogaacademy.model.Academy;
import com.example.yogaacademy.repository.AcademyRepo;

@Service
public class AcademyService {

    @Autowired
    private AcademyRepo academyRepo;

    public Academy createNewAcademy(@NonNull Academy academy)
    {
        return academyRepo.save(academy);
    }
    public Optional<Academy> getAcademy(@NonNull Integer id)
    {
        return academyRepo.findById(id);
    }
    public List<Academy> getAllAcademies()
    {
        return academyRepo.findAll();
    }
    public void deleteAcademy(@NonNull Integer id)
    {
        academyRepo.deleteById(id);
    }

    public Academy updateAcademy(@NonNull Integer id ,Academy academy)
    {
        return academyRepo.findById(id)
        .map(changes->{changes.setAcademyname(academy.getAcademyname());
            changes.setContactnumber(academy.getContactnumber());
            changes.setEmail(academy.getEmail());
            changes.setImageurl(academy.getImageurl());
            changes.setLocation(academy.getLocation());
            return academyRepo.save(changes);
        }).orElseThrow(()->new RuntimeException("No Academy found for updation"));
    }
}
