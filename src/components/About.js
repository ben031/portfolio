import React from "react";
import styled from "styled-components";
import myPhoto from "../img/myphoto.jpeg";

const About = () => {
  return (
    <AboutSection>
      <div className="imgDiv">
        <img src={myPhoto} alt="photoOfben" />
      </div>
      <h1>개발, 같이 하고 싶습니다 🙂</h1>
      <hr />
      <p>
        안녕하세요.
        <br />
        프론트엔드 개발자 김덕기 입니다.
        <br />
        HTML, CSS, Javascript, React를 다룰 줄 알고 계속 배워가고 있습니다.
        <br />
        클라이언트와 서버의 대화 방법과 서로가 어떻게 데이터를 주고 받는지에도
        흥미가 있어서
        <br />
        Node.js와 MySQL을 통한 서버와 데이터 관리도 공부하고 있습니다.
        <br />
        빠르지만 조급하지 않고 꾸준히 성장하고 싶습니다.
        <br />
        오늘 하루도 행복하길 바랍니다.
        <br />
        읽어주셔서 감사합니다.
      </p>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  width: 70%;
  margin: 3.5rem auto;
  text-align: center;
  .imgDiv {
    margin-bottom: 1.5rem;
  }
  img {
    max-width: 100%;
    width: 600px;
    max-height: auto;
  }
  h1 {
    font-family: "paybooc-ExtraBold";
    font-size: 1.9rem;
    margin-bottom: 1.5rem;
  }
  p {
    margin-top: 1.5rem;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.8rem;
  }
`;
