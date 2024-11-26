"use client";
import "@/app/styles/button.module.scss";

import React, { useRef } from "react";
import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current) {
      console.error("Form ref is null.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    console.log(data);
    emailjs
      .sendForm("X", "X", form.current, {
        publicKey: "X",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    // Handle form submission logic, e.g., send data to a server
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, color: "white" }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ color: "white" }}
      >
        Contact Us
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        gutterBottom
        sx={{ color: "white" }}
      >
        We'd love to hear from you. Please fill out the form below and we'll get
        back to you as soon as possible.
      </Typography>
      <form ref={form} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          required
          InputProps={{
            style: { color: "white" },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          required
          InputProps={{
            style: { color: "white" },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
        />

        <TextField
          fullWidth
          id="subject"
          name="subject"
          label="Subject"
          variant="outlined"
          InputProps={{
            style: { color: "white" },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
        />

        <TextField
          fullWidth
          id="message"
          name="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          required
          InputProps={{
            style: { color: "white" },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              color: "white",
              backgroundColor: "gray",
            },
          }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};
export default ContactPage;
