import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components";
import {useState} from "react";
import SearchBar from "../components/searchBar";
import NavigationButton from "../components/navigationButton";

const NamePage = () => {
    const [eventName, setEventName] = useState("");

    const handleUserTyping = (event) => {
        setEventName(event.target.value);
    };

    return(
        <Layout>
            <Seo title="Event Name"/>
            <NamePageStyles>
                <div className="name_page__header">
                    <h1>What do you want to name this event?</h1>
                </div>
                <div className="search__bar">
                    <SearchBar type="text"
                               placeholder="Name Here"
                               name = "Name Here"
                               value = { eventName }
                               onChange = { handleUserTyping }
                               className="search-bar__input"
                    />
                </div>
                <div className="navigationButtons">
                    <NavigationButton isNext={false} link="/" />
                    <NavigationButton isNext={true} link="/availability" />
                </div>
            </NamePageStyles>
        </Layout>
    );
}

export default NamePage

const NamePageStyles = styled.div`
  
  .search__bar {
    margin-top: 3rem;
  }
  
  .name_page__header {

    background: rgba(255, 193, 193, 0.68);
    border: 1px solid #FF9999;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 3rem;
    
    h1 {
      justify-self: center;
      align-self: center;
      margin: 0;
      padding: 3rem;

      text-align: center;
      color: #ad8383;
      font-size: 85px;
    }
  }
  
  .navigationButtons {
    display: flex;
    margin-top: 3rem;
    gap: 35rem;
  }
`
