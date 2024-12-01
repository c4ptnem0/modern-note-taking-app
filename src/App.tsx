import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/themes/theme-provider";
import { Login } from "./views/Login";
import { Signup } from "./views/Signup";
import { NoteLayout } from "./layouts/NoteLayout";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/dashboard" element={<NoteLayout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
