import React from "react";
import { DocSection } from "../../components/DocSection";
import TutorialImage from "../../components/TutorialImage";
import {
  GridOn,
  Info,
  TipsAndUpdates,
  CheckCircle,
  Flag,
  Directions,
  AutoAwesome,
  Layers,
  VideogameAsset,
} from "@mui/icons-material";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Chip,
  Alert,
  Stack,
  Grid,
} from "@mui/material";

const TeleporterMaze = {
  slug: "teleporter-maze",
  name: "Teleporter Maze",
  icon: <Layers />,
  tagline: "Build grid mazes with numbered teleporters for instant jumps",
  content: (
    <>
      {/* OVERVIEW */}
      <DocSection title="Overview" icon={<Info />} defaultOpen>
        <Typography
          paragraph
          sx={{
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.1rem" }, // Refined font scaling
            lineHeight: 1.6, // Improved readability
          }}
        >
          <strong>Teleporter Maze</strong> allows creators to design grid-based
          mazes with cells containing up to 4 <strong>teleporters</strong>
          (numbered 1–5+). Matching numbers link cells for instant travel.
        </Typography>
        <Typography
          paragraph
          sx={{
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.1rem" },
            lineHeight: 1.6,
          }}
        >
          Players navigate using a joystick, teleporting via numbered
          teleporters to unlock paths, aiming to reach the <strong>END</strong>
          cell to solve the maze.
        </Typography>

        <Box
          sx={{
            mt: 2,
            display: "flex",
            gap: { xs: 0.5, sm: 1 }, // Tighter gap on mobile
            flexWrap: "wrap",
            justifyContent: { xs: "center", sm: "flex-start" }, // Center chips on mobile
          }}
        >
          <Chip
            label="Grid Navigation"
            size="small"
            color="primary"
            variant="outlined"
            sx={{ fontSize: { xs: "0.75rem", sm: "0.8125rem" } }}
          />
          <Chip
            label="Teleporter Jumps"
            size="small"
            color="success"
            variant="outlined"
            sx={{ fontSize: { xs: "0.75rem", sm: "0.8125rem" } }}
          />
          <Chip
            label="Auto-Fill Paths"
            size="small"
            color="info"
            variant="outlined"
            sx={{ fontSize: { xs: "0.75rem", sm: "0.8125rem" } }}
          />
        </Box>
      </DocSection>

      {/* CREATION FLOW */}
      <DocSection title="Step-by-Step Creation" icon={<TipsAndUpdates />}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            fontSize: { xs: "0.8125rem", sm: "0.875rem" },
            lineHeight: 1.5,
          }}
        >
          Follow the editor UI to craft your maze:
        </Typography>

        <List
          dense
          sx={{
            mb: 2,
            "& .MuiListItem-root": {
              alignItems: "flex-start",
              flexDirection: { xs: "column", sm: "row" },
              py: { xs: 1.5, sm: 1 }, // More padding on mobile
            },
          }}
        >
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="1. Set Grid Size"
              secondary={
                <>
                  On the <strong>"Set Size"</strong> modal, input rows (2–5) and
                  columns (2–5) in the yellow fields.
                  <br />
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.6875rem", sm: "0.75rem" } }}
                  >
                    Example: 2×2 grid for a small maze. Available only at start.
                  </Typography>
                </>
              }
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
              secondaryTypographyProps={{
                fontSize: { xs: "0.75rem", sm: "0.8125rem" },
              }}
            />
            <TutorialImage
              src="/images/docs/teleporter-set-size.png"
              alt="Set Size modal with row and column inputs"
              caption="Set grid dimensions in the orange modal."
              width={250}
              maxWidth="100%"
              sx={{ mt: { xs: 1.5, sm: 0 } }}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="2. Set Start & End Cells"
              secondary={
                <>
                  Select a grid cell, then click the{" "}
                  <Flag sx={{ color: "success", verticalAlign: "middle" }} />{" "}
                  green flag to set as <strong>Start</strong> (player spawn).
                  <br />
                  Choose another cell and click the{" "}
                  <Directions
                    sx={{ color: "error", verticalAlign: "middle" }}
                  />{" "}
                  END icon for the <strong>End</strong> (goal).
                  <br />
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.6875rem", sm: "0.75rem" } }}
                  >
                    Start cell auto-assigns Teleporter #1 (blue).
                  </Typography>
                </>
              }
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
              secondaryTypographyProps={{
                fontSize: { xs: "0.75rem", sm: "0.8125rem" },
              }}
            />
            <TutorialImage
              src="/images/docs/teleporter-start-end.png"
              alt="Grid with Start and End markers"
              caption="Assign Start (flag) and End (icon) positions."
              width={300}
              maxWidth="100%"
              sx={{ mt: { xs: 1.5, sm: 0 } }}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="3. Define Teleporters for Win Path"
              secondary={
                <>
                  The <strong>win path</strong> is a player-guided sequence
                  starting at Start (auto-#1), linking teleporters (e.g., #1 →
                  #5 → #8 → #21), and ending at End.
                  <br />
                  <strong>Steps:</strong>
                  <Box
                    component="ul"
                    sx={{
                      mt: 1,
                      pl: 2.5,
                      fontSize: { xs: "0.75rem", sm: "0.8125rem" },
                      lineHeight: 1.5,
                    }}
                  >
                    <li>Select a cell for the next path step.</li>
                    <li>
                      Enter the next teleporter number (e.g., 5) in one of the 4
                      bottom panel input boxes (use 0 to clear).
                    </li>
                    <li>
                      Click <strong>"Set Teleporters"</strong> (orange) to add
                      the colored marker. Repeat for the full chain.
                    </li>
                    <li>Ensure the last teleporter leads to the End cell.</li>
                  </Box>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      mt: 1,
                      fontSize: { xs: "0.6875rem", sm: "0.75rem" },
                    }}
                  >
                    <strong>Rules:</strong> Up to 4 teleporters per cell, 2 per
                    number globally. Paths may branch but must reach End.
                    Numbers can exceed 5 (e.g., #21).
                  </Typography>
                </>
              }
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
              secondaryTypographyProps={{
                fontSize: { xs: "0.75rem", sm: "0.8125rem" },
              }}
            />
          </ListItem>
          <Grid
            container
            spacing={{ xs: 1.5, sm: 2 }}
            sx={{ mt: { xs: 1, sm: 0 } }}
          >
            <Grid item xs={12} sm={6}>
              <TutorialImage
                src="/images/docs/teleporter-set-tps.png"
                alt="Bottom panel with teleporter number inputs"
                caption="Set #5 to continue from #1. Build a chain like #1 → #5 → #8 → #21 → End."
                width={250}
                maxWidth="100%"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TutorialImage
                src="/images/docs/teleporter-win-path.png"
                alt="Grid with a simple win path"
                caption="Example: #1 teleports to a matching #1, then #5 to End."
                width={300}
                maxWidth="100%"
              />
            </Grid>
          </Grid>

          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="4. (Optional) Auto-Complete the Grid"
              secondary={
                <>
                  With the win path set, click <strong>"Auto Complete"</strong>{" "}
                  (green) to fill remaining cells automatically.
                  <br />
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.6875rem", sm: "0.75rem" } }}
                  >
                    Adds safe teleporter connections. Skip for manual design.
                  </Typography>
                </>
              }
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
              secondaryTypographyProps={{
                fontSize: { xs: "0.75rem", sm: "0.8125rem" },
              }}
            />
            <TutorialImage
              src="/images/docs/teleporter-auto-complete.png"
              alt="Grid before and after Auto Complete"
              caption="'Auto Complete' fills unused cells after the win path."
              width={300}
              maxWidth="100%"
              sx={{ mt: { xs: 1.5, sm: 0 } }}
            />
          </ListItem>
          <Grid
            container
            spacing={{ xs: 1.5, sm: 2 }}
            sx={{ mt: { xs: 1, sm: 0 } }}
          >
            <Grid item xs={12} sm={6}>
              <TutorialImage
                src="/images/docs/teleporter-auto1.png"
                alt="Grid after one Auto Complete"
                caption="Single 'Auto Complete' click adds initial fillers."
                width={300}
                maxWidth="100%"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TutorialImage
                src="/images/docs/teleporter-auto2.png"
                alt="Grid after two Auto Completes"
                caption="Double click for full completion; manual filling is also an option."
                width={300}
                maxWidth="100%"
              />
            </Grid>
          </Grid>

          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="5. Set Move Limit"
              secondary={
                <>
                  Enter a move count (e.g., 5) in the input, then click{" "}
                  <strong>"Set Moves"</strong> to cap player steps to reach End.
                  <br />
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.6875rem", sm: "0.75rem" } }}
                  >
                    Example: 3 moves for a challenge. Test with Preview.
                  </Typography>
                </>
              }
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
              secondaryTypographyProps={{
                fontSize: { xs: "0.75rem", sm: "0.8125rem" },
              }}
            />
            <TutorialImage
              src="/images/docs/teleporter-set-moves.png"
              alt="Set Moves input and button"
              caption="'Set Moves' adds a step limit for gameplay."
              width={200}
              maxWidth="100%"
              sx={{ mt: { xs: 1.5, sm: 0 } }}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="6. Clear & Refine"
              secondary={
                <>
                  Click <strong>"Clear"</strong> to reset all cells. Adjust
                  steps 3–5 as needed.
                  <br />
                </>
              }
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
              secondaryTypographyProps={{
                fontSize: { xs: "0.75rem", sm: "0.8125rem" },
              }}
            />
            <TutorialImage
              src="/images/docs/teleporter-clear.png"
              alt="Clear button in editor"
              caption="'Clear' resets the grid for new edits."
              width={200}
              maxWidth="100%"
              sx={{ mt: { xs: 1.5, sm: 0 } }}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="7. Test"
              secondary={
                <>
                  Click the preview icon to test the maze.
                  <br />
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.6875rem", sm: "0.75rem" } }}
                  >
                    In Preview, move with the joystick; click 'Teleport' on a
                    numbered cell to jump to its match.
                  </Typography>
                </>
              }
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
              secondaryTypographyProps={{
                fontSize: { xs: "0.75rem", sm: "0.8125rem" },
              }}
            />
            <TutorialImage
              src="/images/docs/teleporter-preview.png"
              alt="Preview button in editor"
              caption="Use Preview to test the maze flow."
              width={150}
              maxWidth="100%"
              sx={{ mt: { xs: 1.5, sm: 0 } }}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="8. Save"
              secondary="Click <strong>“Save”</strong> to finalize your maze for players."
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
              secondaryTypographyProps={{
                fontSize: { xs: "0.75rem", sm: "0.8125rem" },
              }}
            />
          </ListItem>
        </List>

        <Alert
          severity="info"
          sx={{
            borderRadius: 2,
            fontSize: { xs: "0.8125rem", sm: "0.875rem" },
            py: { xs: 1, sm: 1.5 }, // Adjusted padding
          }}
        >
          <strong>Win Path Essentials:</strong> Begins at Start (#1), ends at
          End. Sequences like #1 → #5 → #8 → #21 enhance gameplay. Auto-Complete
          is optional.
        </Alert>
      </DocSection>

      {/* EXAMPLE TABLE */}
      <DocSection title="Example: 3x3 Grid Win Path" icon={<GridOn />}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            fontSize: { xs: "0.8125rem", sm: "0.875rem" },
            lineHeight: 1.5,
          }}
        >
          Start (top-left, #2 green) → Mid-center (#6 gray) → Bottom-left (#13
          pink) → Top-right (#9 purple) → Bottom-right (#8 pink) End.
        </Typography>

        <TutorialImage
          src="/images/docs/teleporter-3x3-win-path.png"
          alt="3x3 grid with win path teleporters"
          caption="Manual win path with Auto-Complete adding branches."
          width={280}
          maxWidth="100%"
          sx={{ mb: 2 }}
        />

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            fontSize: { xs: "0.8125rem", sm: "0.875rem" },
            lineHeight: 1.5,
          }}
        >
          Set Moves: Limit to 6 steps. Auto-Complete fully populates the grid.
          Manual filling is also possible.
        </Typography>
        <TutorialImage
          src="/images/docs/teleporter-3x3-auto.png"
          alt="3x3 grid after Auto Complete"
          caption="Double 'Auto Complete' for full grid; adjust manually if needed."
          width={300}
          maxWidth="100%"
        />
      </DocSection>

      {/* PLAYER GAMEPLAY */}
      <DocSection title="How Players Solve It" icon={<VideogameAsset />}>
        <List
          dense
          sx={{
            "& .MuiListItem-root": {
              alignItems: "flex-start",
              flexDirection: { xs: "column", sm: "row" },
              py: { xs: 1.5, sm: 1 },
            },
          }}
        >
          <ListItem>
            <ListItemIcon>
              <Flag color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Spawn at Start"
              secondary="Navigate with the on-screen joystick."
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
              secondaryTypographyProps={{
                fontSize: { xs: "0.75rem", sm: "0.8125rem" },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Directions color="success" />
            </ListItemIcon>
            <ListItemText
              primary="Use Teleporters"
              secondary="Click 'Teleport' on a numbered cell to jump to its match."
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
              secondaryTypographyProps={{
                fontSize: { xs: "0.75rem", sm: "0.8125rem" },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AutoAwesome color="info" />
            </ListItemIcon>
            <ListItemText
              primary="Follow Win Path"
              secondary="Chain jumps (e.g., #2 → #6); explore branches."
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
              secondaryTypographyProps={{
                fontSize: { xs: "0.75rem", sm: "0.8125rem" },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="Reach End"
              secondary="Win if within move limit; retry if exceeded."
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
              secondaryTypographyProps={{
                fontSize: { xs: "0.75rem", sm: "0.8125rem" },
              }}
            />
          </ListItem>
        </List>
      </DocSection>

      {/* CREATOR TIPS */}
      <DocSection title="Creator Tips" icon={<TipsAndUpdates />}>
        <List
          dense
          sx={{
            "& .MuiListItem-root": {
              alignItems: "flex-start",
              flexDirection: { xs: "column", sm: "row" },
              py: { xs: 1.5, sm: 1 },
            },
          }}
        >
          <ListItem>
            <ListItemText
              primary="Sketch path: Plan #1 → #5 → #8 → End first."
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Use high numbers (#21+) for surprises."
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Set Moves: 10–20 easy, 5–10 hard."
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Choose Manual vs. Auto: Manual for detail, Auto for speed."
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Test thoroughly: Preview to avoid dead ends."
              primaryTypographyProps={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            />
          </ListItem>
        </List>
      </DocSection>
    </>
  ),
};

export default TeleporterMaze;
