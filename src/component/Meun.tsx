import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux';


interface IMeun{
    title: string;
    meuns: string[];
}

const Meun = (props: IMeun) => {
    
    console.log("Meun!");
    

    const {meuns, title} = props
    const dispatch = useDispatch()

    const [Option, setOption] = useState({
        'JavaScript Framework': "none",
        'JaveScript Superset': "none",
        'JaveScript Library': "none",
        'CSS in Js': "none",
    });

    const [meunActive, setMeunActive] = useState(()=>{
        var map = new Map()
        for (const meun in meuns) map.set(meun, false)
        return map
    })
    
    const objToStr = (a: object) => {
        console.log("objToStr");
        const options = Object.values(a)
        return `${options[0]}-${options[1]}-${options[2]}-${options[3]}`;
    }

    const onClick = (option: string) => {
        console.log("onClickStart");
        
        var map = new Map()

        meuns.map((meun: string) =>
            {
                if(option === meun) {
                    if(meunActive.get(meun)) {
                        option = 'none'
                        map.set(meun, false)
                    }else
                    {
                        map.set(meun, true)
                    }
                }else{
                    map.set(meun, false)
                }
            }
        )

        dispatch({type: 'UPDATE_OPTION', text: objToStr(Option)})
        setOption({ ...Option, [title] : option})
        setMeunActive(map)
    }

    //useState의 업데이트는 한 컴포넌트가 끝난 후에 작동한다 지연이 있다는 뜻

    return (
        <>
            <MeunWrap>
                <MeunTitle>{props.title}</MeunTitle>
                <>
                    {
                        useEffect(()=> {
                            meuns.map((meun) =>
                        <MeunBtn onClick={() => { onClick(meun) }} isOn={meunActive.get(meun)}>{meun}</MeunBtn>)
                        }, [Option])
                    }
                </>
            </MeunWrap>
        </>
    )
}

type MeunBtnProps = {
    isOn?: boolean
}

const MeunBtn = styled.button`
    background: ${(props: MeunBtnProps) => props.isOn? '#3FDCE5' : 'white'};
    border: 1px solid #000000; 
    border-radius: 14px;
    padding: 7px 8px;
    margin-right: 15px;

    :hover{
        background-color: ${(props: MeunBtnProps) => props.isOn? '#3FDCE5' : '#EEEEEE'};
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