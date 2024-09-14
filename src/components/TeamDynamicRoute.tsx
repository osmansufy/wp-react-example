import React from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import DokanLite from "./QueryParamContent/DokanLite";
import DokanPro from "./QueryParamContent/DokanPro";

const TeamDynamicRoute = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  return (
    <div>
      <Link to="/team">Back to Team</Link>
      <h2>This is Team Member {id}</h2>
      {name == "dokan" ? (
        <DokanLite />
      ) : name == "dokan-pro" ? (
        <DokanPro />
      ) : null}
    </div>
  );
};

export default TeamDynamicRoute;
