import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Store, { AuthContextProvider } from "./contexts/store";
import Home from "./components/Home";
import MainRouter from "./routing/routers/MainRouter";

function App() {
    return (
        <Store>
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </Store>
    );
}

export default App;
