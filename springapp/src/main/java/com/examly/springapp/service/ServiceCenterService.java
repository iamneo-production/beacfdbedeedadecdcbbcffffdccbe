package com.examly.springapp.service;

import com.examly.springapp.model.ServiceCenter;
import org.springframework.stereotype.Service;

import java.security.Provider;
@Service
public interface ServiceCenterService {
    public ServiceCenter saveServiceCenter(ServiceCenter serviceCenter);
}
