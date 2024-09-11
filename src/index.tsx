import React, { createRoot } from "@wordpress/element";
import domReady from "@wordpress/dom-ready";

import App from "./App";
const container = document.getElementById("wp-react-example-root");
if (container) {
  console.log("container", container);
  const root = createRoot(container);

  domReady(() => {
    root.render(<App />);
  });
}
