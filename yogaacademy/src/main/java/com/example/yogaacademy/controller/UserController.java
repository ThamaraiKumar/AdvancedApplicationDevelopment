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

import com.example.yogaacademy.dto.UpdateRequest;
import com.example.yogaacademy.model.User;
import com.example.yogaacademy.service.UserService;



@RestController
@RequestMapping("/api/user")
public class UserController {

   @Autowired
   UserService userService;

    @GetMapping("/getAll/user")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Iterable<User> getAll()
    {
        return userService.getAllUser();
    }

    @PostMapping("/createUser")
    public ResponseEntity<User>createUser(@NonNull @RequestBody User u)
    {
        User createdUser=userService.createUser(u);
        return new ResponseEntity<>(createdUser,HttpStatus.CREATED);
    }

    @GetMapping("/getUser/{email}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<?> getUserByEmail(@NonNull @PathVariable String email)
    {
        Optional<User> user=userService.getUser(email);
        return user.map(value->new ResponseEntity<>(value,HttpStatus.OK))
        .orElseGet(()-> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @DeleteMapping("/deleteUser/{email}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public void removeUser(@NonNull @PathVariable String email)
    {
        userService.deleteUser(email);
    }
    @PutMapping("/updateUser/{email}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<User> updateUser(@NonNull @PathVariable String email,
     @RequestBody UpdateRequest update)
    {
        User updated=userService.updateUser(email,update);
        return new ResponseEntity<>(updated,HttpStatus.ACCEPTED);
    }
    
    
    
}
