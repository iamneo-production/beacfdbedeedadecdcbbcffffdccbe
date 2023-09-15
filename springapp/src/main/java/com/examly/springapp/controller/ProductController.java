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
    public ResponseEntity<Appointment> editAppointment(@PathVariable Long id, @RequestBody Appointment updatedAppointment) {
        Appointment appointment = appointmentService.getAppointmentById(id);
        if (appointment == null) {
            return ResponseEntity.notFound().build();
        }
        // Update the appointment object with the new data
        appointment.setAppointmentDate(updatedAppointment.getAppointmentDate());
        appointment.setAppointmentTime(updatedAppointment.getAppointmentTime());
        appointment.setAppointmentDescription(updatedAppointment.getAppointmentDescription());
        // Update other fields as needed
        Appointment updatedAppointmentData = appointmentService.saveAppointment(appointment);
        return ResponseEntity.ok(updatedAppointmentData);
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
