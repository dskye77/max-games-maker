// src/pages/Home.js   (or wherever you keep your pages)
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  Fade,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  PlayArrow,
  AutoAwesome,
  Build,
  Gavel, // Legal icon
  Palette,
  Speed,
  Security,
} from "@mui/icons-material";

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setShowContent(true);
  }, []);

  const features = [
    {
      icon: <Palette />,
      title: "Drag & Drop",
      desc: "Intuitive visual editor",
    },
    { icon: <Speed />, title: "Fast Setup", desc: "Publish in under 5 mins" },
    {
      icon: <Security />,
      title: "Safe & Private",
      desc: "Your data stays yours",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: { xs: 4, md: 8 },
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%)",
      }}
    >
      <Container maxWidth="md">
        <Fade in={showContent} timeout={800}>
          <Box sx={{ textAlign: "center" }}>
            {/* ---------- HERO ---------- */}
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                fontWeight: 900,
                fontSize: { xs: "2.8rem", sm: "4rem", md: "4.5rem" },
                background: "linear-gradient(90deg, #1976d2, #9c27b0)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.5px",
              }}
            >
              Max Puzzle Games Maker
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                mb: 5,
                fontWeight: 500,
                fontSize: { xs: "1.1rem", sm: "1.4rem" },
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Create fun, interactive puzzles —{" "}
              <strong>no coding required</strong>. Drag, drop, customize, and
              publish in minutes.
            </Typography>

            {/* ---------- CTA BUTTONS ---------- */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              sx={{ mb: 8 }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<PlayArrow />}
                href="/app"
                sx={{
                  px: { xs: 4, sm: 5 },
                  py: 1.8,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  borderRadius: 3,
                  boxShadow: 3,
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-2px)",
                    transition: "all 0.2s ease",
                  },
                }}
              >
                Try the App
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<AutoAwesome />}
                href="/examples"
                sx={{
                  px: { xs: 4, sm: 5 },
                  py: 1.8,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  borderRadius: 3,
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    backgroundColor: "primary.main",
                    color: "white",
                    transform: "translateY(-2px)",
                    transition: "all 0.2s ease",
                  },
                }}
              >
                View Examples
              </Button>
            </Stack>

            {/* ---------- FEATURE CARDS ---------- */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              justifyContent="center"
              sx={{ mb: 10 }}
            >
              {features.map((feature, idx) => (
                <Fade in={showContent} timeout={600 + idx * 200} key={idx}>
                  <Box
                    sx={{
                      flex: 1,
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: "background.paper",
                      boxShadow: 1,
                      minWidth: 200,
                      textAlign: "left",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: "primary.main",
                        mb: 1.5,
                        fontSize: "2rem",
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.desc}
                    </Typography>
                  </Box>
                </Fade>
              ))}
            </Stack>

            {/* ---------- DOCUMENTATION & LEGAL ---------- */}
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                fontWeight: 700,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
              }}
            >
              Documentation & Resources
            </Typography>

            <Stack
              spacing={2}
              sx={{
                maxWidth: 600,
                mx: "auto",
                mb: 10,
                alignItems: "stretch",
              }}
            >
              {/* Getting Started */}
              <Button
                component="a"
                href="/docs"
                fullWidth
                variant="outlined"
                startIcon={<Build />}
                sx={{
                  justifyContent: "flex-start",
                  py: 2.5,
                  px: 3,
                  fontSize: "1.05rem",
                  fontWeight: 500,
                  borderRadius: 3,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "action.hover" },
                }}
              >
                Getting Started Guide
              </Button>

              {/* Legal Center (Privacy + Terms + Guidelines) */}
              <Button
                component="a"
                href="/legal"
                fullWidth
                variant="outlined"
                startIcon={<Gavel />}
                sx={{
                  justifyContent: "flex-start",
                  py: 2.5,
                  px: 3,
                  fontSize: "1.05rem",
                  fontWeight: 500,
                  borderRadius: 3,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "action.hover" },
                }}
              >
                Legal (Privacy, Terms, Guidelines)
              </Button>
            </Stack>

            {/* ---------- FOOTER ---------- */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mt: isMobile ? 6 : "auto",
                pt: 4,
                fontSize: "0.9rem",
              }}
            >
              © {new Date().getFullYear()} Max Puzzle Games Maker. Built for
              creators, educators, and game designers.
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Home;
