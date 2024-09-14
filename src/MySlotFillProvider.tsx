// src/lite-plugin.js

import { Slot, SlotFillProvider } from "@wordpress/components";
import React, { Fragment } from "@wordpress/element";
import { PluginArea } from "@wordpress/plugins";
import { Link } from "react-router-dom";
// Slot Component that will be filled by the Pro Plugin
const MySlotFillProvider = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team">About</Link>
          </li>
        </ul>
      </nav>
      {/* SlotFillProvider ensures that Slot/Fill communication works */}
      <SlotFillProvider>
        <div
          style={{
            padding: "20px",
            background: "#fff5f5",
            border: "1px solid #f2a1a1",
          }}
        >
          <h1>This is the Lite Plugin</h1>
          <Slot name="wp-react-pro" />
          <PluginArea />
        </div>
      </SlotFillProvider>
    </Fragment>
  );
};

export default MySlotFillProvider;
