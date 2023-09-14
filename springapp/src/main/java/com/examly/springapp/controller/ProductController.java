package com.examly.springapp.controller;

import com.examly.springapp.model.Product;
import com.examly.springapp.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping("/appointment")
    public String add(@RequestBody Product product){
        productService.saveProduct(product);
        return "New Product Appointment created";

    }
}
