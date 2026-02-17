import React from "react";
import { Link } from "react-router";
import AdminLoginPage from "./AdminLoginPage.jsx";
export default function HomePage() {
  return (
    <div>
      <Link to={"/submit"}>שליחת תלונה </Link>
      <div>
        <input type="password" placeholder="password..." name="" id="" />
        <button onClick={<AdminLoginPage />}>כניסה לאדמין</button>
      </div>
    </div>
  );
}
