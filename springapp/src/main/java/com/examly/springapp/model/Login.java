package com.examly.springapp.model;

public class Login {
    private String loginId;
    private String email;
    private String password;

    public Login() {
        // Default constructor
    }

    public Login(String loginId, String email, String password) {
        this.loginId = loginId;
        this.email = email;
        this.password = password;
    }

    public String getLoginId() {
        return loginId;
    }

    public void setLoginId(String loginId) {
        this.loginId = loginId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
