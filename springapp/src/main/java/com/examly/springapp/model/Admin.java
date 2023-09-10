package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin extends User {
@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long AdminId;
    private String email;
    private String password;
    private String mobileNumber;
    private String userRole;
    public Admin(){
        //TODO document why contructor is empty
    }

    public long getAdminId(){
        return AdminId;
    }

    public void setAdminId(Long adminId) {
        AdminId = adminId;
    }
    public String getEmail(){
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }
}

