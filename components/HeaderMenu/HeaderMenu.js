import Footer from './Footer/Footer';
import style from './HeaderMenu.module.css';
import Options from './Options/Options';
import Person from './Person/Person';

export default function HeaderMenu(props)
{
    return <div className={style.header}>
        <Person />
        <Options />
        <Footer />
    </div>;
}