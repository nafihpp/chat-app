import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../contexts/store";

const AppRoute = ({ children }) => {
    console.log("in appr");
    const {
        state: { user_data },
    } = useContext(Context);
    const isLogin = user_data.isLogin;
    return isLogin ? children : <Navigate to="auth/" />;
};

export default AppRoute;
