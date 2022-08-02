import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Dialog.css';
import Meun from './Meun';

const Dialog: React.FunctionComponent = () => {

    const [diffX, setDiffX] = useState<number>();
    const [diffY, setDiffY] = useState<number>();
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [loaclStyle, setLoaclStyle] = useState<React.CSSProperties>({left: 0, top: 0});

    const dragStart = (e: React.MouseEvent<HTMLButtonElement> | any) => {
        setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
        setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
        setIsDragging(true);
    }

    const dragging = (e: React.MouseEvent<HTMLButtonElement> | any) => {
        if (isDragging && diffX !== undefined && diffY !== undefined) {
            const left = e.screenX - diffX;
            const top = e.screenY - diffY;

            setLoaclStyle({
                left: left,
                top: top
            });
        }
    }

    const dragEnd = (e: React.MouseEvent<HTMLButtonElement> | any) => {
        setIsDragging(false);
    }

    const isShowDialog = useSelector((state: any) => state.isShowDialog);

    return (
        <div className="Dialog" style={isShowDialog? loaclStyle : {display: "none"}} onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragEnd}>
            <div className='DialogTitle'>Tech Stack</div>
            <div className='Contents'>
                <Meun />
            </div>
        </div>
    )
}

export default Dialog;


