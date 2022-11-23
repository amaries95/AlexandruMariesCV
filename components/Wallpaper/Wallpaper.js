import img from './../../public/wallpaper.jpg';
import style from './Wallpaper.module.css';

export default function Wallpaper(props)
{
    return (
        <div className={style.container}>
            <img className={style.wallpaper} src={img}></img>
        </div>
    );
}