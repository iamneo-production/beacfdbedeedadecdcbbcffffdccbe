package com.examly.springapp.service;

import com.examly.springapp.model.ServiceCenter;
import com.examly.springapp.repository.ServiceCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ServiceCenterServiceImpl implements ServiceCenterService{
    @Autowired
    private ServiceCenterRepository serviceCenterRepository;
    @Override
    public ServiceCenter saveServiceCenter(ServiceCenter serviceCenter){
        return serviceCenterRepository.save(serviceCenter);
    }
    @Override
    public List<ServiceCenter> getAllServiceCenters() {
        return serviceCenterRepository.findAll();
    }
    @Override
    public Optional < ServiceCenter > findById(Long id) {
        return serviceCenterRepository.findById(id);
    }
}
