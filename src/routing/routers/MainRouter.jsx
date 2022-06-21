import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "../../contexts/store";
import AppRoute from "../routes/AppRoute";
import AuthRoute from "../routes/AuthRoute";
import AppRouter from "./AppRouter";
import AuthRouter from "./AuthRouter";

function MainRouter() {
    const {
        dispatch,
        state: { user_data },
    } = useContext(Context);
    useEffect(() => {
        let user_data = localStorage.getItem("user_data");
        user_data = JSON.parse(user_data);
        dispatch({ type: "UPDATE_USER_DATA", user_data: user_data });
    }, []);
    return (
        <Routes>
            <Route
                path="auth/*"
                element={
                    <AuthRoute>
                        <AuthRouter />
                    </AuthRoute>
                }
            />
            <Route
                path="/*"
                element={
                    <AppRoute>
                        <AppRouter />
                    </AppRoute>
                }
            />
        </Routes>
    );
}

export default MainRouter;
