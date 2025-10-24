import React from "react";
import {
  Container,
  Typography,
  Paper,
  Stack,
  Box,
  Chip,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";
import { GAME_DOCS } from "../docs/registry.jsx";

export default function DocsIndex() {
  const lastUpdate = "October 2025";

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 5 },
          background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
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
            Documentation Hub
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Choose a game type to read its full guide.
          </Typography>
          <Chip
            label={`Last updated: ${lastUpdate}`}
            size="small"
            color="primary"
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </Box>

        {/* List of Docs */}
        <Stack spacing={3}>
          {GAME_DOCS.map((doc) => (
            <MuiLink
              key={doc.slug}
              component={Link}
              to={`/docs/${doc.slug}`}
              underline="none"
            >
              <Paper
                sx={{
                  p: 3,
                  borderRadius: 3,
                  transition: "all 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
                elevation={2}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ color: "primary.main", fontSize: "2rem" }}>
                    {doc.icon}
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight={600}>
                      {doc.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {doc.tagline}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </MuiLink>
          ))}
        </Stack>
      </Paper>
    </Container>
  );
}