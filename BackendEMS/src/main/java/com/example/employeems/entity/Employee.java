package com.example.employeems.entity;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int empId;
//    private String empName;
//    private String empAddress;
//    private String empMNumber;
//    private String empEmail;

    @Column(name = "emp_name", nullable = false, length = 100)
    private String empName; // Name with not-null constraint and max length

    @Column(name = "emp_address", length = 255)
    private String empAddress; // Address with max length

    @Column(name = "emp_m_number", nullable = false, unique = true, length = 15)
    private String empMNumber; // Mobile number, unique and not-null

    @Column(name = "emp_email", nullable = false, unique = true, length = 100)
    private String empEmail; // Email, unique and not-null
}
