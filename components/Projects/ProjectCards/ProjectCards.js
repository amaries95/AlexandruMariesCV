import ProjectCard from './ProjectCard/ProjectCard';
import style from './ProjectCards.module.css';

export default function ProjectCards(props)
{
    return (
        <div className={style.container}>
            {props.Projects.map((project) => (
                <ProjectCard 
                key={Math.random()}
                Title={project.Title}
                Summary={project.Summary}
                Technologies={project.Technologies}
                />
            ))}
        </div>
    );
}