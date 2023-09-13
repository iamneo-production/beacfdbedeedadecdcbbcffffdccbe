package com.examly.springapp.service;

import com.examly.springapp.model.User;
import java.util.List;
import java.util.Optional;

public interface AuthService {
    User saveUser(User user);
    User saveAdmin(User adminUser);
    Optional<User> getUserByEmailAndPassword(String email, String password);
    Optional<User> getAdminByEmailAndPassword(String email, String password);
    Optional<User> getUserByEmail(String email);
    List<User> getAllUsers();
}
