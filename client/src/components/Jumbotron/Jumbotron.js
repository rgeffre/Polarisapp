import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 325, width: 400, background: "#333333", padding: "5px" }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
