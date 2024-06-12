// 1. Create context
// 2. Provider (Truyền dữ liệu)
// 3. Consumer (Nhận dữ liệu)
import Content from "./components/Content";
import { useState, createContext } from "react";
import "./App.css";
export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: 100 }}>
        <button onClick={toggleTheme}>Click</button>
        <Content/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
