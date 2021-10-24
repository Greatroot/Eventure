import React from 'react';
import styled from "styled-components";

const DayButton = ({isClicked, day}) => {
    return (
        <DayButtonStyles isClicked={isClicked}>
            <button className="day_button">
                <p>{day}</p>
            </button>
        </DayButtonStyles>
    );
};

export default DayButton;

const DayButtonStyles = styled.div`
  
  .day_button {
    display: flex;
    background-color: ${(props) => props.isClicked ? "#EEE5FC" : "#d3fdfe"};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    border: none;
    //transition: box-shadow 0.2s, background 0.2s;
    transition: .6s ease-in-out background-color;


    width: 125px;
    height: 125px;
    
    p {
      font-family: 'Montserrat SemiBold';
      margin-top: 0.8rem;
      margin-right: 1.5rem;
      
    }
  }
  
  .day_button:hover{

    background: #d3fdd1;
    width: 150px;

    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.35);
  }

  .day_button:active{
    //Button is clicked here
    background: #c4a4f6;

  }
    
  }
`