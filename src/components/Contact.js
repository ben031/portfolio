import React from "react";
import styled, { keyframes } from "styled-components";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import fadeInDown from "react-animations/lib/fade-in-down";

const Contact = () => {
  return (
    <ContactSection>
      <ContactDiv background="green">
        <p>
          <AiOutlineMail className="icon" />
          <span>ejrlajtwu@naver.com</span>
        </p>
        <p>
          <AiOutlinePhone className="icon" />
          <span>010-3301-4023</span>
        </p>
        <p>
          <AiOutlineGithub className="icon" />
          <span>
            <a
              href="http://www.github.com/ben031"
              target="_blank"
              rel="noreferrer"
            >
              github.com/ben031
            </a>
          </span>
        </p>
        <p>
          <AiOutlineInstagram className="icon" />
          <span>
            <a
              href="https://www.instagram.com/heavy_picture_holic/"
              target="_blank"
              rel="noreferrer"
            >
              instagram.com/heavy_picture_holic
            </a>
          </span>
        </p>
      </ContactDiv>
    </ContactSection>
  );
};

export default Contact;

function makeName(nameOfAni) {
  return keyframes`${nameOfAni}`;
}

const fadeInDownAnimation = makeName(fadeInDown);

const ContactSection = styled.section`
  width: 70%;
  height: calc(100vh - 5.6rem);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactDiv = styled.div`
  width: 40%;
  min-width: 375px;
  min-height: 500px;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .icon {
    font-size: 3rem;
    margin-bottom: 10px;
  }
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    span {
      font-size: 1.3rem;
      font-weight: 200;
    }
  }

  & p {
    animation: 1s ${fadeInDownAnimation};
  }
`;
