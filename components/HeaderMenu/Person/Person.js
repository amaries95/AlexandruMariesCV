import style from './Person.module.css';
import img from './photo.JPG';

export default function Person(props) {
  return (
    <div className={style.person}>
      <img src={img}></img>
      <h3>Alex Mărieș</h3>
      <p>Software Developer</p>
    </div>
  );
}
