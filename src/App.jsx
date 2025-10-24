import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Legal from "./pages/legal";
import DocsIndex from "./pages/DocsIndex";
import DocPage from "./pages/DocPage";
import NotFound from "./pages/NotFound";

import { Box } from "@mui/material";

export default function App() {
  return (
    <Box>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal" element={<Legal />} />

        {/* DOCS */}
        <Route path="/docs" element={<DocsIndex />} />
        <Route path="/docs/:slug" element={<DocPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}
