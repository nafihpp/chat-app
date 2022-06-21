import { React } from "react";
import Navbar from "./Includes/Navbar";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
function Home() {
    return (
        <>
            <Navbar />
        </>
    );
}

export default Home;
