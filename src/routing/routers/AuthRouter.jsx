import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../components/Login";
import Register from "../../components/Signup";
import Home from "../../components/Home";
function AuthRouter() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default AuthRouter;
