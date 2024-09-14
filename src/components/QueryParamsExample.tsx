import React from "react";
import { useSearchParams } from "react-router-dom";
const QueryParamsExample = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  return <div>Query Params Example {name}</div>;
};

export default QueryParamsExample;
