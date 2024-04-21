package com.example.yogaacademy.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.yogaacademy.model.Academy;
import com.example.yogaacademy.service.AcademyService;

@RestController
@CrossOrigin
@RequestMapping("/api/academy")
public class AcademyController {

    @Autowired
    private AcademyService academyService;

    @GetMapping("/getAll/Academies")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public List<Academy>getAllAcademies()
    {
        return academyService.getAllAcademies();
    }

    @GetMapping("/getbyAcademy/{id}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<?> getAcademy(@NonNull @PathVariable Integer id)
    {
        Optional<Academy> academy=academyService.getAcademy(id);
        return academy.map(value-> new ResponseEntity<>(value,HttpStatus.FOUND))
        .orElseGet(()->new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/create/Academy")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Academy> createNewAcademy(@NonNull @RequestBody Academy academy)
    {
        Academy newAcademy=academyService.createNewAcademy(academy);
        return new ResponseEntity<>(newAcademy,HttpStatus.CREATED);
    }

    @DeleteMapping("/remove/academy/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void reoveAcademy(@NonNull @PathVariable Integer id)
    {
        academyService.deleteAcademy(id);
    }

    @PutMapping("/updateAcademy/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Academy> updateAcademy(@NonNull @PathVariable Integer id ,
     @RequestBody Academy update)
    {
        Academy updated=academyService.updateAcademy(id,update);
        return new ResponseEntity<>(updated,HttpStatus.ACCEPTED);
    }
    
}
