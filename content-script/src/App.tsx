/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import { useEffect } from "react";
import "./App.css";
import Logo from "./Logo";
import Drawer from "./components/Drawer";
import { useAppStore } from "./store.js";
import { chromeFetch } from "./utils.js";

function App() {
  const app = useAppStore();
  useEffect(() => {
    chromeFetch({ url: "https://stashproperty.com.au/app/api/config", method: "get" }, (result: any) => {
      console.log(result);
    })
  }, [])
  return (
    <div className="StashPlugin z-top">
      <button className="absolute  bg-white right-10 top-10" onClick={() => useAppStore.setState({ drawer: !app.drawer })}> <Logo className="flex w-8 h-8" id="App-logo" title="React logo" /> Stash</button>
      <Drawer />
    </div>
  );
}

export default App;
