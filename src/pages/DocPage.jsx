import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import { GAME_DOCS } from "../docs/registry.jsx";
import NotFound from "./NotFound.jsx"; // optional

export default function DocPage() {
  const { slug } = useParams();
  const doc = GAME_DOCS.find((d) => d.slug === slug);

  if (!doc) return <NotFound />;

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
          <Box sx={{ color: "primary.main",  fontSize: "3rem", mb: 2 }}>
            {doc.icon}
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
            {doc.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            {doc.tagline}
          </Typography>
        </Box>

        {/* Content */}
        <Box sx={{ "& > *:first-child": { mt: 0 } }}>
          {doc.content}
        </Box>
      </Paper>
    </Container>
  );
}