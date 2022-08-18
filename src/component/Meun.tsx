import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux';


interface IMeun{
    title: string;
    meuns: string[];
}


const Meun = (props: IMeun) => {
    
    const {meuns, title} = props
    const dispatch = useDispatch()

    const [Option, setOption] = useState("none")    

    console.log(Option);

    const [meunActive, setMeunActive] = useState(()=>{
        let map = new Map()
        for (const meun in meuns) {
            map.set(meun, false)
        }
        return map
    })

    useEffect(()=>{
        dispatch({type: 'UPDATE_OPTION', option: Option, title: title})
    },[Option])
    
    const onClick = (option: string) => {
        console.log("click");

        let tempMeuns: Map<string, boolean> = new Map()

        meuns.map((meun: string) =>
            {
                if(option === meun) {
                    if(meunActive.get(meun)) {console.log(Option);
                        setOption("none")
                        tempMeuns.set(meun, false)
                    }else
                    {console.log(Option);
                        setOption(meun)
                        tempMeuns.set(meun, true)
                    }
                }else{console.log(Option);
                    setOption("none")
                    tempMeuns.set(title, false)
                }
            }
        )

        setMeunActive(tempMeuns)
    }

    //useState의 업데이트는 한 컴포넌트가 끝난 후에 작동한다 지연이 있다는 뜻

    return (
        <>
            <MeunWrap>
                <MeunTitle>{props.title}</MeunTitle>
                {meuns.map((meun, index) => 
                <>
                    <MeunBtn key={index} onClick={() => {onClick(meun)}} isOn={meunActive.get(meun)}>{meun}</MeunBtn>
                </>)}
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