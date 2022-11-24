import style from './ExperienceCard.module.css';

export default function ExperienceCard(props)
{
    return (
            <div className={style.container}>
                <div className={style['details']}>
                    <p className={style['company-name']}>{props.Company}</p>
                    <p className={style['period-of-time']}>-</p>
                    <p className={style['period-of-time']}>{props.Period}</p>
                    <p className={style.role}>{props.Position}</p>
                    <div className={style.description}>
                        <ul>
                            {props.Responsabilities.map((resp) => (
                                <li key={Math.random()}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
    );
}