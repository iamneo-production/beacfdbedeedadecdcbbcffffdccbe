package com.examly.springapp.controller;

import com.examly.springapp.model.User;
import com.examly.springapp.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/user/signup")
    public String userSignUp(@RequestBody User user) {
        // User sign-up logic
        authService.saveUser(user);
        return "New User has been added";
    }

    @PostMapping("/admin/signup")
    public String adminSignUp(@RequestBody User adminUser) {
        // Admin sign-up logic
        authService.saveAdmin(adminUser);
        return "New Admin has been added";
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
