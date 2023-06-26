/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import { useState, useEffect } from "react";
import Logo from "./Logo";
import Drawer from "./components/Drawer";
import { useAppStore } from "./store.js";
import { chromeFetch } from "./utils.js";


function App() {
  const app = useAppStore();

  useEffect(() => {
    chromeFetch(
      { url: "https://stashproperty.com.au/app/api/config", method: "get" },
      (result: any) => {
        console.log(result);
      }
    );
  }, []);

  return (
    <div id="App" className="z-top text-gray-900">
      <button
        className="z-10 absolute text-red-200 right-0 top-20 bg-primary-dark rounded-l-md p-2 overflow-hidden"
        onClick={() => useAppStore.setState({ drawer: !app.drawer })}
      >
        <div className="h-[120px] w-[30px] z-50">
          <Logo className="-rotate-90 scale-[3] w-full h-full" id="App-logo" title="React logo" />
        </div>
      </button>
      <Drawer />
    </div>
  );
}

export default App;
