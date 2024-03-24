package com.example.yogaacademy.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="userdetail")
public class User {

    @Id
    private String email;
    private String name;
    private String password;
    private String mobilenumber;
    private String role;  
}
