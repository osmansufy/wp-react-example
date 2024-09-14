import { Dropdown, Button } from "@wordpress/components";
import React from "@wordpress/element";

const DropDownExample = () => {
  console.log("DropDownExample");
  return (
    <>
      <Dropdown
        className="my-container-class-name"
        contentClassName="my-dropdown-content-classname"
        popoverProps={{ placement: "bottom-start" }}
        renderToggle={({ isOpen, onToggle }) => (
          <Button variant="primary" onClick={onToggle} aria-expanded={isOpen}>
            Toggle Dropdown!
          </Button>
        )}
        renderContent={() => <div>This is the content of the dropdown.</div>}
      />
    </>
  );
};

export default DropDownExample;
