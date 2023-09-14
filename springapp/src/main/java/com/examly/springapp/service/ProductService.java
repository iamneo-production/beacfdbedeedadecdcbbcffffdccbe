package com.examly.springapp.service;

import com.examly.springapp.model.Product;
import com.examly.springapp.model.ServiceCenter;
import org.springframework.stereotype.Service;

import java.security.Provider;
@Service
public interface ProductService {
    public Product saveProduct(Product product);
}
