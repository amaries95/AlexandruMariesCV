import 'bootstrap/dist/css/bootstrap.css';
import style from './MobileFooter.module.css';
import {FaLinkedinIn, FaGithub, FaFilePdf} from 'react-icons/fa';

export default function MobileFooter(props) {
  return (
    <div className={style['container']}>
      <div className={style.icon}>
        <a href="https://www.linkedin.com/in/alexandrumaries"
          target="_blank"
          rel="noreferrer">
             <FaLinkedinIn color={'white'}
                size={"17px"}
                title="Linkedin"/></a>
      </div>
      <div className={style.icon}>
      <a
              href="https://github.com/amaries95"
              target="_blank"
              rel="noreferrer">
              <FaGithub
                color={'white'}
                size={"17px"}
                title='Github'
              ></FaGithub>
            </a>
      </div>
      <div className={style.icon}>
        <a href="https://www.icloud.com/iclouddrive/067peGQrqYYPxdPchnT7S6drA#CV"
          target="_blank"
          rel="noreferrer">
              <FaFilePdf
                color={'white'}
                size={"17px"}
                title='Download CV'>
                </FaFilePdf>
        </a>
      </div>
    </div>
  );
}
