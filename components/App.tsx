import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LearnPage from "./pages/LearnPage";
import HomePage from "./pages/HomePage";
import PracticePage from "./pages/PracticePage";
import LeaderBoard from "./pages/LeaderBoard";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />
        {/* LearnPage route */}
        <Route path="/learnPage" element={<LearnPage />} />
        {/* LeaderBoard route */}
        <Route path="/leaderBoard" element={<LeaderBoard />} />
        {/* PracticePage route */}
        <Route path="/practicePage/:level" Component={PracticePage} />
      </Routes>
    </Router>
  );
};

export default App;
