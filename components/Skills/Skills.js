import style from './Skills.module.css';
import SkillsGroup from './SkillsGroup/SkillsGroup';

export default function Skills(props)
{
    const technicalSkillGroup = {
        Category: 'Profile Related Skills',
        Skills: [
            {SkillName: '.Net', PercentageLevel: '85'},
            {SkillName: 'React', PercentageLevel: '45'},
            {SkillName: 'Javascript', PercentageLevel: '40'},
            {SkillName: 'HTML', PercentageLevel: '65'},
            {SkillName: 'CSS', PercentageLevel: '50'},
            {SkillName: 'JQuery', PercentageLevel: '40'},
            {SkillName: 'Git', PercentageLevel: '80'},
            {SkillName: 'Entity Framework', PercentageLevel: '65'},
            {SkillName: 'SQL', PercentageLevel: '45'},
        ]
    };
    
    const otherTechnicalSkillGroup = {
        Category: 'Other Technical Skills',
        Skills: [
            {SkillName: 'WPF', PercentageLevel: '85'},
            {SkillName: 'Linux', PercentageLevel: '57'},
            {SkillName: 'C++', PercentageLevel: '55'},
            {SkillName: 'Control Engineering', PercentageLevel: '40'},
            {SkillName: 'Python', PercentageLevel: '35'},
            {SkillName: 'Embedeed Systems', PercentageLevel: '42'},
        ]
    };
    
    const personalSkillGroup = {
        Category: 'Soft Skills',
        Skills: [
            {SkillName: 'Mentoring', PercentageLevel: '45'},
            {SkillName: 'Communication', PercentageLevel: '65'},
            {SkillName: 'Sales', PercentageLevel: '55'},
            {SkillName: 'Public Speaking', PercentageLevel: '60'},
        ]
    };
    
    return (
        <div className={style.container}>
            <h3>Skills</h3>
            <SkillsGroup SkillsGroup={technicalSkillGroup}></SkillsGroup>
            <SkillsGroup SkillsGroup={otherTechnicalSkillGroup}></SkillsGroup>
            <SkillsGroup SkillsGroup={personalSkillGroup}></SkillsGroup>
        </div>
        
    );
}