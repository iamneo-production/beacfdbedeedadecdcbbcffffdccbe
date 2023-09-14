package com.examly.springapp.service;

import com.examly.springapp.model.Product;
import com.examly.springapp.model.ServiceCenter;
import org.springframework.stereotype.Service;

import java.security.Provider;
import java.util.List;
import java.util.Optional;

@Service
public interface ProductService {
    public Product saveProduct(Product product);
    public List<Product> getAllAppointments();
    public Optional <Product> findById(Long id);
    public boolean deleteAppointmentById(Long id);

    public void insertMultipleProducts();
}
