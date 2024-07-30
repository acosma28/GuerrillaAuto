import Head from "next/head";
import { Fragment, useEffect } from "react";
import {
  Guerrilla_tm_moving_animation,
  aTagClick,
  dataImage,
  wowJsAnimation,
} from "../utilits";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Preloader from "./Preloader";

const Layout = ({ children, headName, dark }) => {
  useEffect(() => {
    dataImage();
    wowJsAnimation();
    Guerrilla_tm_moving_animation();
    aTagClick();
  });
  
  return (
    <Fragment>
      <Head>
        <title>Guerrilla Automotive</title>
        
        <meta name="description" content="Guerrilla Car Detailing and Car Cleaning is a reknown service in the Metro Atlanta Area." />
        <meta name="keywords" content="Car, Cars, Detail, Detailing, Details, Clean, Paint, Cleaning, Painting, Custom, Worldwide, Atlanta" />
        <meta name="author" content="yoyobojo" />

        <meta property="og:description" content="Guerrilla Car Detailing and Car Cleaning is a reknown service in the Metro Atlanta Area." />
        <meta property="og:title" content="Mozilla Developer Network" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicons//favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicons//favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Preloader />
      <div className="Guerrilla_tm_all_wrap" data-magic-cursor="show">
        <MobileMenu />
        <Header dark={dark} />
        {children}
        <Footer />
        <Cursor />
      </div>
    </Fragment>
  );
};

export default Layout;
