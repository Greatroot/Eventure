import React from 'react';
import styled from "styled-components";
// import {serializeInteger} from "../../.cache/page-ssr/routes/component---src-pages-using-ssr-js";

//TODO: Work on styling border and such.

const IncrementButton = ({setter, topEnd = false, bottomEnd = false, isClicked}) => {
    return (
        <IncrementButtonStyles topEnd={topEnd} bottomEnd={bottomEnd} isClicked={isClicked}>
            <button className="incrementButton" onClick={() => {
                setter(!isClicked)
            }}>

            </button>
        </IncrementButtonStyles>
    );
};

export default IncrementButton;



const IncrementButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  .incrementButton {
    transform: rotate(1);
    background-color: ${(props) => props.isClicked ? "#c4a4f6" : "#d3fdfe"};
    
    position: relative;
    //margin: 10px;
    outline: none;
    width: 140px;
    height: 25px;
    //background: #EEE5FC;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    transition: box-shadow 0.2s, background 0.2s;
    border-width: thin;
    border-top-left-radius: ${props => props.topEnd ? "10px" : "0px"};
    border-top-right-radius: ${props => props.topEnd ? "10px" : "0px"};
    border-bottom-left-radius: ${props => props.bottomEnd ? "10px" : "0px"};
    border-bottom-right-radius: ${props => props.bottomEnd ? "10px" : "0px"};
  }
  .incrementButton:hover{
   
    background: #d3fdd1;
    width: 150px;
    
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.35);
  }
  
  .incrementButton:active{
    //Button is clicked here
    background: #c4a4f6;
    
  }
`