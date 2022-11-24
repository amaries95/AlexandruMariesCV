import { useCallback, useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import AboutMe from './AboutMe/AboutMe';
import style from './Home.module.css';
import Wallpaper from './Wallpaper/Wallpaper';

export default function Home(props)
{
    const baseUrl = useSelector(state => state.routes.baseUrl);
    const incrementViews = useSelector(state => state.routes.incrementViews);

    const basicInfo = [
        {Type: "date of birth", Info: "August 2"},
        {Type: "email", Info: "alexandru.maries@icloud.com"},
        {Type: "address", Info: "Cluj-Napoca, Romania"},
        {Type: "languages", Info: "Romanian, English"},
    ];

    const incrementViewsHandler = useCallback(async () => {
        const response = await fetch(baseUrl + incrementViews, {
            method: "PUT",
        });
        debugger;
    });

    useEffect(() => {
        incrementViewsHandler();
    })

    return (
        <div className={style.container}>
            <Wallpaper></Wallpaper>
            <AboutMe Infos={basicInfo}></AboutMe>
        </div>
    );
}