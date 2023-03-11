import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Contact from "./pages/Contact";
import UserDetail from "./pages/UserDetail/index";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:user_id" element={<UserDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
export default Router;
