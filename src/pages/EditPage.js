import * as React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import EditForm from "../components/EditForm";

function EditPage() {
  return (
    <div>
      <Navbar />
      <Title />
      <EditForm style={{ backgroundColor: "#fff" }} />
    </div>
  );
}

export default EditPage;
