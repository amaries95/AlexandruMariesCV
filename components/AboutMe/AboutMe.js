import style from './AboutMe.module.css';

export default function AboutMe(props)
{
    return (
        <div className={style.container}>
            <div className={style['describe-me']}>
                <div className={style['about-me']}>
                    <h3>About Me (Alexandru Maries)</h3>
                </div>
                <div className={style['about-me-container']}>
                    <p>&emsp;&emsp;I'm a passionate software developer with experience on web and desktop development, who is always looking for new challenges in order to continue to learn and, of course, to consolidate the current knowledge.
                        <br></br>
                        <br></br>
                        Some facts about my hobbies ... I love to travel, especially as a tourist, but business trips are also fine for me. In my free time, I usually like to play tennis, hangout with my friends, or just enjoy a good wine, which I'm also passionate about.
                    </p>
                </div>
            </div>
            <div className={style['describe-me']}>
                <div className={style['about-me']}>
                    <h3>Basic Information</h3>
                </div>
                <div className={style['info-container']}>
                    {props.Infos.map((info) => (
                        <div className={style['basic-info']} key={Math.random()}>
                            <div className={style['type']}>
                                <p>{`${info.Type.toUpperCase()}:`}</p>
                            </div>
                            <div className={style['details']}>
                                <p>{info.Info}</p>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    );
}