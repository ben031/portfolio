import React from "react";
import styled from "styled-components";
import work from "../data/work";
import WorkTemplate from "./WorkTemplate";

const Work = () => {
  return (
    <WorkSection>
      <WorkDiv>
        {work.map((item) => (
          <WorkTemplate
            key={item.id}
            workname={item.workname}
            pic={item.picture}
            site={item.href}
            framework={item.framework}
            github={item.github}
            color={item.color}
          />
        ))}
      </WorkDiv>
    </WorkSection>
  );
};

export default Work;

const WorkSection = styled.section`
  width: 70%;
  height: calc(100vh - 5.6rem);
  margin: 5rem auto 0;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: baseline;
  font-size: 1.4rem;
  font-weight: 400;
`;

const WorkDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 20px;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 300px);
  }
`;
