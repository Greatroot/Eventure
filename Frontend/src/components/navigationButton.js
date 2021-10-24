import React from 'react';
import styled from "styled-components";
import {Link} from "gatsby";

const NavigationButton = ({isNext, link}) => {
    return (
        <NavigationButtonStyles>
            <Link to={link}>
                    {isNext ? "Next ->" : "<- Prev"}
            </Link>
        </NavigationButtonStyles>
    );
};

export default NavigationButton;

const NavigationButtonStyles = styled.div`
  background-color: #BEEFFF;
  font-family: "Montserrat SemiBold";
  display: flex;
  
  padding: .5em;
  font-size: 1em;
  text-decoration: none;
  display: flex;
  border-radius: 20px;
  width: 10rem;
  height: 2rem;
  align-items: center;
  justify-content: center;

`