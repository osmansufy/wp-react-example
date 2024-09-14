import React from "react";
import { useParams, Link } from "react-router-dom";

const DynamicRoutOne = () => {
  const { id } = useParams();
  return (
    <div>
      <Link to="/">Back to Home</Link>
      <h1>This is Dynamic Route {id}</h1>
    </div>
  );
};

export default DynamicRoutOne;
