package com.example.yogaacademy.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="academy")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Academy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String academyname;
    private String location;
    private String imageurl;
    private String email;
    private String contactnumber;

}
