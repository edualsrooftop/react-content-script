/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import "./App.css";
import Logo from "./Logo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" id="App-logo" title="React logo" />
        <p>Hello, World!</p>
        <p className="text-red-600">I'm a Chrome Extension Popup!</p>
      </header>
    </div>
  );
}

export default App;
