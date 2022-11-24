import ProgressBar from './ProgressBar/ProgressBar';
import style from './Skill.module.css';

export default function Skill(props)
{
    return (
        <div className={style.container}>
                <p className={style['skill-name']}>{props.SkillName}</p>
                <p className={style.percentage}>{`${props.PercentageLevel}%`}</p>

               <ProgressBar PercentageLevel={props.PercentageLevel}/>
                
        </div>
        
    );
}