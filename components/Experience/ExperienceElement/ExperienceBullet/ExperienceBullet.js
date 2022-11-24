import style from './ExperienceBullet.module.css';
import ExperienceSplitter from './ExperienceSplitter/ExperienceSplitter';

export default function ExperienceBullet()
{
    return (
        <div className={style.bullet}>
            <ExperienceSplitter></ExperienceSplitter>
        </div>
    );
}