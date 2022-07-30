import React from 'react';
import styled from '@emotion/styled'

const CodeBoxWrap = styled.main`
    width: 100vw;
    height: calc(100vh - 52px);
    display: flex;
`

const CodeBox = styled.div`
    flex: 1;
    width: 100%;
    border: 0.5px solid black;
    padding: 15px;
`

const Code = styled.div`

`

const CodeBoxTitle = styled.h2`
    font-weight: 700;
    font-size: 34px;
    margin: 0;
    position: absolute;
    left: 30px;
    bottom: 19px;
`

const Main: React.FunctionComponent = () => {

    return (
        <CodeBoxWrap>
            <CodeBox>
                <Code>
                const CodeBoxTitle = styled.h2` <br />
    &nbsp; &nbsp; &nbsp; &nbsp; font-weight: 700; <br />
    &nbsp; &nbsp; &nbsp; &nbsp; font-size: 34px; <br />
    &nbsp; &nbsp; &nbsp; &nbsp; margin: 0; <br />
    &nbsp; &nbsp; &nbsp; &nbsp; position: absolute; <br />
    &nbsp; &nbsp; &nbsp; &nbsp; left: 30px; <br />
    &nbsp; &nbsp; &nbsp; &nbsp; bottom: 19px; <br />
`                </Code>
                <CodeBoxTitle>
                    JavaScript
                </CodeBoxTitle>
            </CodeBox>
            <CodeBox>
            </CodeBox>
            <CodeBox>
            </CodeBox>
        </CodeBoxWrap>
    )
}

export default Main;
