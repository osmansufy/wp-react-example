import React from "@wordpress/element";
import MySlotFillProvider from "./MySlotFillProvider";

const App = () => {
  return (
    <div
      style={{
        color: "red",
      }}
    >
      <MySlotFillProvider />
    </div>
  );
};

export default App;
