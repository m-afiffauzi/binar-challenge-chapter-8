import React from "react";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import Edit from "./components/Edit";
import EditExp from "./components/EditExp";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [data, setData] = useState([
    { id: 1, username: "admin", email: "admin@example.com", password: "password", experience: 0, level: 0 },
    { id: 2, username: "go", email: "go@example.com", password: "gogogo", experience: 1, level: 0 },
    { id: 3, username: "new", email: "new@example.com", password: "newnew", experience: 2, level: 1 },
  ]);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard data={data} />} />
          <Route path="/create" element={<Create data={data} />} />
          <Route exact path="/edit/:id" element={<Edit data={data} />} />
          <Route path="/edit/exp/:id" element={<EditExp data={data} />} />
        </Routes>
      </Router>
    </>
  );
}
