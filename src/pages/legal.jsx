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
            Transparency and trust are core to <strong>Max Games Maker</strong>.
            Below are our official policies.
          </Typography>
          <Chip
            label="Last updated: October 25, 2025"
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
            Effective Date: October 25, 2025.
          </Typography>
          <Typography variant="body1" paragraph>
            This Privacy Policy explains how Max Games Maker (“the App”), a
            product of Hang Digital Assets Inc. (“we,” “us,” or “our”),
            collects, uses, discloses, and safeguards information in connection
            with your use of our app. Hang Digital Assets Inc. is a Canadian
            company wholly owned by Mr. Nghia Nguyen.
          </Typography>
          <Typography variant="body1" paragraph>
            Contact Information: hangdigitalassets@gmail.com
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mt: 3, color: "primary" }}
          >
            1. Information We Collect
          </Typography>
          <Typography variant="body2" paragraph>
            We collect information to improve the functionality, security, and
            user experience of Max Games Maker.
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ mt: 2, color: "primary" }}
          >
            a. Personal Information
          </Typography>
          <Typography variant="body2" paragraph>
            When you use the App, we may collect:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Account or profile details (if applicable)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Contact information such as email address (e.g., for support or registration)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Any voluntary data you provide via feedback or communication" />
            </ListItem>
          </List>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ mt: 2, color: "primary" }}
          >
            b. Non-Personal and Technical Information
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Device type, operating system, and unique device identifiers" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Log and usage data (e.g., time spent, game progress, in-app activities)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="IP address and approximate location (for analytics and optimization)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Crash reports and performance diagnostics" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Analytics via Google Play Services, Firebase Analytics, or similar trusted third-party tools" />
            </ListItem>
          </List>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mt: 3, color: "primary" }}
          >
            2. How We Use Your Information
          </Typography>
          <Typography variant="body2" paragraph>
            Your data is used for legitimate business and operational purposes:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="To operate, maintain, and enhance the App" />
            </ListItem>
            <ListItem>
              <ListItemText primary="To personalize user experience and app settings" />
            </ListItem>
            <ListItem>
              <ListItemText primary="To analyze usage patterns and fix bugs or errors" />
            </ListItem>
            <ListItem>
              <ListItemText primary="To send important notices (updates, support, or legal information)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="To comply with legal requirements and enforce our Terms of Service" />
            </ListItem>
          </List>
          <Typography variant="body2" paragraph sx={{ fontWeight: 700 }}>
            We do not sell your personal information to any third parties.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            3. Legal Basis for Processing (GDPR)
          </Typography>
          <Typography variant="body2" paragraph>
            For users in the European Economic Area (EEA), the processing of
            personal data is based on:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Consent (Article 6(1)(a)) — for optional analytics or communications" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Contractual necessity (Article 6(1)(b)) — to provide requested services" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Legal obligation (Article 6(1)(c)) — where required by law" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Legitimate interest (Article 6(1)(f)) — to maintain and improve the App securely" />
            </ListItem>
          </List>
          <Typography variant="body2" paragraph>
            You may withdraw your consent at any time by contacting us at{" "}
            <Link href="mailto:hangdigitalassets@gmail.com" underline="hover">
              hangdigitalassets@gmail.com
            </Link>
            .
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            4. Sharing and Disclosure of Information
          </Typography>
          <Typography variant="body2" paragraph>
            We may share data in the following limited circumstances:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Service Providers: With analytics, hosting, and security partners (e.g., Google, Firebase)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Legal Compliance: When required by law, subpoena, or regulatory authority" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Business Transfers: In connection with mergers, acquisitions, or restructuring, your data may be part of transferred assets" />
            </ListItem>
          </List>
          <Typography variant="body2" paragraph>
            All partners are required to comply with this Privacy Policy and
            applicable privacy laws.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            5. Data Retention
          </Typography>
          <Typography variant="body2" paragraph>
            We retain your data only for as long as necessary to:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Fulfill the purposes described in this policy" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Comply with legal obligations" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Resolve disputes and enforce agreements" />
            </ListItem>
          </List>
          <Typography variant="body2" paragraph>
            When data is no longer needed, it is securely deleted or anonymized.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            6. Your Rights
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ mt: 2, color: "primary" }}
          >
            For EU/EEA Users (GDPR Rights):
          </Typography>
          <Typography variant="body2" paragraph>
            You have the right to:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Access and obtain a copy of your personal data" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Request correction or deletion of inaccurate data" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Restrict or object to certain processing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Request data portability" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Withdraw consent at any time" />
            </ListItem>
          </List>
          <Typography variant="body2" paragraph>
            To exercise your rights, contact{" "}
            <Link href="mailto:hangdigitalassets@gmail.com" underline="hover">
              hangdigitalassets@gmail.com
            </Link>
            .
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mt: 2, color: "primary" }}
          >
            For California Users (CCPA Rights):
          </Typography>
          <Typography variant="body2" paragraph>
            California residents have the right to:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Request disclosure of categories and specific pieces of personal data collected" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Request deletion of personal data (subject to legal exceptions)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Opt out of the “sale” or “sharing” of personal data (we do not sell personal data)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Non-discrimination for exercising privacy rights" />
            </ListItem>
          </List>
          <Typography variant="body2" paragraph>
            Requests can be made by emailing{" "}
            <Link href="mailto:hangdigitalassets@gmail.com" underline="hover">
              hangdigitalassets@gmail.com
            </Link>
            .
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            7. Data Security
          </Typography>
          <Typography variant="body2" paragraph>
            We implement industry-standard measures to protect data, including:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Encrypted transmission (HTTPS)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Secure servers and firewalls" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Restricted access to personal information" />
            </ListItem>
          </List>
          <Typography variant="body2" paragraph>
            While we take precautions, no online system is completely secure,
            and users share information at their own risk.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            8. Children’s Privacy
          </Typography>
          <Typography variant="body2" paragraph>
            Max Games Maker is intended for users aged 13 and older.
          </Typography>
          <Typography variant="body2" paragraph>
            We do not knowingly collect personal data from children under 13.
          </Typography>
          <Typography variant="body2" paragraph>
            If we learn that a child has provided personal information, we will
            delete it promptly.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            9. International Data Transfers
          </Typography>
          <Typography variant="body2" paragraph>
            Your information may be stored and processed in countries other than
            your own.
          </Typography>
          <Typography variant="body2" paragraph>
            We ensure that all transfers comply with applicable privacy laws,
            including GDPR-approved safeguards such as Standard Contractual
            Clauses (SCCs).
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            10. Third-Party Services
          </Typography>
          <Typography variant="body2" paragraph>
            The App may link to or use third-party services such as:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Google Play Services" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Firebase Analytics" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Crashlytics" />
            </ListItem>
          </List>
          <Typography variant="body2" paragraph>
            These services may collect data in accordance with their own privacy
            policies.
          </Typography>
          <Typography variant="body2" paragraph>
            We encourage you to review them individually.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            11. Updates to This Privacy Policy
          </Typography>
          <Typography variant="body2" paragraph>
            We may update this Privacy Policy from time to time to reflect
            legal, technical, or operational changes.
          </Typography>
          <Typography variant="body2" paragraph>
            When updates occur, the “Effective Date” above will be revised.
          </Typography>
          <Typography variant="body2" paragraph>
            Continued use of the App after updates means you accept the revised
            policy.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            12. Contact Us
          </Typography>
          <Typography variant="body2" paragraph>
            For privacy inquiries, data requests, or complaints, contact us at:
          </Typography>
          <Typography variant="body2" paragraph>
            Hang Digital Assets Inc.
          </Typography>
          <Typography variant="body2" paragraph>
            Email:{" "}
            <Link href="mailto:hangdigitalassets@gmail.com" underline="hover">
              hangdigitalassets@gmail.com
            </Link>
          </Typography>
          <Typography variant="body2" paragraph>
            Attention: Privacy Officer
          </Typography>

          <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 3 }}>
            Legal Compliance Summary
          </Typography>
          <Typography variant="body2" paragraph>
            GDPR (EU/EEA): Full compliance with data rights, consent, and
            transfer mechanisms.
          </Typography>
          <Typography variant="body2" paragraph>
            CCPA (California): No sale of user data; transparency in data usage.
          </Typography>
          <Typography variant="body2" paragraph>
            Google Play Developer Policy: Meets requirements for user data
            transparency, protection, and lawful use.
          </Typography>

          <Box sx={{ mt: 3, p: 2, bgcolor: "primary.50", borderRadius: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Email color="primary" />
              <Typography variant="body2">
                Questions? Email us at{" "}
                <Link
                  href="mailto:hangdigitalassets@gmail.com"
                  underline="hover"
                >
                  <strong>hangdigitalassets@gmail.com</strong>
                </Link>
              </Typography>
            </Stack>
          </Box>
        </LegalSection>

        <Divider sx={{ my: 4 }} />

        {/* Terms of Service */}
        <LegalSection title="Terms of Service" icon={<Gavel />}>
          <Typography variant="body1" paragraph sx={{ fontWeight: 500 }}>
            Effective Date: October 25, 2025. Last Updated: October 25, 2025.
          </Typography>
          <Typography variant="body1" paragraph>
            This User Agreement (“Agreement”) governs your access to and use of
            the mobile application Max Games Maker (“App”), owned and operated
            by Hang Digital Assets Inc., a corporation incorporated under the
            laws of the Province of Alberta, Canada (“the Company”, “we”, “us”,
            or “our”).
          </Typography>
          <Typography variant="body1" paragraph>
            By downloading, installing, or using Max Games Maker, you (“User”,
            “you”, or “your”) agree to be bound by this Agreement. If you do not
            agree, you must not use or access the App.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mt: 3, color: "primary" }}
          >
            1. ACCEPTANCE OF TERMS
          </Typography>
          <Typography variant="body2" paragraph>
            By using the App, you confirm that you are at least 13 years old (or
            the minimum age of digital consent in your jurisdiction) and capable
            of entering into a legally binding contract. If you are under 18,
            you must have parental or guardian consent to use the App.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            2. LICENSE GRANT
          </Typography>
          <Typography variant="body2" paragraph>
            Subject to this Agreement, the Company grants you a limited,
            non-exclusive, non-transferable, revocable license to download and
            install the App on a compatible mobile device and use it solely for
            personal, non-commercial entertainment purposes.
          </Typography>
          <Typography variant="body2" paragraph>
            You may not reverse engineer, decompile, disassemble, modify,
            distribute, or reproduce the App or its content, or exploit the App
            commercially without written consent from the Company.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            3. ACCOUNT REGISTRATION
          </Typography>
          <Typography variant="body2" paragraph>
            Certain features may require account registration. You are
            responsible for maintaining the confidentiality of your login
            information and all activities that occur under your account. The
            Company is not responsible for unauthorized access resulting from
            your failure to safeguard credentials.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            4. VIRTUAL ITEMS AND IN-APP PURCHASES
          </Typography>
          <Typography variant="body2" paragraph>
            The App may offer virtual items or credits for use within the game.
            All purchases of virtual items are final and non-refundable. Virtual
            items have no real-world value.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            5. USER CONDUCT
          </Typography>
          <Typography variant="body2" paragraph>
            You agree not to violate any laws, disrupt the App or its servers,
            attempt unauthorized access, or engage in harassment or harmful
            behavior. The Company may suspend or terminate your access for
            violations.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            6. INTELLECTUAL PROPERTY
          </Typography>
          <Typography variant="body2" paragraph>
            All intellectual property rights in the App are owned by Hang
            Digital Assets Inc. or its licensors. You are granted no ownership
            or proprietary rights.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            7. PRIVACY POLICY
          </Typography>
          <Typography variant="body2" paragraph>
            Your use of the App is governed by our Privacy Policy. Contact{" "}
            <Link href="mailto:hangdigitalassets@gmail.com" underline="hover">
              hangdigitalassets@gmail.com
            </Link>{" "}
            for details.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            8. DISCLAIMER OF WARRANTIES
          </Typography>
          <Typography variant="body2" paragraph>
            The App is provided “AS IS” and “AS AVAILABLE.” The Company makes no
            warranties about reliability, availability, or suitability, and
            disclaims all implied warranties to the fullest extent permitted by
            law.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            9. LIMITATION OF LIABILITY
          </Typography>
          <Typography variant="body2" paragraph>
            To the maximum extent permitted by law, Hang Digital Assets Inc.,
            its directors, officers, employees, affiliates, and agents —
            including Mr. Nghia Nguyen — shall not be liable for any direct,
            indirect, incidental, consequential, or special damages arising from
            your use or inability to use the App.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            10. INDEMNIFICATION
          </Typography>
          <Typography variant="body2" paragraph>
            You agree to indemnify and hold harmless Hang Digital Assets Inc.,
            its affiliates, directors, officers, employees, and agents —
            including Mr. Nghia Nguyen — from and against any and all claims,
            damages, or expenses arising from your breach of this Agreement or
            misuse of the App.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            11. TERMINATION
          </Typography>
          <Typography variant="body2" paragraph>
            The Company may terminate or suspend your access to the App at any
            time for any reason. Upon termination, all rights granted under this
            Agreement shall cease immediately.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            12. GOVERNING LAW
          </Typography>
          <Typography variant="body2" paragraph>
            This Agreement shall be governed by the laws of the Province of
            Alberta, Canada, and the federal laws of Canada applicable therein.
            You agree to submit to the exclusive jurisdiction of Alberta courts.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            13. AMENDMENTS
          </Typography>
          <Typography variant="body2" paragraph>
            The Company reserves the right to modify or update this Agreement at
            any time. Continued use of the App after such updates constitutes
            acceptance of the revised terms.
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            14. CONTACT INFORMATION
          </Typography>
          <Typography variant="body2" paragraph>
            For legal notices or questions, contact:
          </Typography>
          <Typography variant="body2" paragraph>
            Hang Digital Assets Inc.
          </Typography>
          <Typography variant="body2" paragraph>
            Email:{" "}
            <Link href="mailto:hangdigitalassets@gmail.com" underline="hover">
              hangdigitalassets@gmail.com
            </Link>
          </Typography>
          <Typography variant="body2" paragraph>
            Attn: Legal Department
          </Typography>

          <Typography variant="h6" gutterBottom color="primary">
            15. ENTIRE AGREEMENT
          </Typography>
          <Typography variant="body2" paragraph>
            This Agreement, together with the Privacy Policy, constitutes the
            entire agreement between you and Hang Digital Assets Inc. concerning
            Max Games Maker.
          </Typography>

          <Box sx={{ mt: 3, p: 2, bgcolor: "primary.50", borderRadius: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Email color="primary" />
              <Typography variant="body2">
                Contact us at{" "}
                <Link
                  href="mailto:hangdigitalassets@gmail.com"
                  underline="hover"
                >
                  <strong>hangdigitalassets@gmail.com</strong>
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
            © {currentYear} Hang Digital Assets Inc. All Rights Reserved.
            <br />
            Max Games Maker is a subsidiary of Hang Digital Assets Inc.
            <br />
            Built with care for creators, educators, and puzzle lovers.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
