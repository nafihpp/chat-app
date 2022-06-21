import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { useAuthContext } from "../contexts/AuthContext";

export default function Login() {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { logIn, user } = useAuthContext();
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await logIn(email, password);
            setisLoggedIn(true);
            // alert("successfully logined");
            const pizza = localStorage.setItem(
                "user_file",
                JSON.stringify(user, isLoggedIn)
            );
            console.log(user);
            isLoggedIn && navigate("/home");
        } catch (err) {
            alert(err.message);
            setEmail("");
            setPassword("");
        }
    };
    useEffect(() => {
        const pizza = localStorage.setItem(
            "user_file",
            JSON.stringify(user, isLoggedIn)
        );
    }, []);
    console.log(isLoggedIn, "log");
    return (
        <>
            <Helmet>
                <title>Login Now</title>
            </Helmet>
            <MainContainer>
                <Wrapper>
                    <Container>
                        <LeftContainer>
                            <MainHeading>
                                Welcome to the Chat-app Login Now!
                            </MainHeading>
                        </LeftContainer>
                        <RightContainer>
                            <LoginContainer>
                                <LoginHeading>
                                    Login to your Account
                                </LoginHeading>
                                <LoginInfo>
                                    Enter email and password to login
                                </LoginInfo>
                                <Form>
                                    <InputContainer>
                                        <TextInput
                                            type="email"
                                            placeholder="Email"
                                            onChange={(e) =>
                                                setEmail(e.currentTarget.value)
                                            }
                                        />
                                    </InputContainer>
                                    <InputContainer>
                                        <TextInput
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) =>
                                                setPassword(
                                                    e.currentTarget.value
                                                )
                                            }
                                        />
                                    </InputContainer>
                                    <LoginButton to="/">Signup Now</LoginButton>
                                    <ButtonContainer>
                                        <SubmitButton onClick={handleSubmit}>
                                            Login
                                        </SubmitButton>
                                    </ButtonContainer>
                                </Form>
                            </LoginContainer>
                        </RightContainer>
                    </Container>
                </Wrapper>
            </MainContainer>
        </>
    );
}
const MainContainer = styled.section`
    background: #000;
    height: 100vh;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 15px;
`;
const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    @media all and (max-width: 640px) {
        display: none;
    }
`;
const MainHeading = styled.h1`
    font-size: 28px;
    color: #fff;
    line-height: 1.4em;
`;
const RightContainer = styled.div`
    color: #fff;
    padding-top: 80px;
    width: 35%;
    @media all and (max-width: 640px) {
        width: 100%;
        padding: 0 55px 55px;
    }
`;
const LoginContainer = styled.div`
    padding-bottom: 70px;
    border-bottom: 1px solid #fff;
    width: 100%;
`;
const LoginHeading = styled.h3`
    font-size: 27px;
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
`;
const InputContainer = styled.div`
    margin-bottom: 15px;
    position: relative;
    &:before {
    }
`;
const TextInput = styled.input`
    padding: 20px 25px 20px 30px;
    width: 93%;
    display: block;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    outline: none;
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;
const LoginButton = styled(Link)`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 25px;
    color: #fff;
    font-size: 20px;
    text-decoration: none;
`;
const SubmitButton = styled.a`
    background: #000;
    border: 0;
    outline: 0;
    color: #fff;
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    border: 1px solid;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
