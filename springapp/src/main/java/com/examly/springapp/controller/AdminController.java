package com.examly.springapp.controller;

import com.examly.springapp.model.Product;
import com.examly.springapp.model.ServiceCenter;
import com.examly.springapp.service.ProductService;
import com.examly.springapp.service.ServiceCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;
import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {
    @Autowired
    private ProductService productService;
    @Autowired
    private ServiceCenterService serviceCenterService;

    @GetMapping("/appointment")
    public ResponseEntity<List<Product>> getAllAppointments() {
        List<Product> products = productService.getAllAppointments();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/service-center")
    public ResponseEntity<List<ServiceCenter>> getAllServiceCenters() {
        List<ServiceCenter> serviceCenters = serviceCenterService.getAllServiceCenters();
        return ResponseEntity.ok(serviceCenters);
    }

    @GetMapping("/appointment/{id}")
    public ResponseEntity<?> getAppointmentById(@PathVariable Long id) {
        Optional<Product> optionalProduct = productService.findById(id);
        
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/service-center/{id}")
    public ResponseEntity<?> getServiceById(@PathVariable Long id){
        Optional<ServiceCenter> optionalServiceCenter = serviceCenterService.findById(id);
        if(optionalServiceCenter.isPresent()){
            ServiceCenter serviceCenter = optionalServiceCenter.get();
            return ResponseEntity.ok(serviceCenter);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
