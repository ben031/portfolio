import React from "react";
import styled from "styled-components";

const WorkTemplate = ({ pic, workname, site, framework }) => {
  return (
    <WorkTemplateDiv>
      <WorkTemplateImgDiv>
        <a href={site}>
          <img src={pic} alt="work" target="_blank" rel="noreferrer" />
        </a>
      </WorkTemplateImgDiv>
      <p className="workname">
        {workname} with{" "}
        <span>
          <img src={framework} alt="framework" width="18px" />
        </span>
      </p>
    </WorkTemplateDiv>
  );
};

export default WorkTemplate;
const WorkTemplateDiv = styled.div`
  .workname {
    margin: 0.8rem 0;
  }
`;

const WorkTemplateImgDiv = styled.div`
  width: 300px;
  overflow: hidden;
  border: 1px solid black;
  img {
    object-fit: cover;
    width: 100%;
    /* max-height: 100%; */
    transition: all 0.85s ease;
  }

  img:hover {
    transform: scale(1.1);
  }
`;
