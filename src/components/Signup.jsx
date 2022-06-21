import { React, useState, useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { useAuthContext } from "../contexts/AuthContext";
import { setDoc, doc, getDoc, collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp, user } = useAuthContext();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            let result = await signUp(email, password);
            alert("Account Created Successfully");
            await setDoc(doc(db, "users", result.user.uid), {
                id: result.user.uid,
                name: name,
                email: email,
                password: password,
            });
            navigate("/login");
        } catch (err) {
            alert(err.message);
            setEmail("");
            setPassword("");
            setName("");
        }
    };

    return (
        <>
            <Helmet>
                <title>Register Now</title>
            </Helmet>
            <Container>
                <LeftContainer>
                    <MainHeading>
                        Welcome to the Chatapp Signup Now!
                    </MainHeading>
                </LeftContainer>
                <RightContainer>
                    <LoginContainer>
                        <LoginHeading>Register into Account</LoginHeading>
                        <LoginInfo>Start Chatting after Signup</LoginInfo>
                        <Form>
                            <InputContainer>
                                <TextInput
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.currentTarget.value)
                                    }
                                />
                            </InputContainer>
                            <InputContainer>
                                <TextInput
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.currentTarget.value)
                                    }
                                />
                            </InputContainer>
                            <InputContainer>
                                <TextInput
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.currentTarget.value)
                                    }
                                />
                            </InputContainer>
                            <LoginButton to="/login">Login Now</LoginButton>
                            <ButtonContainer>
                                <SubmitButton onClick={handleSubmit}>
                                    Create an Account
                                </SubmitButton>
                            </ButtonContainer>
                        </Form>
                    </LoginContainer>
                </RightContainer>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    background: #000;
    justify-content: space-between;
    padding: 15px;
    height: 100vh;
`;
const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    @media all and (max-width: 680px) {
        display: none;
    }
`;
const MainHeading = styled.h1`
    font-size: 36px;
    color: #fff;
    line-height: 1.4em;
`;
const RightContainer = styled.div`
    width: 45%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 0 70px 70px;
    @media all and (max-width: 640px) {
        width: 100%;
        padding: 0 55px 55px;
    }
`;
const LoginContainer = styled.div`
    padding-bottom: 70px;
    border-bottom: 1px solid #fff;
    width: 100%;
    color: #fff;
`;
const LoginHeading = styled.h3`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
`;
const LoginInfo = styled.p`
    font-size: 18px;
    margin-bottom: 35px;
`;
const Form = styled.form`
    width: 100%;
    display: block;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
const InputContainer = styled.div`
    margin-bottom: 15px;
    position: relative;
`;
const TextInput = styled.input`
    padding: 20px 25px 20px 30px;
    width: 70%;
    display: block;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    outline: none;
    @media all and (max-width: 640px) {
        width: 95%;
    }
`;
const LoginButton = styled(Link)`
    display: flex;
    justify-content: end;
    margin-bottom: 25px;
    color: #fff;
    font-size: 20px;
    text-decoration: none;
`;
const SubmitButton = styled.button`
    background: #000;
    border: 0;
    outline: 0;
    color: #fff;
    padding: 25px 40px;
    border-radius: 8px;
    font-size: 20px;
    border: 1px solid #fff;
    cursor: pointer;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
