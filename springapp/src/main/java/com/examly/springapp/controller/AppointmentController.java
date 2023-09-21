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
@RequestMapping("/admin")
@CrossOrigin("*")
public class AppointmentController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private AuthRepository authRepository;

    @Autowired
    private ServiceCenterRepository serviceCenterRepository;
    
    @GetMapping("/total-products")
    public ResponseEntity<Long> getTotalProducts() {
        long totalProducts = productRepository.count(); // Count the records in the Product table
        return ResponseEntity.ok(totalProducts);
    }

    @GetMapping("/total-customers")
    public ResponseEntity<Long> getTotalCustomers(){
        long totalCustomers = authRepository.count();
        return ResponseEntity.ok(totalCustomers);
    }

    @GetMapping("/total-service-centers")
    public ResponseEntity<Long> getTotalServiceCenters(){
        long totalServiceCenters = serviceCenterRepository.count();
        return ResponseEntity.ok(totalServiceCenters);
    }
}
    