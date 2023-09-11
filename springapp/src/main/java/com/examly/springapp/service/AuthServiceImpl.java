package com.examly.springapp.service;

import com.examly.springapp.model.User;
import com.examly.springapp.repository.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService{
    @Autowired
    private AuthRepository authRepository;

    @Override
    public User saveUser(User user){
        return authRepository.save(user);
    }
    @Override
    public User saveAdmin(User adminUser){
        return authRepository.save(adminUser);
    }
    @Override
    public Optional<User> getUserByEmailAndPassword(String email, String password) {
        return authRepository.findByEmailAndPassword(email, password);
    }
    @Override
    public Optional<User> getAdminByEmailAndPassword(String email, String password) {
        return authRepository.findByEmailAndPasswordAndUserRole(email, password, "admin");
    }
    @Override
    public List<User> getAllUsers(){
        return authRepository.findAll();
    }
}
