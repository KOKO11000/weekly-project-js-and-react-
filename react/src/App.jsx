import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserContext } from "./UserContext.js";
import { Route, Routes } from "react-router";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import AdminLoginPage from "./pages/AdminLoginPage.jsx";
import ComplaintsTable from "./components/ComplaintsTable.jsx";
import SubmitComplaintPage from "./pages/SubmitComplaintPage.jsx";

function App() {
  const [user, setUser] = useState();
  const [data, setData] = useState();

  // useEffect(() => {
  //   fetch("http://localhost:3003/complaints")
  //     .then((res) => {
  //       res.json();
  //     })
  //     .then((data) => {
  //       (setData(data), console.log(data));
  //     });
  //   if (user) console.log(user);
  // }, [user]);
  // const value = {
  //   user,
  //   setUser,
  // };
  return (
    <div className="min-w-full min-h-screen bg-gray-200 mb-1.5">
      <UserContext.Provider value={""}>
        <Routes>
          {/* <Route path="soldier"element={} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/SubmitComplaints" element={<SubmitComplaintPage textH1="הגשת תלונה"/>}/>

          <Route path="admin" element={<AdminLoginPage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
