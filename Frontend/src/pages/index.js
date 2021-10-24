import * as React from "react"
import { useState } from "react";
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import IncrementButtons from "../components/incrementButtons";
import styled from "styled-components";
import NavigationButton from "../components/navigationButton";

const IndexPage = () => {


    // const isClicked = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V,
    //     W, X, Y, Z, ZA];

    // const setters = [setA, setB, setC, setD, setE, setF, setG, setH, setI, setJ, setK, setL,
    //     setM, setN, setO, setP, setQ,  setR, setS, setT, setU, setV, setW, setX, setY,
    //     setZ, setZA];

    return(
        <Layout>
            <Seo title="Home"/>
            <WeekSchedule>
                <div className="days">
                    <IncrementButtons day="S"/>
                    <IncrementButtons day="M"/>
                    <IncrementButtons day="T"/>
                    <IncrementButtons day="W"/>
                    <IncrementButtons day="T"/>
                    <IncrementButtons day="F"/>
                    <IncrementButtons day="S" />
                </div>
                <div className="navigationButtons">
                    <NavigationButton isNext={true} link="/namePage"/>
                </div>
            </WeekSchedule>
        </Layout>
    );
}

export default IndexPage

const WeekSchedule = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
 align-content: center;
  .days {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  .navigationButtons {
    display: flex;
    margin-top: 4rem;
    gap: 35rem;
  }
`


