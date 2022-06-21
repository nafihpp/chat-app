import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../contexts/store";

const AuthRoute = ({ children }) => {
    console.log("in authr");
    const {
        state: { user_data },
    } = useContext(Context);
    const isLogin = user_data.isLogin;
    console.log(isLogin);
    return !isLogin ? children : <Navigate to="/home" />;
};

export default AuthRoute;
