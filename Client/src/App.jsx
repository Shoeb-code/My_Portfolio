import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home/Home.jsx";
import ProjectDetail from "./pages/Projects/ProjectDetail.jsx";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
