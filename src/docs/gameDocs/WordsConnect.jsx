// src/docs/gameDocs/WordsConnect.js
import React from "react";
import { DocSection } from "../../components/DocSection";
import {
  TouchApp,
  Info,
  TipsAndUpdates,
  CheckCircle,
  GridOn,
  TextFields,
  AddCircle,
  Delete,
  Save,
  Layers,
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

const WordsConnect = {
  slug: "words-connect",
  name: "Words Connect",
  icon: <Layers />,
  tagline: "One master word. Many racks. Swipe to spell sub-words.",
  content: (
    <>
      {/* OVERVIEW */}
      <DocSection title="Overview" icon={<Info />} defaultOpen>
        <Typography paragraph>
          <strong>Words Connect</strong> is a word puzzle where you start with a{" "}
          <strong>master word</strong> (e.g., <code>START</code>), then create{" "}
          <strong>multiple racks</strong> of letters.
        </Typography>
        <Typography paragraph>
          For each rack, you <strong>swipe</strong> to spell a{" "}
          <strong>valid sub-word</strong> made from those letters. Players must
          find <em>all</em> sub-words to win.
        </Typography>

        <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Chip
            label="Word Breakdown"
            size="small"
            color="primary"
            variant="outlined"
          />
          <Chip
            label="Multi-Rack"
            size="small"
            color="success"
            variant="outlined"
          />
          <Chip
            label="Swipe-to-Spell"
            size="small"
            color="info"
            variant="outlined"
          />
        </Box>
      </DocSection>

      {/* CREATION FLOW */}
      <DocSection title="Step-by-Step Creation" icon={<TipsAndUpdates />}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Here’s exactly how to build a puzzle in the app:
        </Typography>

        <List dense sx={{ mb: 3 }}>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="1. “Set Letters”"
              secondary={
                <>
                  Enter the <strong>master word</strong> (e.g.,{" "}
                  <code>START</code>)
                  <br />
                  <Typography variant="caption" color="text.secondary">
                    This defines the maximum rack length (5 letters), and can
                    only be done at the start of the editor
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="2. Click “Add Rack”"
              secondary="Creates a new rack with 2–5 letters. 5 because the master word START is 5 letters"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="3. Select rack length"
              secondary={
                <>
                  Choose <strong>2, 3, 4, or 5</strong> letters
                  <br />
                  <Typography variant="caption" color="text.secondary">
                    Must be ≤ master word length
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="4. Select a rack"
              secondary="Click on a rack, and its color would change "
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="5. Swipe to spell a sub-word"
              secondary={
                <>
                  Drag across letters to form a word: <code>S A T → SAT</code>
                  <br />
                  <Typography variant="caption" color="text.secondary">
                    Must be equal to the selected rack length
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="6. Repeat for more racks"
              secondary="Add as many sub-words as you want"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="7. Click “Save”"
              secondary="Puzzle is ready!"
            />
          </ListItem>
        </List>

        <Alert severity="warning" sx={{ borderRadius: 2 }}>
          <strong>Rule:</strong> Every sub-word{" "}
          <strong>must use only letters from the master word</strong> and be a{" "}
          <strong>valid English word</strong>.
        </Alert>
      </DocSection>

      {/* EXAMPLE TABLE */}
      <DocSection title="Example: Master Word = START" icon={<GridOn />}>
        <TableContainer component={Paper} sx={{ mt: 2, mb: 3 }}>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell>
                  <strong>Rack</strong>
                </TableCell>
                <TableCell>
                  <strong>Letters</strong>
                </TableCell>
                <TableCell>
                  <strong>Sub-Word</strong>
                </TableCell>
                <TableCell>
                  <strong>Swipe Path</strong>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rack 1</TableCell>
                <TableCell>
                  <code>S T A R T</code>
                </TableCell>
                <TableCell>
                  <code>STAR</code>
                </TableCell>
                <TableCell>
                  <code>S→T→A→R</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rack 2</TableCell>
                <TableCell>
                  <code>S A T</code>
                </TableCell>
                <TableCell>
                  <code>SAT</code>
                </TableCell>
                <TableCell>
                  <code>S→A→T</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rack 3</TableCell>
                <TableCell>
                  <code>R A T</code>
                </TableCell>
                <TableCell>
                  <code>RAT</code>
                </TableCell>
                <TableCell>
                  <code>R→A→T</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rack 4</TableCell>
                <TableCell>
                  <code>A T</code>
                </TableCell>
                <TableCell>
                  <code>AT</code>
                </TableCell>
                <TableCell>
                  <code>A→T</code>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="body2" color="text.secondary">
          Players must find <strong>all 4 words</strong> to complete the puzzle.
        </Typography>
      </DocSection>

      {/* PLAYER GAMEPLAY */}
      <DocSection title="How Players Solve It" icon={<TouchApp />}>
        <List dense>
          <ListItem>
            <ListItemIcon>
              <TextFields color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="See all racks"
              secondary="Each rack is a row of letters"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TouchApp color="success" />
            </ListItemIcon>
            <ListItemText
              primary="Swipe accross the letters tray"
              secondary="Form a valid word using only those letters"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="Word is revealed"
              secondary="The rack would automatically reveal its word if swiped correctly"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GridOn color="info" />
            </ListItemIcon>
            <ListItemText
              primary="Complete all racks"
              secondary="Win the puzzle!"
            />
          </ListItem>
        </List>
      </DocSection>

      {/* CREATOR TIPS */}
      <DocSection title="Creator Tips" icon={<TipsAndUpdates />}>
        <List dense>
          <ListItem>
            <ListItemText primary="Avoid duplicate racks" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Test: Can every word be spelled?" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Theme it: e.g., master word = 'ELEPHANT' → sub-words: PLANT, ANT, TEAL" />
          </ListItem>
        </List>
      </DocSection>
    </>
  ),
};

export default WordsConnect;
