package com.example.yogaacademy.configuration;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.example.yogaacademy.model.User;
import com.example.yogaacademy.repository.UserRepo;


@Component
public class UsersDetailsService implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;
    
    @Override
    public UserDetails loadUserByUsername(@NonNull String email) throws UsernameNotFoundException
    {
        Optional<User> userdetails=userRepo.findById(email);
        return userdetails.map(UsersDetails::new)
        .orElseThrow(()->new UsernameNotFoundException("User not found with this email "+ email));
    }
    
}
