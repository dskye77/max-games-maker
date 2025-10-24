import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Stack,
  Button,
  TextField,
  Alert,
  Link,
} from "@mui/material";
import { Email, Delete, Message } from "@mui/icons-material";

export default function MessageUs() {
  const [deletionForm, setDeletionForm] = useState({
    email: "",
    details: "",
    type: "Data Deletion Request",
  });
  const [generalForm, setGeneralForm] = useState({
    email: "",
    message: "",
    type: "General Inquiry",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleDeletionSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    try {
      const response = await fetch("https://formspree.io/f/xyznrarq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(deletionForm),
      });
      if (response.ok) {
        setSubmitStatus({ type: "success", section: "deletion" });
        setDeletionForm({
          email: "",
          details: "",
          type: "Data Deletion Request",
        });
      } else {
        setSubmitStatus({ type: "error", section: "deletion" });
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus({ type: "error", section: "deletion" });
    }
  };

  const handleGeneralSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    try {
      const response = await fetch("https://formspree.io/f/xyznrarq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(generalForm),
      });
      if (response.ok) {
        setSubmitStatus({ type: "success", section: "general" });
        setGeneralForm({ email: "", message: "", type: "General Inquiry" });
      } else {
        setSubmitStatus({ type: "error", section: "general" });
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus({ type: "error", section: "general" });
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 1,
          background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Box sx={{ color: "primary.main", fontSize: "3rem", mb: 2 }}>
            <Message />
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(90deg, #1976d2, #9c27b0)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Message Us
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Contact us for support, data deletion requests, or any other
            inquiries.
          </Typography>
        </Box>

        {/* Contact Information */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Get in Touch
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <Email color="primary" />
            <Typography variant="body1">
              Email:{" "}
              <Link href="mailto:galaxanionstudios@gmail.com" underline="hover">
                galaxanionstudios@gmail.com
              </Link>
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <Email color="primary" />
            <Typography variant="body1">
              Email:{" "}
              <Link href="mailto:dskyle77@@gmail.com" underline="hover">
                dskyle77@@gmail.com
              </Link>
            </Typography>
          </Stack>

          <Alert severity="info" sx={{ borderRadius: 2 }}>
            We respond to all inquiries within 48 hours. Use the forms below for
            faster processing.
          </Alert>
        </Box>

        {/* Data Deletion Request */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Request Data Deletion
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            To request deletion of your data, please provide your account email
            and any relevant details. We will process your request in accordance
            with our privacy policy.
          </Typography>
          <Box component="form" onSubmit={handleDeletionSubmit}>
            <TextField
              label="Your Email"
              type="email"
              value={deletionForm.email}
              onChange={(e) =>
                setDeletionForm({ ...deletionForm, email: e.target.value })
              }
              fullWidth
              required
              margin="normal"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Additional Details"
              value={deletionForm.details}
              onChange={(e) =>
                setDeletionForm({ ...deletionForm, details: e.target.value })
              }
              fullWidth
              multiline
              rows={4}
              margin="normal"
              sx={{ mb: 2 }}
            />
            <Button
              variant="outlined"
              startIcon={<Delete />}
              type="submit"
              sx={{ borderRadius: 2 }}
            >
              Send Deletion Request
            </Button>
            {submitStatus?.section === "deletion" &&
              submitStatus.type === "success" && (
                <Alert severity="success" sx={{ mt: 2, borderRadius: 2 }}>
                  Deletion request sent successfully!
                </Alert>
              )}
            {submitStatus?.section === "deletion" &&
              submitStatus.type === "error" && (
                <Alert severity="error" sx={{ mt: 2, borderRadius: 2 }}>
                  Failed to send request. Please try again or email us directly
                  at galaxanionstudios@gmail.com.
                </Alert>
              )}
          </Box>
        </Box>

        {/* General Message */}
        <Box>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Send a General Message
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            For feedback, support, or other messaging, fill out the form below.
          </Typography>
          <Box component="form" onSubmit={handleGeneralSubmit}>
            <TextField
              label="Your Email"
              type="email"
              value={generalForm.email}
              onChange={(e) =>
                setGeneralForm({ ...generalForm, email: e.target.value })
              }
              fullWidth
              required
              margin="normal"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Your Message"
              value={generalForm.message}
              onChange={(e) =>
                setGeneralForm({ ...generalForm, message: e.target.value })
              }
              fullWidth
              multiline
              rows={4}
              required
              margin="normal"
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              startIcon={<Email />}
              type="submit"
              sx={{ borderRadius: 2 }}
            >
              Send Message
            </Button>
            {submitStatus?.section === "general" &&
              submitStatus.type === "success" && (
                <Alert severity="success" sx={{ mt: 2, borderRadius: 2 }}>
                  Message sent successfully!
                </Alert>
              )}
            {submitStatus?.section === "general" &&
              submitStatus.type === "error" && (
                <Alert severity="error" sx={{ mt: 2, borderRadius: 2 }}>
                  Failed to send message. Please try again or email us directly
                  at galaxanionstudios@gmail.com.
                </Alert>
              )}
          </Box>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            mt: 6,
            textAlign: "center",
            pt: 4,
            borderTop: 1,
            borderColor: "divider",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Max Puzzle Games Maker. All rights
            reserved.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
