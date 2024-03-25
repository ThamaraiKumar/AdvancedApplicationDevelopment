package com.example.yogaacademy.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.yogaacademy.dto.UpdateRequest;
import com.example.yogaacademy.model.User;
import com.example.yogaacademy.repository.UserRepo;



@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Iterable<User>getAllUser()
    {
        return userRepo.findAll();
    }

    public User createUser(@NonNull User user)  //can used as void return type
    {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }

    public User updateUser(@NonNull String email,UpdateRequest updateRequest)
    {
         return userRepo.findById(email)
         .map(existingUser->{existingUser.setEmail(updateRequest.getEmail());
            existingUser.setPassword(passwordEncoder.encode(updateRequest.getPassword()));
            return userRepo.save(existingUser);
        }).orElseThrow(()->new RuntimeException("User not found"));
    }

    public Optional<User> getUser(@NonNull String email) //doubt
    {
        return userRepo.findById(email);
    }

    public void deleteUser(@NonNull String email)
    {
        userRepo.deleteById(email);
    }

    
}
