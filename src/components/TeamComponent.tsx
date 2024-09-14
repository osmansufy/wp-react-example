import React from "@wordpress/element";
import {
  Button,
  ButtonGroup,
  NavigableMenu,
  Panel,
  PanelBody,
  PanelRow,
} from "@wordpress/components";
import { Link, useNavigate } from "react-router-dom";

const TeamComponent = () => {
  const navigate = useNavigate();
  return (
    <Panel header="My panel">
      <Link to="/">Back to Home</Link>
      <hr />
      <ButtonGroup>
        <Button
          style={{
            margin: "0 4px",
          }}
          variant="primary"
          onClick={() => navigate("/team/1?name=dokan")}
        >
          Member 1
        </Button>
        <Button
          style={{
            margin: "0 4px",
          }}
          variant="primary"
          onClick={() => navigate("/team/2?name=dokan-pro")}
        >
          Member 2
        </Button>
      </ButtonGroup>
    </Panel>
  );
};

export default TeamComponent;
