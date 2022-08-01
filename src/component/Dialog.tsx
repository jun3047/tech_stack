import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStyle } from '../isShowDialogSlice';
import { RootState } from '../store';
import './Dialog.css';
import Meun from './Meun';

const Dialog: React.FunctionComponent = () => {

    const [diffX, setDiffX] = useState<number>();
    const [diffY, setDiffY] = useState<number>();
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [loaclStyle, setLoaclStyle] = useState<any>({});

    const dispatch = useDispatch();
    const style = useSelector<RootState, any>(state => {
        return state.style;
    });
    console.log("first: " + style);


    const dragStart = (e: React.MouseEvent<HTMLButtonElement> | any) => {
        setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
        setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
        setIsDragging(true);
        console.log("dargStart");
    }

    const dragging = (e: React.MouseEvent<HTMLButtonElement> | any) => {
        if (isDragging && diffX != undefined && diffY != undefined) {
            const left = e.screenX - diffX;
            const top = e.screenY - diffY;

            setLoaclStyle({
                left: left,
                top: top
            });
            console.log("second: " + style);
            console.log("dargging");
        }
    }

    const dragEnd = (e: React.MouseEvent<HTMLButtonElement> | any) => {
        setIsDragging(false);
        console.log("dargEnd");
    }



    return (
        <div className="Dialog" style={loaclStyle} onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragEnd}>
            <div className='DialogTitle'>Tech Stack</div>
            <div className='Contents'>
                <Meun />
            </div>
        </div>
    )
}

export default Dialog;


