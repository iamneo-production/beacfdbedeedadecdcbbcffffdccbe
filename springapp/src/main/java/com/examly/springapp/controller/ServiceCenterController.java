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

    @DeleteMapping("/deleteServiceCenter/{userId}")
    public ResponseEntity<String> deleteServiceCenterById(@PathVariable Long userId) {
        if (serviceCenterService.deleteServiceCenterById(userId)) {
            return ResponseEntity.ok("Service Center deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/editServiceCenter/{serviceCenterId}")
    public ResponseEntity<ServiceCenter> editServiceCenter(@PathVariable Long userId, @RequestBody ServiceCenter updatedServiceCenter) {
    ServiceCenter existingServiceCenter = serviceCenterService.getServiceCenterById(userId);
        if (existingServiceCenter == null) {
             return ResponseEntity.notFound().build();
        }
     // Update the serviceCenter object with the new data
        existingServiceCenter.setServiceCenterName(updatedServiceCenter.getServiceCenterName());
        existingServiceCenter.setServiceCenterPhone(updatedServiceCenter.getServiceCenterPhone());
        existingServiceCenter.setServiceCenterAddress(updatedServiceCenter.getServiceCenterAddress());
        existingServiceCenter.setServiceCenterImageUrl(updatedServiceCenter.getServiceCenterImageUrl());
        existingServiceCenter.setServiceCenterPrice(updatedServiceCenter.getServiceCenterPrice());
        existingServiceCenter.setServiceCenterTimings(updatedServiceCenter.getServiceCenterTimings());
        existingServiceCenter.setServiceCenterEmailId(updatedServiceCenter.getServiceCenterEmailId());
        existingServiceCenter.setServiceCenterDescription(updatedServiceCenter.getServiceCenterDescription());
     // Update other fields as needed
    
     ServiceCenter updatedServiceCenterInfo = serviceCenterService.saveServiceCenter(existingServiceCenter);
     return ResponseEntity.ok(updatedServiceCenterInfo);
 }
}
