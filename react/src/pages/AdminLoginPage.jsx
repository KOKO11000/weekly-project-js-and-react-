import React from "react";
import Header from "../components/Header.jsx";
import ComplaintsForm from "../components/ComplaintsForm.jsx";

export default function AdminLoginPage() {
  return (
    <div>
      <Header title="Admin Login Page" />
      <ComplaintsForm textH1="כניסה לאדמין ראשי"/>
    </div>
  );
}
