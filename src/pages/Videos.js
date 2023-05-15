import * as React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import TikApi from "../components/TikApi";

function Videos() {
  return (
    <div>
      <Navbar />
      <Title />
      <TikApi style={{ height: "100vh", backgroundColor: "#fff" }} />
    </div>
  );
}

export default Videos;
