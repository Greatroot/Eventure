import React from 'react';
import styled from "styled-components";

const SearchBar = ({type, placeholder, name, value, onChange}) => {
    return (
        <SearchBarStyles>
            <input type = { type }
                   placeholder = { placeholder }
                   name = { name }
                   value = { value }
                   onChange = { onChange }
                   className="search-bar__input"
            />
        </SearchBarStyles>
    );
};

export default SearchBar;

const SearchBarStyles = styled.form`
    
    margin: auto;
    padding: .5em;
    font-size: 1em;
    display: flex;
    //border: .2em solid #FFA07A;
    border-radius: 20px;
    background-color:#EEE5FC;
    width: 80%;
    height: 4rem;
    align-items: center;

  .search-bar__input {
    margin: auto;
    border: none;
    background-color: transparent;
    padding: 0.5rem;
    font-size: 2rem;
    font-family: "Montserrat Bold";
    text-align: center;
  }

  /* TODO: Figure out what we want to happen when search bar is clicked. */
  .search-bar__input:focus {
    border-radius: 1px;
    outline: none;
  }
`