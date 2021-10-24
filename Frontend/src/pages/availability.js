import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Title from "../components/title";
import DayButton from "../components/dayButton";
import {useState} from "react";
import styled from "styled-components";
import NavigationButton from "../components/navigationButton";

const Availability = () => {
    const sunday = useState(false);
    const monday = useState(false);
    const tuesday = useState(false);
    const wednesday = useState(false);
    const thursday = useState(false);
    const friday = useState(false);
    const saturday = useState(false);

    return (
        <Layout>
            <Seo title="Availability" />
            <AvailabilityStyles>
                <Title title="Availability" fontSize={85} />
                <div className="day_buttons">
                    <DayButton isClicked={sunday} day="S"/>
                    <DayButton isClicked={monday} day="M"/>
                    <DayButton isClicked={tuesday} day="T"/>
                    <DayButton isClicked={wednesday} day="W"/>
                    <DayButton isClicked={thursday} day="T"/>
                    <DayButton isClicked={friday} day="F"/>
                    <DayButton isClicked={saturday} day="S"/>
                </div>
                <div className="navigationButtons">
                    <NavigationButton isNext={false} link="/availability" />
                    <NavigationButton isNext={true} link="/" />
                </div>
            </AvailabilityStyles>
        </Layout>
    );
}

export default Availability

const AvailabilityStyles = styled.div`
  
    .day_buttons {
      display: flex;
      justify-content: center;
      align-content: center;
      
      margin-top: 5rem;
      gap: 1rem;
    }
  
  .navigationButtons {
    display: flex;
    margin-top: 4rem;
    gap: 35rem;
  }
`