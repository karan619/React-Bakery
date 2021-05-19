import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <CircularProgress />
    </div>
  );
};

export default Spinner;
