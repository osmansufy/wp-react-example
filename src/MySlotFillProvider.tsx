// src/lite-plugin.js

import { Slot, SlotFillProvider } from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import React from "react";
import { PluginArea } from "@wordpress/plugins";
// Slot Component that will be filled by the Pro Plugin
const MySlotFillProvider = () => {
  return (
    <Fragment>
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
