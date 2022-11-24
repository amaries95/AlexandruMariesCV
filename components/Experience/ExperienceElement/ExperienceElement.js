import ExperienceBullet from './ExperienceBullet/ExperienceBullet';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import style from './ExperienceElement.module.css';

export default function ExperienceElement(props)
{
    const monthsOfTheYear = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    
    const startPeriod = props.StartPeriod;
    const endPeriod = props.EndPeriod;

    function CalculatePeriod(startPeriod, endPeriod){
        // start period < endPeriod ALWAYS
        const diffTime = Math.abs(endPeriod - startPeriod);
        const diffIndays = Math.ceil(diffTime/ (1000 * 60 * 60 * 24));
        const diffInMonths = Math.abs(diffIndays/365);
        const years = Math.trunc(diffInMonths);
        const months = Math.round((diffInMonths - years) * 12);

        return {years: years, months: months};
        
        
    };

    function FormatPeriod()
    {
        let period = CalculatePeriod(startPeriod, endPeriod);
        let periodDifference = null;
        const currentDate = new Date();

        if(period.years === 0)
        {
            periodDifference = `${period.months} months`;
        }
        else if(period.months === 0)
        {
            periodDifference = `${period.years} year`;
        }
        else {
            periodDifference = `${period.years} year ${period.months} months`;
        }

        if(endPeriod.getMonth() == currentDate.getMonth() && endPeriod.getFullYear() == currentDate.getFullYear())
        {
            return `${monthsOfTheYear[startPeriod.getMonth()]} ${startPeriod.getFullYear()} - Present ( ${periodDifference} )`;
        }

        return `${monthsOfTheYear[startPeriod.getMonth()]} ${startPeriod.getFullYear()} - ${monthsOfTheYear[endPeriod.getMonth()]} ${endPeriod.getFullYear()} ( ${periodDifference} )`;

    }

    return (
        <div className={style.container}>
            <ExperienceBullet></ExperienceBullet>
            <ExperienceCard 
                Company={props.Company}
                Period={FormatPeriod()}
                Position={props.Position}
                Responsabilities={props.Responsabilities}/>
        </div>
    );
}