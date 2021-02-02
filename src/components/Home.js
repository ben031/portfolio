import React from "react";
import ReactTyped from "react-typed";
import styled from "styled-components";
import profile from "../img/profile2.png";
import javascript from "../img/javascript.png";
import logo from "../img/logo192.png";

const Home = () => {
  return (
    <HomeSection>
      <HomeParagraph>
        <ImgDiv>
          <img src={profile} width={300} alt="profile" className="profile" />
          <img
            src={javascript}
            height={100}
            alt="profile"
            className="javascript"
          />
          <img src={logo} height={100} alt="profile" className="react" />
        </ImgDiv>
        <ReactTyped
          strings={[
            "안녕하세요.<br /> 프론트 엔드 개발자가 <br />되고 싶은<br /><span class='myName'>김덕기</span><br />입니다.",
          ]}
          typeSpeed={80}
          className="typing"
        />
      </HomeParagraph>
    </HomeSection>
  );
};

export default Home;

const HomeSection = styled.section`
  width: 70%;
  margin: 10rem auto;
  text-align: right;
  .typing {
    margin: auto 0;
  }

  @media only screen and (max-width: 1400px) {
    margin-top: 13rem;
    .typing {
      font-size: 4rem;
    }
    .javascript {
      left: 30rem;
    }
    .react {
      left: 38rem;
    }
  }

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    .typing {
      font-size: 3.6rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .typing {
      font-size: 3.4rem;
    }
  }

  @media only screen and (max-width: 500px) {
    margin-top: 10rem;
  }
`;

const HomeParagraph = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 5rem;
  font-weight: 100;
  /* padding: 9rem 9.375rem; */
  @media only screen and (max-width: 1200px) {
    justify-content: flex-end;
  }
`;

const ImgDiv = styled.div`
  display: flex;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;
