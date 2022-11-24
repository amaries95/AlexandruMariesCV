import style from './ProjectCard.module.css';

export default function ProjectCard(props)
{
    return (
        <div className={style.container}>
            <p className={style['project-title']}>{props.Title}</p>
            <p className={style['project-description']}>{props.Summary}</p>
            <div className={style['project-technologies']}>
                <p>Technologies</p>
                <ul>
                    {props.Technologies.map((technology) => (
                        <li key={Math.random()}>
                            {technology}
                        </li>
                    ))}
                </ul>
            </div>
            
            
        </div>
    );
}