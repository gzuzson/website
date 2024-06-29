import './App.css';
import Hero from "./components/Hero/Hero";
import React from "react";
import {Toggle} from "./components/Toggle/Toggle";
import useLocalStorage from "use-local-storage";
import Palette from "./components/Palette/Palette";

function App() {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <header className="App-header">
          <Toggle
            isChecked={isDark}
            handleChange={() => setIsDark(!isDark)}
          />
          <Hero />
          <Palette />
      </header>
    </div>
  );
}

export default App;