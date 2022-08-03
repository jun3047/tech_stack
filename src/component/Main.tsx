import React, { useState } from 'react';
import styled from '@emotion/styled'
import Dialog from './Dialog';
import useFetch from '../hooks/useFetch';
import { useSelector } from 'react-redux';

const CodeBoxWrap = styled.main`
    width: 100vw;
    height: calc(100vh - 62px);
    display: flex;
`

const CodeBox = styled.div`
    flex: 1;
    border: 0.5px solid black;
    padding: 15px;
    flex-basis: 0;
    display: flex;
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`

const Code = styled.div`

`

const CodeBoxTitle = styled.h2`
    font-weight: 700;
    font-size: 34px;
    margin: 0;
    position: absolute;
    bottom: 15px;
    z-index: -1;
`

interface IText{
    name: string;
    js : string,
    css : string,
    html : string,
}


const Main: React.FunctionComponent = () => {

    const nowOption: string = useSelector((state: any) => state.nowOption);
    const texts : IText[] = useFetch("http://localhost:3000/texts");
    var text: IText = texts.filter(text => text.name === nowOption)[0];

    if(text === undefined){
        text = {
            "name": "none-none-none-none",
            "js" : "js",
            "css": "css",
            "html": "html"
        }
    }

    return (
        <>
            <Dialog/>
            <CodeBoxWrap>
                <CodeBox>
                    <Code>
                        {text.js}
                    </Code>
                    <CodeBoxTitle>
                        JavaScript
                    </CodeBoxTitle>
                </CodeBox>
                <CodeBox>
                    <Code>
                        {text.html}
                    </Code>
                    <CodeBoxTitle>
                        HTML
                    </CodeBoxTitle>
                </CodeBox>
                <CodeBox>
                    <Code>
                        {text.css}
                    </Code>
                    <CodeBoxTitle>
                        CSS
                    </CodeBoxTitle>
                </CodeBox>
            </CodeBoxWrap>
        </>
    )
}

export default Main;