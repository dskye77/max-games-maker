import React from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";
import {
  ErrorOutline,
  Home as HomeIcon,
  Description as DocsIcon,
  Gavel as LegalIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function NotFound() {

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 6, md: 10 } }}>
      <Paper
        elevation={6}
        sx={{
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          textAlign: "center",
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
        }}
      >
        {/* 404 Icon */}
        <Box
          sx={{
            color: "error.light",
            fontSize: { xs: "4.5rem", md: "6rem" },
            mb: 2,
          }}
        >
          <ErrorOutline fontSize="inherit" />
        </Box>

        {/* Title */}
        <Typography
          variant="h1"
          sx={{
            mb: 1,
            fontWeight: 900,
            fontSize: { xs: "3.5rem", md: "5rem" },
            background: "linear-gradient(90deg, #d32f2f, #c2185b)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-2px",
          }}
        >
          404
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h5"
          color="text.primary"
          sx={{
            mb: 2,
            fontWeight: 600,
            fontSize: { xs: "1.3rem", md: "1.6rem" },
          }}
        >
          Oops! Page Not Found
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 5,
            maxWidth: 420,
            mx: "auto",
            lineHeight: 1.7,
            fontSize: "1rem",
          }}
        >
          The page you're looking for doesn't exist or has been moved.
          <br />
          Let’s get you back to creating puzzles!
        </Typography>

        {/* Action Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<HomeIcon />}
            component={Link}
            to="/"
            sx={{
              minWidth: 180,
              py: 1.5,
              fontWeight: 600,
              borderRadius: 3,
              boxShadow: 3,
              "&:hover": {
                boxShadow: 6,
                transform: "translateY(-2px)",
              },
            }}
          >
            Back to Home
          </Button>

          <Button
            variant="outlined"
            size="large"
            startIcon={<DocsIcon />}
            component={Link}
            to="/docs"
            sx={{
              minWidth: 180,
              py: 1.5,
              fontWeight: 600,
              borderRadius: 3,
              borderWidth: 2,
              "&:hover": {
                borderWidth: 2,
                backgroundColor: "primary.main",
                color: "white",
              },
            }}
          >
            View Docs
          </Button>
        </Stack>

        {/* Quick Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
            mt: 3,
            pt: 3,
            borderTop: 1,
            borderColor: "divider",
          }}
        >
          <Button
            component={Link}
            to="/"
            startIcon={<HomeIcon />}
            size="small"
            color="inherit"
            sx={{ textTransform: "none" }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/docs"
            startIcon={<DocsIcon />}
            size="small"
            color="inherit"
            sx={{ textTransform: "none" }}
          >
            Documentation
          </Button>
          <Button
            component={Link}
            to="/legal"
            startIcon={<LegalIcon />}
            size="small"
            color="inherit"
            sx={{ textTransform: "none" }}
          >
            Legal
          </Button>
        </Box>

        {/* Footer */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 5,
            pt: 3,
            fontSize: "0.85rem",
            borderTop: 1,
            borderColor: "divider",
          }}
        >
          © {new Date().getFullYear()} Max Puzzle Games Maker. All rights reserved.
        </Typography>
      </Paper>
    </Container>
  );
}