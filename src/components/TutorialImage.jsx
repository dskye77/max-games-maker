import React from "react";
import { Box, Paper, Typography, Divider } from "@mui/material";

const TutorialImage = ({
  src, // Image URL (local or external)
  alt, // Accessibility text
  caption, // Optional description
  width = 300, // Responsive width
  maxWidth = "100%", // Full-width on mobile
}) => (
  <Box sx={{ my: 3, textAlign: "center" }}>
    <Paper
      elevation={2}
      sx={{
        p: 2,
        maxWidth,
        mx: "auto",
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: { xs: "100%", md: width },
          height: "auto",
          borderRadius: 1,
          display: "block",
          mx: "auto",
        }}
      />
      {caption && (
        <>
          <Divider sx={{ my: 1, borderColor: "divider" }} />
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontStyle: "italic" }}
          >
            {caption}
          </Typography>
        </>
      )}
    </Paper>
  </Box>
);

export default TutorialImage;
`   `;
