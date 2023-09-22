import React, { useState, useEffect, useRef } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Modal } from "@mui/material";

export default function Register() {
  const navigate = useNavigate();
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    userRole: "",
    email: "",
    username: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    userRole: "",
    email: "",
    username: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // To clear the error message when the user starts to type
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleConfirmation = () => {
    console.log("handleConfirmation called");
    setSuccessModalOpen(true);
    setTimeout(() => {
      setSuccessModalOpen(false);
      navigate("/login");
    }, 3500); // Close the modal and navigate after 3.5 seconds
  };

  const sendDataToDatabase = async () => {
    let apiUrl = "";

    if (formData.userRole === "admin") {
      apiUrl =
        "https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/auth/admin/signup";
    } else if (formData.userRole === "user") {
      apiUrl =
        "https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/auth/user/signup";
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        const responseText = await response.text();
        console.error("Response Text:", responseText);
        return;
      }

      const data = await response.json();
      console.log("New User Added:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (event) => {
    console.log("handleSubmit called");
    event.preventDefault();

    // Basic Validation Rules
    let isValid = true;
    const userRoleLower = formData.userRole.toLowerCase();
    if (formData.userRole.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userRole: "Please Select Admin/User",
      }));
      isValid = false;
    }
    if (
      formData.userRole !== "admin" &&
      formData.userRole !== "user" &&
      formData.userRole !== "Admin" &&
      formData.userRole !== "User"
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userRole: "Please select either Admin or User",
      }));
      isValid = false;
    }
    if (formData.email.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      isValid = false;
    } else if (!formData.email.includes("@")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
      isValid = false;
    }
    if (formData.username.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username is required",
      }));
      isValid = false;
    }
    if (formData.mobileNumber.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobileNumber: "Mobile Number is required",
      }));
      isValid = false;
    }
    if (formData.mobileNumber.length < 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobileNumber: "Incorrect Mobile Number. Please enter 10 digits",
      }));
      isValid = false;
    }
    if (formData.password.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      isValid = false;
    }
    if (formData.password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters long",
      }));
      isValid = false;
    }
    if (formData.confirmPassword.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Please retype your Password",
      }));
      isValid = false;
    }
    if (formData.confirmPassword !== formData.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Please re-enter the password",
      }));
      isValid = false;
    }
    if (formData.confirmPassword.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Password must be at least 6 characters long",
      }));
      isValid = false;
    }
    if (isValid) {
      handleConfirmation();
      sendDataToDatabase();
    }
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "110vh",
        height: "85vh", // Set the container height to fill the viewport
        marginTop: "auto", // Move the container to the top of the viewport
      }}
    >
      <Box
        sx={{
          // marginTop: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <div
          style={{
            maxHeight: "300px", // Set the max height for scrolling content
            overflowY: "auto", // Enable vertical scrolling
          }}
        ></div>
        <form noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userRole"
            label="Enter Admin/User"
            name="userRole"
            autoComplete="userRole"
            autoFocus
            value={formData.userRole}
            onChange={handleChange}
            error={!!errors.userRole}
            helperText={errors.userRole}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter Email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Enter Username"
            name="username"
            autoComplete="username"
            value={formData.username}
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="mobileNumber"
            label="Mobile Number"
            name="mobileNumber"
            autoComplete="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            error={!!errors.mobileNumber}
            helperText={errors.mobileNumber}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            autoComplete="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{ backgroundColor: "black" }}
            onClick={handleSubmit}
          >
            Register
          </Button>

          <RouterLink to="/login">
            Already have an account? Login here
          </RouterLink>
        </form>
        {/* Success Modal */}
        <Modal
          open={successModalOpen}
          onClose={() => setSuccessModalOpen(false)}
          aria-labelledby="successful-registration-modal"
          aria-describedby="successful-registration-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              boxShadow: 24,
              p: 4,
              maxWidth: "80%",
              textAlign: "center",
              display: "flex",
              flexDirection: "column", // Ensure the content is stacked vertically
              alignItems: "center", // Center the content horizontally
              color:"white",
              backgroundColor: '#79e63e', // Change 'your-color-here' to the color you want
            }}
          >
            <Typography id="successful-registration-modal" variant="h4">
              <strong>Successful Registration</strong>
            </Typography>
            <Typography id="successful-registration-description" sx={{ mt: 2 }}>
              <strong>You have been successfully registered. Redirecting to login
              page...</strong>
            </Typography>
          </Box>
        </Modal>
      </Box>
    </Container>
  );
}
