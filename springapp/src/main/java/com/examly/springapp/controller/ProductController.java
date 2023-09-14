package com.examly.springapp.controller;

import com.examly.springapp.model.Product;
import com.examly.springapp.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping("/appointment")
    public String add(@RequestBody Product product){
        productService.saveProduct(product);
        return "New Product Appointment created";
    }

    @DeleteMapping("/cancelappointment/{id}")
    public ResponseEntity<String> deleteAppointmentById(@PathVariable Long id) {
        if (productService.deleteAppointmentById(id)) {
            return ResponseEntity.ok("Appointment deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
