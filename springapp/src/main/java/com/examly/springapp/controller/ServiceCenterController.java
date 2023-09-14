package com.examly.springapp.controller;

import com.examly.springapp.model.ServiceCenter;
import com.examly.springapp.service.ServiceCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import javax.persistence.*;


@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class ServiceCenterController {
    @Autowired
    private ServiceCenterService serviceCenterService;

    @PostMapping("/addServiceCenter")
    public String add(@RequestBody ServiceCenter serviceCenter){
        serviceCenterService.saveServiceCenter(serviceCenter);
        return "New Service Center Created";
    }

    @DeleteMapping("/deleteServiceCenter/{id}")
    public ResponseEntity<String> deleteServiceCenterById(@PathVariable Long id) {
        if (serviceCenterService.deleteServiceCenterById(id)) {
            return ResponseEntity.ok("Service Center deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/editServiceCenter/{id}")
    public ResponseEntity<ServiceCenter> updateServiceCenter(@PathVariable Long id, @RequestBody ServiceCenter updatedServiceCenter) {
    ServiceCenter serviceCenter = serviceCenterService.getServiceCenterById(id);
    
    if (serviceCenter == null) {
        return ResponseEntity.notFound().build();
    }
    
    // Update the serviceCenter object with the new data
    serviceCenter.setName(updatedServiceCenter.getName());
    serviceCenter.setAddress(updatedServiceCenter.getAddress());
    // Update other fields as needed
    
    ServiceCenter updatedCenter = serviceCenterService.saveServiceCenter(serviceCenter);
    return ResponseEntity.ok(updatedCenter);
}
}
