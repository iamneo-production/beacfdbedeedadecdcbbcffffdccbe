package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
import java.sql.Time;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String productId;
    private String productName;
    private String productModelNo;
    private Date dateOfPurchase;
    private String contactNumber;
    private String problemDescription;
    private Time availableSlots;

    // Constructors
    public Product() {
        // Default constructor
    }

    public Product(String productName, String productModelNo, Date dateOfPurchase,
                   String contactNumber, String problemDescription, Time availableSlots) {
        this.productName = productName;
        this.productModelNo = productModelNo;
        this.dateOfPurchase = dateOfPurchase;
        this.contactNumber = contactNumber;
        this.problemDescription = problemDescription;
        this.availableSlots = availableSlots;
    }

    // Getters and setters
    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductModelNo() {
        return productModelNo;
    }

    public void setProductModelNo(String productModelNo) {
        this.productModelNo = productModelNo;
    }

    public Date getDateOfPurchase() {
        return dateOfPurchase;
    }

    public void setDateOfPurchase(Date dateOfPurchase) {
        this.dateOfPurchase = dateOfPurchase;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getProblemDescription() {
        return problemDescription;
    }

    public void setProblemDescription(String problemDescription) {
        this.problemDescription = problemDescription;
    }

    public Time getAvailableSlots() {
        return availableSlots;
    }

    public void setAvailableSlots(Time availableSlots) {
        this.availableSlots = availableSlots;
    }
}
