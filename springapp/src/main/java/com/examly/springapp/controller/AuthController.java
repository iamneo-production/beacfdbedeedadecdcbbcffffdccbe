package com.examly.springapp.controller;

import com.examly.springapp.model.User;
import com.examly.springapp.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/user/signup")
    public String userSignUp(@RequestBody User userData) {
        // User sign-up logic
        authService.saveUser(userData);
        return "New User has been added";
    }

    @PostMapping("/admin/signup")
    public String adminSignUp(@RequestBody User adminData) {
        // Admin sign-up logic
        authService.saveAdmin(adminData);
        return "New Admin has been added";
    }
}
