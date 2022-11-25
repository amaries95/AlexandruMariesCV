import AboutMe from "../components/AboutMe/AboutMe";
import style from "../styles/index.module.css";
import Wallpaper from "../components/Wallpaper/Wallpaper";
import Head from "next/head";

export default function Home(props) {
  const basicInfo = [
    { Type: "date of birth", Info: "August 2" },
    { Type: "email", Info: "alexandru.maries@icloud.com" },
    { Type: "address", Info: "Cluj-Napoca, Romania" },
    { Type: "languages", Info: "Romanian, English" },
  ];

  return (
    <>
      <Head>
        <title>Alexandru Maries</title>
        <meta name="title" content="Alexandru Maries"/>
        <meta name="description" content="Alexandru Maries personal portofolio"/>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={style.container}>
        <Wallpaper></Wallpaper>
        <AboutMe Infos={basicInfo}></AboutMe>
      </div>
    </>
  );
}
