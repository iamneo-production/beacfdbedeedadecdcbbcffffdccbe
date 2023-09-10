package com.examly.springapp.service;

import com.examly.springapp.model.User;
import com.examly.springapp.repository.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public abstract class AuthServiceImpl implements AuthService{
    @Autowired
    private AuthRepository authRepository;
    @Override
    public User saveUser(User user){
        return authRepository.save(user);
    }
    @Override
    public List<User> getAllUsers(){
        return authRepository.findAll();
    }
}
