import React from "react";
import { Link } from "react-router";
import AdminLoginPage from "./AdminLoginPage.jsx";
import Header from "../components/Header.jsx";
import ComplaintsForm from "../components/ComplaintsForm.jsx";
import Layout from "../components/Layout.jsx";
export default function HomePage(props) {
  return (
    <div>
      <Header title="Home Page" link="/" />
      <Layout textH1="שירות תלונות לחיילים" link="/SubmitComplaints" />
      <ComplaintsForm textH1="למפקדים בלבד" />
    </div>
  );
}
