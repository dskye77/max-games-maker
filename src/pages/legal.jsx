import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  IconButton,
  Box,
  Chip,
  Stack,
  Link,
} from "@mui/material";
import {
  ExpandMore,
  ExpandLess,
  PrivacyTip,
  Gavel,
  People,
  CheckCircle,
  Email,
} from "@mui/icons-material";

const LegalSection = ({ title, icon, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Box sx={{ mb: 5 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          cursor: "pointer",
          p: 2,
          borderRadius: 2,
          backgroundColor: open ? "action.hover" : "transparent",
          transition: "background-color 0.2s",
          "&:hover": { backgroundColor: "action.hover" },
        }}
        onClick={() => setOpen(!open)}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box sx={{ color: "primary.main", fontSize: "1.5rem" }}>{icon}</Box>
          <Typography variant="h5" fontWeight={700} color="primary">
            {title}
          </Typography>
        </Stack>
        <IconButton size="small">
          {open ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </Stack>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{ pl: { xs: 0, md: 5 }, pr: 2, pb: 3 }}>{children}</Box>
      </Collapse>
    </Box>
  );
};

export default function Legal() {
  const currentYear = new Date().getFullYear();

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
              fontSize: { xs: "2rem", md: "2.5rem" },
              background: "linear-gradient(90deg, #1976d2, #9c27b0)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Legal Center
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 700, mx: "auto" }}
          >
            Transparency and trust are core to{" "}
            <strong>Max Puzzle Games Maker</strong>. Below are our official
            policies.
          </Typography>
          <Chip
            label="Last updated: October 2025"
            size="small"
            color="primary"
            variant="outlined"
            sx={{ mt: 2, fontWeight: 500 }}
          />
        </Box>

        <Divider sx={{ mb: 5 }} />

        {/* Privacy Policy */}
        <LegalSection
          title="Privacy Policy"
          icon={<PrivacyTip />}
          defaultOpen={true}
        >
          <Typography variant="body1" paragraph sx={{ fontWeight: 500 }}>
            We respect your privacy and are committed to protecting your data.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mt: 3, color: "primary" }}
          >
            Information We Collect
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText
                primary="Email & password"
                secondary="Via Firebase Authentication for secure login"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText
                primary="Puzzles & gameplay data"
                secondary="Stored in Firebase Realtime Database"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText
                primary="No sensitive data"
                secondary="We do not collect payment, location, or personal identifiers"
              />
            </ListItem>
          </List>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mt: 3, color: "primary" }}
          >
            How We Use Your Data
          </Typography>
          <Typography variant="body2" paragraph>
            Your data powers core features: account access, puzzle saving,
            sharing, and app improvements. We <strong>never sell</strong> your
            information.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            Third-Party Services
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText
                primary="Google AdMob"
                secondary="Displays non-intrusive ads; collects anonymized usage"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Firebase Analytics"
                secondary="Helps us improve performance and user experience"
              />
            </ListItem>
          </List>

          <Typography variant="h6" gutterBottom color="primary">
            Delete Your Data
          </Typography>
          <Typography variant="body2" paragraph>
            Go to <strong>Settings → Delete Account</strong> to permanently
            remove all your data.
          </Typography>

          <Box sx={{ mt: 3, p: 2, bgcolor: "primary.50", borderRadius: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Email color="primary" />
              <Typography variant="body2">
                Questions? Email us at{" "}
                <Link
                  href="mailto:galaxanionstudios@gmail.com"
                  underline="hover"
                >
                  <strong>galaxanionstudios@gmail.com</strong>
                </Link>
              </Typography>
            </Stack>
          </Box>
        </LegalSection>

        <Divider sx={{ my: 4 }} />

        {/* Terms of Service */}
        <LegalSection title="Terms of Service" icon={<Gavel />}>
          <Typography variant="body1" paragraph sx={{ fontWeight: 500 }}>
            By using Max Puzzle Games Maker, you agree to these terms.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mt: 3, color: "primary" }}
          >
            Eligibility
          </Typography>
          <Typography variant="body2" paragraph>
            You must be <strong>13 years or older</strong> to use this app.
            Parents must supervise younger users.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            Your Content
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="You own your puzzles" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText
                primary="You grant us a limited license"
                secondary="To display and share within the app"
              />
            </ListItem>
          </List>

          <Typography variant="h6" gutterBottom color="primary">
            Prohibited Actions
          </Typography>
          <List dense>
            {[
              "Hate speech, harassment, or bullying",
              "Adult content or explicit material",
              "Copyright or trademark infringement",
              "Malicious code or spam",
            ].map((rule, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <CheckCircle color="error" />
                </ListItemIcon>
                <ListItemText primary={rule} />
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" gutterBottom color="primary">
            Changes to Terms
          </Typography>
          <Typography variant="body2" paragraph>
            We may update these terms. Continued use after changes means
            acceptance.
          </Typography>

          <Box sx={{ mt: 3, p: 2, bgcolor: "primary.50", borderRadius: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Email color="primary" />
              <Typography variant="body2">
                Contact us at{" "}
                <Link
                  href="mailto:galaxanionstudios@gmail.com"
                  underline="hover"
                >
                  <strong>galaxanionstudios@gmail.com</strong>
                </Link>
              </Typography>
            </Stack>
          </Box>
        </LegalSection>

        <Divider sx={{ my: 4 }} />

        {/* Community Guidelines */}
        <LegalSection title="Community Guidelines" icon={<People />}>
          <Typography variant="body1" paragraph sx={{ fontWeight: 500 }}>
            Let’s keep creativity safe, fun, and respectful.
          </Typography>

          <List
            sx={{
              listStyleType: "disc",
              pl: 3,
              "& .MuiListItem-root": {
                display: "list-item",
                pl: 0,
              },
            }}
          >
            {[
              "Keep puzzles family-friendly and appropriate for all ages",
              "No offensive, explicit, or harmful content",
              "Respect copyright — only use content you own or have permission for",
              "Give credit when remixing or building on others’ puzzles",
              "Report violations using the in-app report button or email",
            ].map((rule, i) => (
              <ListItem key={i}>
                <ListItemText primary={rule} />
              </ListItem>
            ))}
          </List>

          <Typography
            variant="body2"
            paragraph
            sx={{ mt: 3, fontStyle: "italic" }}
          >
            Violations may result in content removal, warnings, or account
            suspension.
          </Typography>

          <Box
            sx={{
              mt: 3,
              p: 2,
              bgcolor: "success.light",
              color: "success.contrastText",
              borderRadius: 2,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Together, we build a positive and inspiring puzzle community.
            </Typography>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Email color="primary" />
              <Typography variant="body2">
                Report issues to{" "}
                <Link
                  href="mailto:galaxanionstudios@gmail.com"
                  underline="hover"
                >
                  <strong>galaxanionstudios@gmail.com</strong>
                </Link>
              </Typography>
            </Stack>
          </Box>
        </LegalSection>

        {/* Footer */}
        <Box
          sx={{
            mt: 8,
            textAlign: "center",
            pt: 4,
            borderTop: 1,
            borderColor: "divider",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Max Puzzle Games Maker. All rights reserved.
            <br />
            Built with care for creators, educators, and puzzle lovers.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
