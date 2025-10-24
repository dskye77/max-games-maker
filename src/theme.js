// themes/maxPuzzleGamesMakerTheme.ts
import { createTheme } from "@mui/material/styles";
import { red, amber, teal, deepPurple, indigo } from "@mui/material/colors";

/**
 * Max Puzzle Games Maker Theme
 *
 * A vibrant, playful, and energetic MUI theme designed for a puzzle game creation platform.
 * Features:
 * - Bright primary palette with deep purple and indigo accents
 * - Energetic secondary colors (amber, teal)
 * - Fun, rounded shapes and elevated components
 * - Game-inspired typography with bold headings
 * - High contrast for accessibility in creative environments
 */

const maxPuzzleGamesMakerTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: deepPurple[700],
      light: deepPurple[500],
      dark: deepPurple[800],
      contrastText: "#ffffff",
    },
    secondary: {
      main: amber[600],
      light: amber[400],
      dark: amber[800],
      contrastText: "#000000",
    },
    success: {
      main: teal[600],
      light: teal[400],
      dark: teal[800],
    },
    error: {
      main: red[700],
      light: red[500],
      dark: red[900],
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: indigo[600],
    },
    background: {
      default: "#f8f9ff",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#555555",
    },
    divider: "rgba(103, 58, 183, 0.12)",
  },
  shape: {
    borderRadius: 16, // Playful rounded corners
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: "3.5rem",
      letterSpacing: "-0.5px",
      background: "linear-gradient(90deg, #7c4dff 0%, #5e35b1 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.8rem",
      letterSpacing: "-0.25px",
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.2rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.8rem",
      color: deepPurple[700],
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.25rem",
      color: deepPurple[600],
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "1.1rem",
      color: "#444444",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "0.95rem",
      color: "#666666",
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.5px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 24px",
          fontWeight: 600,
          textTransform: "none",
        },
        containedPrimary: {
          background: "linear-gradient(45deg, #7c4dff 30%, #5e35b1 90%)",
          "&:hover": {
            background: "linear-gradient(45deg, #651fff 30%, #512da8 90%)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(45deg, #ffb300 30%, #ff8f00 90%)",
          color: "#000000",
          "&:hover": {
            background: "linear-gradient(45deg, #ff8f00 30%, #ff6f00 90%)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0 8px 32px rgba(103, 58, 183, 0.15)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 16px 40px rgba(103, 58, 183, 0.25)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(90deg, #5e35b1 0%, #7c4dff 100%)",
          boxShadow: "0 4px 20px rgba(103, 58, 183, 0.3)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontWeight: 600,
        },
        colorPrimary: {
          backgroundColor: deepPurple[600],
          color: "#ffffff",
        },
        colorSecondary: {
          backgroundColor: amber[600],
          color: "#000000",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: deepPurple[400],
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: deepPurple[600],
            },
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 12,
          backgroundColor: "#311b92",
          fontSize: "0.9rem",
          fontWeight: 500,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: "0 6px 20px rgba(103, 58, 183, 0.4)",
          "&:hover": {
            boxShadow: "0 8px 24px rgba(103, 58, 183, 0.5)",
          },
        },
      },
    },
  },
  // Custom game-inspired palette extensions
  custom: {
    gradients: {
      primary: "linear-gradient(135deg, #7c4dff 0%, #5e35b1 100%)",
      secondary: "linear-gradient(135deg, #ffb300 0%, #ff8f00 100%)",
      success: "linear-gradient(135deg, #00bfa5 0%, #009688 100%)",
      puzzleGrid:
        "linear-gradient(45deg, #f3e5f5 25%, transparent 25%), linear-gradient(-45deg, #f3e5f5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f3e5f5 75%), linear-gradient(-45deg, transparent 75%, #f3e5f5 75%)",
    },
    shadows: {
      cardHover: "0 16px 40px rgba(103, 58, 183, 0.25)",
      buttonActive: "0 2px 8px rgba(103, 58, 183, 0.3)",
    },
  },
});

export default maxPuzzleGamesMakerTheme;
