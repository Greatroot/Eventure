import React, { useState, useEffect} from 'react';
import styled from "styled-components";
import IncrementButton from "./incrementButton";


const IncrementButtons = ({day, isClicked, setters}) => {
        const [A, setA] = useState(false);
        const [B, setB] = useState(false);
        const [C, setC] = useState(false);
        const [D, setD] = useState(false);
        const [E, setE] = useState(false);
        const [F, setF] = useState(false);
        const [G, setG] = useState(false);
        const [H, setH] = useState(false);
        const [I, setI] = useState(false);
        const [J, setJ] = useState(false);
        const [K, setK] = useState(false);
        const [L, setL] = useState(false);
        const [M, setM] = useState(false);
        const [N, setN] = useState(false);
        const [O, setO] = useState(false);
        const [P, setP] = useState(false);
        const [Q, setQ] = useState(false);
        const [R, setR] = useState(false);
        const [S, setS] = useState(false);
        const [T, setT] = useState(false);
        const [U, setU] = useState(false);
        const [V, setV] = useState(false);
        const [W, setW] = useState(false);
        const [X, setX] = useState(false);
        const [Y, setY] = useState(false);
        const [Z, setZ] = useState(false);
        const [ZA, setZA] = useState(false);
        const [ZB, setZB] = useState(false);


        // Acts like componentDidMount TODO: Remove if not used
        // useEffect(() => {
        //
        // });

        // componentDidUnmount
        // useEffect(() => {
        //         Axios.post('https://internship-review-backend.herokuapp.com/update', { //TODO: change
        //                 //Axios.post('http://localhost:3001/create', {
        //                 A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, ZA, ZB
        //         }).then((() => {
        //                 console.log("success");
        //                 setReviewList([
        //                         ...reviewList, {
        //                                 company: company,
        //                                 position: position,
        //                                 rating: rating,
        //                                 start_month: startMonth,
        //                                 start_year: startYear,
        //                                 end_month: endMonth,
        //                                 end_year: endYear,
        //                                 comments: comments,
        //                         },
        //                 ]);
        //         }))
        //
        //         setShow(true);
        //         e.preventDefault(); // Should stop the form from refreshing the page.
        // }, []);

    //TODO: Make a toggle func in parent component to simplify.
    return (
        <IncrementButtonsStyles>
            <p>{day}</p>
            <IncrementButton setter={setA} isClicked={A} topEnd={true}/>
            <IncrementButton setter={setB} isClicked={B}/>
            <IncrementButton setter={setC} isClicked={C}/>
            <IncrementButton setter={setD} isClicked={D}/>
            <IncrementButton setter={setE} isClicked={E}/>
            <IncrementButton setter={setF} isClicked={F}/>
            <IncrementButton setter={setG} isClicked={G}/>
            <IncrementButton setter={setH} isClicked={H}/>
            <IncrementButton setter={setI} isClicked={I}/>
            <IncrementButton setter={setJ} isClicked={J}/>
            <IncrementButton setter={setK} isClicked={K}/>
            <IncrementButton setter={setL} isClicked={L}/>
            <IncrementButton setter={setM} isClicked={M}/>
            <IncrementButton setter={setN} isClicked={N}/>
            <IncrementButton setter={setO} isClicked={O}/>
            <IncrementButton setter={setP} isClicked={P}/>
            <IncrementButton setter={setQ} isClicked={Q}/>
            <IncrementButton setter={setR} isClicked={R}/>
            <IncrementButton setter={setS} isClicked={S}/>
            <IncrementButton setter={setT} isClicked={T}/>
            <IncrementButton setter={setU} isClicked={U}/>
            <IncrementButton setter={setV} isClicked={V}/>
            <IncrementButton setter={setW} isClicked={W}/>
            <IncrementButton setter={setX} isClicked={X}/>
            <IncrementButton setter={setY} isClicked={Y}/>
            <IncrementButton setter={setZ} isClicked={Z}/>
                <IncrementButton setter={setZA} isClicked={ZA} bottomEnd={true}/>
                <IncrementButton setter={setZB} isClicked={ZB} bottomEnd={true}/>
        </IncrementButtonsStyles>
    );
};

export default IncrementButtons;

const IncrementButtonsStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0; 
        p {
                align-self: center;
                bottom: 2px;
                font-family: Roboto; //TODO: FIx this
                
        }
`