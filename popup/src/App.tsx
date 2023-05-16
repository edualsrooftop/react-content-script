/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import Logo from "./Logo";

function App() {
  return (
    <div className="StashPlugin">
      <Logo className="" id="App-logo" title="React logo" />
      <p>Hello, World!</p>
      <p className="text-red-600">I'm a Chrome Extension Popup!</p>
    </div>
  );
}

export default App;
