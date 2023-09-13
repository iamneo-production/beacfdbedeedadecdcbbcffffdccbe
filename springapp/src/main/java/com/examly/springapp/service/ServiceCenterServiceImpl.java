package com.examly.springapp.service;

import com.examly.springapp.model.ServiceCenter;
import com.examly.springapp.repository.ServiceCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceCenterServiceImpl implements ServiceCenterService{

    @Autowired
    private ServiceCenterRepository serviceCenterRepository;

    @Override
    public ServiceCenter saveServiceCenter(ServiceCenter serviceCenter){
        return serviceCenterRepository.save(serviceCenter);
    }
}
