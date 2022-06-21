import { React, useState } from "react";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useAuthContext } from "../contexts/AuthContext";

function Home() {
    const { user } = useAuthContext();
    const [data, setData] = useState();
    const id = user.uid;
    const displayName = async () => {
        const docRef = collection(db, "users");
        const snapDoc = await getDoc(docRef);
        setData(snapDoc.data());
    };
    displayName();
    return <div>Welcome to the chat app </div>;
}

export default Home;
