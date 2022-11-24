import { ListGroup } from 'react-bootstrap';
import Option from './Option/Option';
import style from './Options.module.css';

export default function Options(props)
{
    const HeaderOptions = ["HOME", "EXPERIENCE", "PROJECTS", "SKILLS", "REFERENCES"];

    return(
        <div className={style.options}>
            <ListGroup>
            {HeaderOptions.map(option => 
                {
                    return <Option
                    key={Math.random()}
                    text={option}></Option>;
                })}
            </ListGroup>
        </div>
    );
}