import { Link } from 'react-router-dom';
import style from './MobileOption.module.css';

export default function MobileOption(props)
{
    const MobileMappers = {
        "HOME":"HOME",
        "EXPERIENCE":"EXP",
        "PROJECTS":"PROJ",
        "SKILLS":"SKILLS",
        "REFERENCES":"REF"}

    return (
        <div className={style.option}>
            <li>
                <Link to={`/${props.text.toLowerCase() === 'home' ? '' : props.text.toLowerCase()}`}>
                    <span>{MobileMappers[props.text]}</span>
                </Link>
            </li>
        </div>);
}