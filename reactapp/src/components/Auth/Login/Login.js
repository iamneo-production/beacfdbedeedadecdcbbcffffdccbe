import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Login() {
  const { userId, serviceCenterId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userRole: "user", // Default to "User"
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userRole: "",
    email: "",
    password: "",
  });

  const [redirectTo, setRedirectTo] = useState(""); // State to hold the redirection URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error message when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleUserRoleChange = (e) => {
    setFormData({
      ...formData,
      userRole: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation rules
    let isValid = true;

    if (formData.email.trim() === "" && formData.email !== "admin") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      isValid = false;
    } else if (!formData.email.includes("@") && formData.email !== "admin") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
      isValid = false;
    }
    if (formData.password.length < 6 && formData.password !== "admin" ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters long",
      }));
      isValid = false;
    }

    if (formData.password.trim() === "" && formData.password !== "admin" ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      isValid = false;
    }
    if (isValid) {
      if (formData.userRole === "admin") {
        const apiEndpoint = 'https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/auth/admin/login';
        axios
          .post(apiEndpoint, formData)
          .then((response) => {
            console.log(response.data.userId);
            // Set the userId based on the response
            let userId =response.data.userId
            if(userId==="Not Found")  alert("User not Found")
            else { 
              
              userId = response.data.userId;
              navigate(`/admin/${userId}`);
  
            }          
          })
          .catch((error) => {
            console.error(error); // Handle error
          });
      }
      if (formData.userRole === "user") {
        // User login
        const apiEndpoint = 'https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/auth/user/login';
        axios
          .post(apiEndpoint, formData)
          .then((response) => {
            console.log(response.data.userId);
            let userId = response.data.userId; // Declare userId here
            if (userId === "Not Found") alert("User not Found");
            else {
              navigate(`/user/homepage/${userId}`);
            }
          })
          .catch((error) => {
            console.error(error); // Handle error
          });
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ marginBottom: 4 }}>
          Log in
        </Typography>
        <form onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <FormControl component="fieldset">
            <FormLabel component="legend">Select User Role</FormLabel>
            <RadioGroup
              row
              aria-label="userRole"
              name="userRole"
              value={formData.userRole}
              onChange={handleUserRoleChange}
            >
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="Admin"
              />
              <FormControlLabel
                value="user"
                control={<Radio />}
                label="User"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {redirectTo && (
            <RouterLink to={redirectTo} className="nav-link">
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "black" }}
              >
                LOGIN
              </Button>
            </RouterLink>
          )}
          {!redirectTo && (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "black" }}
            >
              LOGIN
            </Button>
          )}
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <MuiLink component={RouterLink} to="/signUp" variant="body2">
                Don't have an account? Register
              </MuiLink>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
