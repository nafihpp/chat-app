import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
function Navbar({ item, setItem }) {
    const [search, setSearch] = useState([]);
    const handleFilter = (e) => {
        var searched = e.target.value.toLowerCase();
        setSearch(searched);
        console.log(search);
    };
    return (
        <NavbarTop>
            <Wrap className="wrapper">
                <MainList>
                    <Childone>
                        <HeadDiv>
                            <LogoImg src={require("../../assets/chat.webp")} />
                        </HeadDiv>
                    </Childone>
                    <Childtwo>
                        <DashboardLink to="/signup" className="Margin">
                            Edit Profile
                        </DashboardLink>
                        <Button to="/cart">
                            <IoIosNotificationsOutline />
                            <Badge>
                                <Priced>{10}</Priced>
                            </Badge>
                        </Button>
                        <Profile>
                            <CgProfile />
                        </Profile>
                    </Childtwo>
                </MainList>
            </Wrap>
        </NavbarTop>
    );
}
const Profile = styled.span``;
const Wrap = styled.div``;
const Priced = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Button = styled(Link)`
    color: white;
    cursor: pointer;
    position: relative;
    :hover {
        color: white;
    }
`;
const Badge = styled.div`
    background: green;
    border-radius: 84px;
    position: absolute;
    top: 10px;
    left: 11px;
    width: 130%;
    height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const NavbarTop = styled.section`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 300;
    background: #000;
`;
const MainList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Childone = styled.div``;
const HeadDiv = styled.div`
    width: 100px;
    cursor: pointer;
    overflow: hidden;
    border-radius: 3px;
    @media all and (max-width: 768px) {
        width: 100px;
    }
`;
const LogoImg = styled.img`
    display: block;
    width: 100%;
`;
const Childtwo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const DashboardLink = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    border: 2px solid #fff;
    border-radius: 5px;
    color: #fff;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    margin-right: 10px;
    &.Margin {
        margin-right: 10px;
    }
    @media all and (max-width: 640px) {
        width: 100px;
    }
`;

export default Navbar;
