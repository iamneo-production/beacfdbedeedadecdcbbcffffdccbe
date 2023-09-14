package com.examly.springapp.controller;

import com.examly.springapp.model.ServiceCenter;
import com.examly.springapp.service.ServiceCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


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
}
