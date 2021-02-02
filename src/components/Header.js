import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header">
      <LogoDiv>
        <Link to="/" className="logo">
          코딩대학 개발과
        </Link>
        <Nav />
      </LogoDiv>
    </header>
  );
};

export default Header;

const LogoDiv = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1024px) {
    .logo {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .logo {
      font-size: 1.6rem;
      text-align: center;
    }
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    .logo {
      margin: 1rem;
    }
  }
`;
