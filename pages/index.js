import AboutMe from '../components/AboutMe/AboutMe';
import style from '../styles/index.module.css';
import Wallpaper from '../components/Wallpaper/Wallpaper';

export default function Home(props)
{
    const basicInfo = [
        {Type: "date of birth", Info: "August 2"},
        {Type: "email", Info: "alexandru.maries@icloud.com"},
        {Type: "address", Info: "Cluj-Napoca, Romania"},
        {Type: "languages", Info: "Romanian, English"},
    ];

    return (
        <div className={style.container}>
            <Wallpaper></Wallpaper>
            <AboutMe Infos={basicInfo}></AboutMe>
        </div>
    );
}