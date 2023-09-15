package com.examly.springapp.controller;

import com.examly.springapp.model.Product;
import com.examly.springapp.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import javax.persistence.*;


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

    @PutMapping("/editappointment/{id}")
    public ResponseEntity<Product> editAppointment(@PathVariable Long id, @RequestBody Product updatedProduct) {
        Product existingProduct = ProductService.getProductById(productId);
        if (existingProduct == null) {
            return ResponseEntity.notFound().build();
        }
        // Update the appointment object with the new data
        existingProduct.setProductName(updatedProduct.getProductName());
        existingProduct.setProductModelNo(updatedProduct.getProductModelNo());
        existingProduct.setDateOfPurchase(updatedProduct.getDateOfPurchase());
        existingProduct.setMobileNumber(updatedProduct.getMobileNumber());
        existingProduct.setproductDescription(updatedProduct.getProductDescription());
        existingProduct.setAvailableSlots(updatedProduct.getAvailableSlots());
        // Update other fields as needed
        Product updatedProductInfo = productService.saveProduct(existingProduct);
        return ResponseEntity.ok(updatedProductInfo);
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
