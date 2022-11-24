import { ListGroup } from 'react-bootstrap';
import MobileOption from './MobileOption/MobileOption';
import style from './MobileOptions.module.css';

export default function MobileOptions()
{
    const HeaderOptions = ["HOME", "EXPERIENCE", "PROJECTS", "SKILLS", "REFERENCES"];

    return(
        <ListGroup className={style.options}>
            {HeaderOptions.map(option => 
                {
                    return <MobileOption
                    key={Math.random()}
                    text={option}></MobileOption>;
                })}
        </ListGroup>
    );
}