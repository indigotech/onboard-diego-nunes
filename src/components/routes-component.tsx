import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import { AddUserPage } from "../routes/add-user";
import { AdminPage } from "../routes/admin";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="add-user" element={<AddUserPage />} />
      </Routes>
    </BrowserRouter>
  );
};
