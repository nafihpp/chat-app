import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    let { user } = useAuthContext();
    if (!user) {
        return <Navigate to="/login" />;
    }
    return children;
};
export default ProtectedRoute;
