import Skill from './Skill/Skill';
import style from './SkillsGroupDetails.module.css';

export default function SkillsGroupDetails(props)
{
    return (
        <div className={style.container}>
            {props.Skills.map((skill) => (
                <Skill 
                key={Math.random()}
                PercentageLevel={skill.PercentageLevel} SkillName={skill.SkillName}
                />
            ))}
        </div>
    );
}