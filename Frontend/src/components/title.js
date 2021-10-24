import React from 'react';
import styled from "styled-components";

const Title = ({title, fontSize= 85}) => {
    return (
        <TitleStyles fontSize={fontSize}>
            <h1 className="title">
                {title}
            </h1>
        </TitleStyles>
    );
};

export default Title;

const TitleStyles = styled.div`
  
    background: rgba(255, 193, 193, 0.68);
    border: 1px solid #FF9999;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 4rem;

    h1 {
      justify-self: center;
      align-self: center;
      margin: 0;
      padding: 3rem;

      text-align: center;
      color: #ad8383;
      font-size: ${props => props.fontSize}px;
    }
`