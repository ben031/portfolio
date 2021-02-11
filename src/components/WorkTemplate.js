import React from "react";
import styled from "styled-components";

const WorkTemplate = ({ pic, workname, site, framework, github, color }) => {
  return (
    <WorkTemplateDiv color={color}>
      <WorkTemplateImgDiv>
        <a href={site}>
          <img src={pic} alt="work" target="_blank" rel="noreferrer" />
        </a>
      </WorkTemplateImgDiv>
      <p className="workname">
        {workname} with{" "}
        <span className="frameworkImg">
          <img src={framework} alt="framework" width="19px" />
        </span>
        <br />
        <a href={github} target="_blank" rel="noreferrer">
          <button className="explain">코드설명</button>
        </a>
      </p>
    </WorkTemplateDiv>
  );
};

export default WorkTemplate;

const WorkTemplateDiv = styled.div`
  .workname {
    margin: 0.8rem 0;
  }
  .frameworkImg {
    display: inline-block;
    background-color: ${(props) =>
      props.color === "react" ? "black" : "#f7df1c"};
    padding: 0 0.2rem;
    height: 1.5rem;
    img {
      padding-top: 2px;
    }
  }
  .explain {
    padding: 0.2rem 0.6rem;
    border: none;
    background: none;
    border: 1px black solid;
    margin-top: 0.4rem;
    cursor: pointer;
    font-size: 1rem;
  }

  .explain:hover {
    background-color: black;
    color: ${(props) => (props.color === "react" ? "#61dcfc" : "#f7df1c")};
  }
`;

const WorkTemplateImgDiv = styled.div`
  width: 300px;
  overflow: hidden;
  border: 1px solid black;
  img {
    width: 100%;
    /* height: 110%; */
    transition: all 0.85s ease;
  }

  img:hover {
    transform: scale(1.1);
  }
`;
