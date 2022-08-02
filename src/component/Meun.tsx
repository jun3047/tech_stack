import React, { useState } from 'react'
import styled from '@emotion/styled'
import { updateFor } from 'typescript';

const Meun: React.FunctionComponent = () => {

    const [reactIsOn, setReactIsOn] = useState(false);
    const [angularIsOn, setAngularIsOn] = useState(false);
    const [vueIsOn, setVueIsOn] = useState(false);
    const [Option, setOption] = useState({
        JSFramework: "none",
        JSSuperset: "none",
        JSLibrary: "none",
        CSSinJS: "none",
    });

    const onClick = (option: string) => {

        if(option === 'react') {
            if(reactIsOn) {
                setReactIsOn(false);
                option = 'none';
            }else
            {
                setReactIsOn(true);
            }
        }else{
            setReactIsOn(false);
        }

        if(option === 'angular') {
            if(angularIsOn) {
                setAngularIsOn(false);
                option = 'none';
            }else
            {
                setAngularIsOn(true);
            }
        }else{
            setAngularIsOn(false);
        }

        if(option === 'vuejs') {
            if(vueIsOn) {
                setVueIsOn(false);
                option = 'none';
            }else
            {
                setVueIsOn(true);
            }
        }else{
            setVueIsOn(false);
        }

        setOption({ ...Option, JSFramework: option });
    }

    //useState의 업데이트는 한 컴포넌트가 끝난 후에 작동한다

    const onClick2 = () => {
        console.log(Option);
        console.log(reactIsOn);
        console.log(angularIsOn);
        console.log(vueIsOn);
    }

    return (
        <>
            <MeunWrap>
                <MeunTitle>JavaScript Framework</MeunTitle>
                <MeunBtn onClick={() => { onClick("react") }} isOn={reactIsOn}>React</MeunBtn>
                <MeunBtn onClick={() => { onClick("angular") }} isOn={angularIsOn}>Angular</MeunBtn>
                <MeunBtn onClick={() => { onClick('vuejs') }} isOn={vueIsOn}>Vue.js</MeunBtn>
            </MeunWrap>
            <MeunWrap>
                <MeunTitle>JavaScript Superset</MeunTitle>
                <MeunBtn onClick={onClick2}>TypeScript</MeunBtn>
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