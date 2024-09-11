import { createSlotFill, Panel, PanelBody } from "@wordpress/components";
import React from "@wordpress/element"; // Import React from react

const { Fill, Slot } = createSlotFill("MyFill");

const MySlotFill = () => {
  return (
    <Fill>
      <Panel>
        <PanelBody title="My Panel">
          <p>My Panel Content</p>
        </PanelBody>
      </Panel>
    </Fill>
  );
};

// Export the Slot to be used elsewhere
MySlotFill.Slot = Slot;

export default MySlotFill;
