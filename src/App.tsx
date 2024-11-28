import { useState } from "react";
import { NoteLayout } from "./components/NoteLayout";
import { ThemeProvider } from "./components/themes/theme-provider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <NoteLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
