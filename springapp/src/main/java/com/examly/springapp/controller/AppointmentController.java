package com.examly.springapp.controller;

import com.examly.springapp.model.Product;
import com.examly.springapp.model.User;
import com.examly.springapp.service.ProductService;
import com.examly.springapp.service.ServiceCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.persistence.*;
import java.util.*;


@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class AppointmentController{
    @Autowired
    private ProductService productService;
    @Autowired
    private ServiceCenterService serviceCenterService;


    @GetMapping("/appointments/user/{userId}")
    public ResponseEntity<List<Product>> getAppointmentsByUserId(@PathVariable Long userId) {
    List<Product> userAppointments = productService.getAppointmentsByUserId(userId);
    return ResponseEntity.ok(userAppointments);
}
}
