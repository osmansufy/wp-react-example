import { Button, Dropdown, SlotFillProvider } from "@wordpress/components";
import React from "@wordpress/element";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DokanLiteForm from "./DokanLiteForm";
import DropDownExample from "./DropDownExample";
const RootComponent = () => {
  const navigate = useNavigate();
  return (
    <SlotFillProvider>
      <div>
        <h1>Home Page</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/dynamic-route/1">Dynamic Route One</Link>
            </li>
            <li>
              <Link to="/dynamic-route/2">Dynamic Route Two</Link>
            </li>
          </ul>
        </nav>
        <DropDownExample />
        <DokanLiteForm />
      </div>
    </SlotFillProvider>
  );
};

export default RootComponent;
