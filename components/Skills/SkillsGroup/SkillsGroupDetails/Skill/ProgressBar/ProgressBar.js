import { useEffect } from 'react';
import { useState } from 'react';
import style from './ProgressBar.module.css';

export default function ProgressBar(props)
{
    const [fillValue, setFillValue] = useState(0);

    useEffect(() => {
        setFillValue(props.PercentageLevel);
    });

    const dynamicStyles = { 
        fill: { 
            width: `${fillValue}%`
        }, 
    } 

    return (
        <div className={style['progress-bar']}>
            <div className={style['fill-progress-bar']} style={dynamicStyles.fill}>
                <span><br/></span>
            </div>
        </div>
    );
}