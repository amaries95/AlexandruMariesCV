import style from './Experience.module.css';
import ExperienceElement from './ExperienceElement/ExperienceElement';

export default function Experience(props)
{
    const experience = [
        {
            Company: 'Plain Concepts',
            StartPeriod: new Date(2022, 2),
            EndPeriod: new Date(), // present
            Position: 'Full Stack Web Developer',
            Responsabilities: [
                'developing new features on frontend and backend side',
                'fixing UI and functionality bugs',
                'interviewing new candidates',
                'planning and estimating new features',
                'unit and integration testing',
                'customer service',
                'holding trainings about different topics'
            ]
        },
        {
            Company: 'Robert Bosch',
            StartPeriod: new Date(2021, 11),
            EndPeriod: new Date(2022, 2),
            Position: '.Net Web Developer',
            Responsabilities: [
                'unit testing',
                'refactoring'
            ]
        },
        {
            Company: 'Robert Bosch',
            StartPeriod: new Date(2020, 0),
            EndPeriod: new Date(2021, 11),
            Position: '.Net Desktop Developer',
            Responsabilities: [
                'developed backend and UI features',
                'code reviews',
                'manual UI, unit and integration testing',
                'bug fixing',
                'manual release',
                'mentoring interns'
            ]
        },
        {
            Company: 'Robert Bosch',
            StartPeriod: new Date(2018, 7),
            EndPeriod: new Date(2020, 0),
            Position: 'Software Embedded Engineer',
            Responsabilities: [
                'agile methodology',
                'developed features based on requirements',
                'fixing QAC warning in C++'
            ]
        },
        {
            Company: 'Robert Bosch',
            Period: 'Jul 2017 - Aug 2018',
            StartPeriod: new Date(2017, 6),
            EndPeriod: new Date(2018, 7),
            Position: 'Working Student',
            Responsabilities: [
                'developed bachelor\'s degree'
            ]
        },
    ];

    return (
        <div className={style.container}>
            <h3>Work Experience</h3>
            {experience.map((exp) => (
                <ExperienceElement 
                key={Math.random()}
                Company={exp.Company}
                StartPeriod={exp.StartPeriod}
                EndPeriod={exp.EndPeriod}
                Position={exp.Position}
                Responsabilities={exp.Responsabilities}/>
            ))}
        </div>
    );
}