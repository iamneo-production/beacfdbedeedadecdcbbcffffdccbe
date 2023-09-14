package com.examly.springapp.service;

import com.examly.springapp.model.Product;
import com.examly.springapp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    public List<Product> getAllAppointments() {
        return productRepository.findAll();
    }

    public boolean deleteAppointmentById(Long id) {
        Optional<Product> productOptional = productRepository.findById(id);
        if (productOptional.isPresent()) {
            productRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Optional < Product > findById(Long id) {
        return productRepository.findById(id);
    }

    @Override
    public void insertMultipleProducts() {
        for (int i = 0; i < 10; i++) {
            Product product = new Product();
            product.setProductName("Product " + i);
            product.setProductModelNo("Model " + i);
            product.setDateOfPurchase("2023-09-15");
            product.setMobileNumber("123456789" + i);
            product.setProductDescription("Description " + i);
            product.setAvailableSlots("1");

            productRepository.save(product);
        }
    }

}
