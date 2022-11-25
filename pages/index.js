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
        <meta name="robots" content="noarchive" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:description" content="Alexandru Maries personal portofolio"/>
        <meta name="twitter:description" content="Alexandru Maries personal portofolio" />
        <meta property="og:title" content="Alexandru Maries - Full Stack Web Developer Portofolio" />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Alexandru" />
        <meta property="profile:last_name" content="Maries" />

        <meta charset="UTF-8"></meta>
        <meta name="keywords" content="Alexandru Maries, personal portofolio, developer, full-stack, .net"></meta>
        <meta name="url" content="https://polite-moss-0cef4dc03.2.azurestaticapps.net/" />
      </Head>
      <div className={style.container}>
        <Wallpaper></Wallpaper>
        <AboutMe Infos={basicInfo}></AboutMe>
      </div>
    </>
  );
}
