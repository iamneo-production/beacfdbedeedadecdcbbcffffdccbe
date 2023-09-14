package com.examly.springapp.controller;

import com.examly.springapp.model.ServiceCenter;
import com.examly.springapp.service.ServiceCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class ServiceCenterController {
    @Autowired
    private ServiceCenterService serviceCenterService;

    @PostMapping("/addServiceCenter")
    public String add(@RequestBody ServiceCenter serviceCenter){
        serviceCenterService.saveServiceCenter(serviceCenter);
        return "New Service Center Created";

    }
}
