import { ThemeProvider } from "@/components/themeProvider";
import Home from "./Home";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  );
}

export default App;
