import style from './SkillsGroup.module.css';
import SkillsGroupDetails from './SkillsGroupDetails/SkillsGroupDetails';

export default function SkillsGroup(props)
{
    return (
        <div className={style.container}>
            <h3>{props.SkillsGroup.Category}</h3>
            <SkillsGroupDetails Skills={props.SkillsGroup.Skills}></SkillsGroupDetails>
        </div>
        
    );
}