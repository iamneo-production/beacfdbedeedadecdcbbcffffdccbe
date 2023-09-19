package com.examly.springapp.controller;

import com.examly.springapp.model.Product;
import com.examly.springapp.model.User;
import com.examly.springapp.service.ProductService;
import com.examly.springapp.model.ServiceCenter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.examly.springapp.repository.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import javax.persistence.*;


@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private ProductService productService;
    @Autowired
    private AuthRepository authRepository;
    @Autowired
    private ServiceCenterRepository serviceCenterRepository;
    
    @Autowired
    public ProductController(AuthRepository authRepository, ProductService productService){
        this.productService= productService;
        this.authRepository = authRepository;
    }

    @PostMapping("/appointment/{userId}/{serviceCenterId}")
    public ResponseEntity<String> add(@RequestBody Product product, @PathVariable Long userId, @PathVariable Long serviceCenterId){
        User user = authRepository.findById(userId).orElse(null);
        ServiceCenter serviceCenter = serviceCenterRepository.findById(serviceCenterId).orElse(null);
        if(user != null){
            product.setUser(user);
            product.setServiceCenter(serviceCenter);
            product.setServiceCenterName(serviceCenter.getServiceCenterName());
            System.out.println("Received Product Data: " + product.toString());
            // Save the Product
            productService.saveProduct(product);
            return ResponseEntity.ok("New Product Appointment created");
        } else {
            return ResponseEntity.badRequest().body("User not found.");
        }
    }

    @DeleteMapping("/cancelappointment/{id}")
    public ResponseEntity<String> deleteAppointmentById(@PathVariable Long id) {
        if (productService.deleteAppointmentById(id)) {
            return ResponseEntity.ok("Appointment deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/editappointment/{id}")
    public ResponseEntity<Product> editAppointment(@PathVariable Long id, @RequestBody Product updatedProduct) {
        Product existingProduct = productService.getProductById(id);
        if (existingProduct == null) {
            return ResponseEntity.notFound().build();
        }
        // Update the appointment object with the new data
        existingProduct.setProductName(updatedProduct.getProductName());
        existingProduct.setProductModelNo(updatedProduct.getProductModelNo());
        existingProduct.setDateOfPurchase(updatedProduct.getDateOfPurchase());
        existingProduct.setMobileNumber(updatedProduct.getMobileNumber());
        existingProduct.setProductDescription(updatedProduct.getProductDescription());
        existingProduct.setAvailableSlots(updatedProduct.getAvailableSlots());
        // Update other fields as needed
        Product updatedProductInfo = productService.saveProduct(existingProduct);
        return ResponseEntity.ok(updatedProductInfo);
    }

    @GetMapping("/getappointments/{userId}")
    public ResponseEntity<List<Product>> getAppointmentsByUserId(@PathVariable Long userId) {
        List<Product> appointments = productService.getAppointmentsByUserId(userId);
        if (!appointments.isEmpty()) {
            return ResponseEntity.ok(appointments);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
