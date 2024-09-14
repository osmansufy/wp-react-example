import React from "@wordpress/element";
import MySlotFillProvider from "./MySlotFillProvider";
import "./store/store";
import { useSelect } from "@wordpress/data";
import { State, storeName } from "./store/store";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import RootComponent from "./components/RootComponent";
import TeamComponent from "./components/TeamComponent";
import DynamicRoutOne from "./components/DynamicRoutOne";
import DynamicRoutTwo from "./components/TeamDynamicRoute";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootComponent />} />

        <Route path="/team" element={<TeamComponent />} />
        <Route path="/slot" element={<MySlotFillProvider />} />
        <Route path="/team/:id" element={<DynamicRoutTwo />} />
        {/* dynamic route  */}
        <Route path="/dynamic-route/:id" element={<DynamicRoutOne />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
