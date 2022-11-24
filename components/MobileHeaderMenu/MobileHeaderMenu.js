import MobileFooter from './MobileFooter/MobileFooter';
import style from './MobileHeaderMenu.module.css';
import MobileOptions from './MobileOptions/MobileOptions';

export default function MobileHeaderMenu()
{
    return <div className={style.container}>
        <MobileOptions></MobileOptions>
        <MobileFooter></MobileFooter>
    </div>;
}