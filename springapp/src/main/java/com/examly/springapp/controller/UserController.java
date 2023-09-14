package com.examly.springapp.controller;

import com.examly.springapp.model.Product;
import com.examly.springapp.model.ServiceCenter;
import com.examly.springapp.repository.ProductRepository;
import com.examly.springapp.repository.ServiceCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import javax.persistence.EntityNotFoundException;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController{
    @Autowired
    private ServiceCenterRepository serviceCenterRepository;
    private ProductRepository productRepository;

    @GetMapping("/dashboard/{cardId}")
    public ServiceCenter showDashboard(@PathVariable Long cardId, Model model) {
        // Fetch the specific service center based on cardId
        ServiceCenter serviceCenter = serviceCenterRepository.findById(cardId)
                .orElseThrow(() -> new EntityNotFoundException("Service center not found"));
        model.addAttribute("serviceCenter", serviceCenter);

        // Create an empty product object to bind to the form
        Product product = new Product();
        model.addAttribute("product", product);
        return serviceCenter;
    }

    @GetMapping("/appointment/{cardId}")
    public Product showProductForm(@PathVariable Long cardId, Model model) {
        // Fetch the specific service center based on cardId
        ServiceCenter serviceCenter = serviceCenterRepository.findById(cardId)
                .orElseThrow(() -> new EntityNotFoundException("Service center not found"));

        model.addAttribute("serviceCenter", serviceCenter);

        // Create an empty product object to bind to the form
        Product product = new Product();
        model.addAttribute("product", product);

        // Return the appointment form view with the selected service center
        return product;
    }
    // @PostMapping("/appointment")
    // public String submitAppointmentForm(@ModelAttribute("product") Product product) {
    //     // Save the appointment to the database
    //     productRepository.save(product);

    //     // Redirect to a success page or display a confirmation message
    //     return "sucess"; // You can create a success page or redirect as needed.
    // }

}