import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Link,
  Grid,
  Paper,
} from "@mui/material";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Login = ({ setUser}) => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, firstName, lastName, confirmPassword } = formData;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!signUp) {
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(user);
      } else {
        return alert("All fields are mandatory to fill");
      }
    } else {
      if (password !== confirmPassword) {
        return alert("Password don't match");
      }
      if (firstName && lastName && email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: `${firstName} ${lastName}` });
      } else {
        return alert("All fields are mandatory to fill");
      }
    }
    navigate("/");
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          {signUp ? "Sign-Up" : "Sign-In"}
        </Typography>
        <form onSubmit={handleAuth}>
          {signUp && (
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  type="text"
                  label="First Name"
                  name="firstName"
                  fullWidth
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="text"
                  label="Last Name"
                  name="lastName"
                  fullWidth
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          )}
          <TextField
            type="email"
            label="Email"
            name="email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            type="password"
            label="Password"
            name="password"
            fullWidth
            value={formData.password}
            onChange={handleChange}
            margin="normal"
          />
          {signUp && (
            <TextField
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              fullWidth
              value={formData.confirmPassword}
              onChange={handleChange}
              margin="normal"
            />
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            className={signUp ? "btn-sign-up" : "btn-sign-in"}
          >
            {signUp ? "Sign-up" : "Sign-in"}
          </Button>
        </form>
        <Box mt={2} textAlign="center">
          {!signUp ? (
            <Typography variant="subtitle2">
              Don't have an account?{" "}
              <Link
                href="#"
                onClick={() => setSignUp(true)}
                color="primary"
                underline="always"
              >
                Sign Up
              </Link>
            </Typography>
          ) : (
            <Typography variant="subtitle2">
              Already have an account?{" "}
              <Link
                href="#"
                onClick={() => setSignUp(false)}
                color="primary"
                underline="always"
              >
                Sign In
              </Link>
            </Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
