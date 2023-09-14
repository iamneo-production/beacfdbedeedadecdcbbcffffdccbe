package com.examly.springapp.controller;

import com.examly.springapp.model.User;
import com.examly.springapp.repository.ServiceCenterRepository;
import com.examly.springapp.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.swing.text.html.Option;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/auth")

public class AuthController {
    @Autowired
    private AuthService authService;

    @Autowired
    private ServiceCenterRepository serviceCenterRepository;

    @PostMapping("/user/signup")
    public ResponseEntity<String> signup(@RequestBody User user) {
        //Check if the email already exists in the user table
        if (authService.getUserByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.ok("Email already exists");
        }
        // If the email doesn't exist, proceed with user registration
        else{
            authService.saveUser(user);
            return ResponseEntity.ok("New User has been added");
        }
    }


    @PostMapping("/admin/signup")
    public ResponseEntity<String> adminSignup(@RequestBody User adminUser) {
        if (authService.getUserByEmail(adminUser.getEmail()).isPresent()) {
            return ResponseEntity.ok("Email already exists");
        } else {
            authService.saveUser(adminUser);
            return ResponseEntity.ok("New Admin User has been added");
        }
    }



    @PostMapping("/user/login")
    public ResponseEntity<Map<String, String>> userLogin(@RequestBody User loginUser){
        Optional<User> user=authService.getUserByEmailAndPassword(loginUser.getEmail(),
                loginUser.getPassword());
        Map<String,String> response = new HashMap<>();
        if(user.isPresent()){
            response.put("userId", user.get().getUserId().toString());
            return ResponseEntity.ok(response);
        } else {
            response.put("userId", "Not Found");
            return ResponseEntity.ok(response);
        }
    }

    @PostMapping("/admin/login")
    public ResponseEntity<Map<String, String>> adminLogin(@RequestBody User adminLoginUser){
        Optional<User> adminUser = authService.getAdminByEmailAndPassword(adminLoginUser.getEmail(), adminLoginUser.getPassword());
        Map<String, String> response = new HashMap<>();
        if(adminUser.isPresent()){
            response.put("userId", adminUser.get().getUserId().toString());
            return ResponseEntity.ok(response);
        } else {
            response.put("userId", "Not Found");
            return ResponseEntity.ok(response);
        }

    }
    @GetMapping("/user/getAll")
    public List<User> getAllUsers(){
        return authService.getAllUsers();
    }
}
