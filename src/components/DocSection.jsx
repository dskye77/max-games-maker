import React, { useState } from "react";
import { Box, Typography, Collapse, IconButton, Stack } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

export const DocSection = ({ title, icon, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Box sx={{ mb: 4 }}>
      {/* Header */}
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

      {/* Content */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{ pl: { xs: 0, md: 5 }, pr: 2, pb: 3 }}>{children}</Box>
      </Collapse>
    </Box>
  );
};
