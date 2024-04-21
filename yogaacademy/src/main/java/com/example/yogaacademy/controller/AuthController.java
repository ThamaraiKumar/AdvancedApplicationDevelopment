package com.example.yogaacademy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.yogaacademy.dto.AuthRequest;
import com.example.yogaacademy.dto.AuthResponse;
import com.example.yogaacademy.service.JwtService;
import com.example.yogaacademy.service.UserService;



@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/homepage")
    public String Home()
    {
        return "!....Initial Page Rendering....!";
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticateAndGetToken(@RequestBody AuthRequest authRequest)
    {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            String token=jwtService.generateToken(authRequest.getEmail());
            String role = userService.getRoleForUser(authRequest.getEmail());
            AuthResponse response=AuthResponse.builder()
            .token(token)
            .emailid(authRequest.getEmail())
            .role(role)
            .build();
            return ResponseEntity.ok(response);
        } else {
            throw new UsernameNotFoundException("Invalid user!");
        }
    }

    
}
