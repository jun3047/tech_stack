import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux';


interface IMeun{
    title: string;
    meun: string[];
}

const Meun = (props: IMeun) => {

    return (
        <>
            <MeunWrap>
                <MeunTitle>JavaScript Framework</MeunTitle>
                <MeunBtn>React</MeunBtn>
                <MeunBtn>Angular</MeunBtn>
                <MeunBtn>Vue.js</MeunBtn>
            </MeunWrap>
            <MeunWrap>
                <MeunTitle>JavaScript Superset</MeunTitle>
                <MeunBtn>TypeScript</MeunBtn>
                <MeunBtn>Flow</MeunBtn>
            </MeunWrap>
            <MeunWrap>
                <MeunTitle>JavaScript Library</MeunTitle>
                <MeunBtn>jQuery</MeunBtn>
                <MeunBtn>core-js</MeunBtn>
            </MeunWrap>
            <MeunWrap>
                <MeunTitle>CSS in JS</MeunTitle>
                <MeunBtn>styled-components</MeunBtn>
                <MeunBtn>Emotion</MeunBtn>
            </MeunWrap>
        </>
    )
}

type MeunBtnProps = {
    isOn?: boolean
}

const MeunBtn = styled.button`
background: ${(props: MeunBtnProps) => props.isOn ? '#3FDCE5' : 'white'};
border: 1px solid #000000; 
border-radius: 14px;
padding: 7px 8px;
margin-right: 15px;

:hover{
    background-color: ${(props: MeunBtnProps) => props.isOn ? '#3FDCE5' : '#EEEEEE'};
}
`

const MeunWrap = styled.div`
    width: 100%;
    height: 63px;
    margin-bottom: 37px;
`

const MeunTitle = styled.h3`
    margin: 0;
    padding-bottom: 10px;
    font-size: 14px;
`

export default Meun