import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../components/Login";
import Register from "../../components/Signup";

function AuthRouter() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default AuthRouter;
