import style from './AddReference.module.css';
import { useState } from 'react';
import {MdAddCircle as AddCircle} from 'react-icons/md';
import {MdAddCircleOutline as AddCircleEmpty} from 'react-icons/md';
import { referenceActions } from '../../Store/reference';
import { useDispatch } from 'react-redux';

export default function AddReference(props)
{
    const [onMouseHovered, setOnMouseHovered] = useState(false);
    const referenceDispatcher = useDispatch();

    function onAddReferenceButtonClicked(event)
    {
        referenceDispatcher(referenceActions.setReferenceFormToVissible());
    }

    function onHoverHandler(event){
        setOnMouseHovered(true);
    }

    function onMouseLeave(event){
        setOnMouseHovered(false);
    }

    return(
        <div className={style.container}>
            <button className={style.icon} onClick={onAddReferenceButtonClicked} onMouseEnter={onHoverHandler} onMouseLeave={onMouseLeave}>
                {onMouseHovered && <AddCircle color={'darkcyan'} size={'60px'}></AddCircle>}
                {!onMouseHovered && <AddCircleEmpty size={'60px'} color={'darkcyan'}></AddCircleEmpty>}
            </button>
        </div>
    );    
}