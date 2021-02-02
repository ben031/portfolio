import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <div>
      <NavDiv>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </NavDiv>
    </div>
  );
};

export default Nav;

const NavDiv = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  li a {
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    position: relative;
    border-radius: 5px;
    font-size: 1.5rem;
    font-weight: 300;
    transition: all 0.5s ease-out;
  }

  li a:hover {
    background-color: #fff;
    /* color: #000; */
  }

  & li:not(:last-child)::after {
    content: "";
    display: inline-block;
    /* margin-left: ; */
    position: absolute;
    top: 38px;
    width: 1px;
    height: 18px;
    background-color: #000;
  }

  @media only screen and (max-width: 1024px) {
    li a {
      margin: 0;
      padding: 0.5rem 0.8rem;
    }
    & li:not(:last-child)::after {
      content: none;
    }
  }
  @media only screen and (max-width: 768px) {
    li a {
      margin: 0;
      padding: 0.5rem 0.6rem;
      font-size: 1.3rem;
    }
  }
`;
