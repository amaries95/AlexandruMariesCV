import { Link } from 'react-router-dom';
import style from './Option.module.css';

export default function Option(props)
{
    return (
    <div className={style.option}>
       <li>
        <Link to={`/${props.text.toLowerCase() === 'home' ? '' : props.text.toLowerCase()}`}>
            <span>{props.text}</span>
        </Link>
        </li>
    </div>);
}