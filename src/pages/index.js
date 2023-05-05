import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Welcome from "./components/welcome";
import img from "../../public/YENSPLASH.png";
import Navbar from "./components/navbar";
import Gallery from "./components/gallery";
import Pronite from "./components/pronite";
import i6 from "../../public/i6.jpg";
import bg from "../../public/bgvideo.mp4";
import Events from "./components/events";
import Footer from "./components/footer";
import { useEffect, useRef } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  

  useEffect(() => {
    AOS.init({duration:500})
  
   
  }, [])
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }

    const parallax = document.getElementById("parallax");


  }, []);

  
  return (
    <>
      <Head>
        <title>Yenspalsh 2023</title>
        <meta name="description" content="yenslpash 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
        
        <div className={styles.homepage}>
          <div className={styles.homepageimg}>
            <video controls={false} autoPlay muted  ref={videoRef} loop={true} className={styles.homevideo}>
              <source src={bg} type="video/mp4" />
            </video>
          </div>
          <div  data-aos="fade-left">
          <Image
            className={styles.homeimg}
            width="100px"
            height="100px"
            src={img}
            alt="yensplash logo"
          />
          </div>
        

          <div  data-aos="fade-right"  className={styles.quate}>EMBRACE THE  <span className={styles.legacy}>LEGACY</span> </div>
        </div>
        <Welcome />
        <Gallery />
        <Events/>
        <Pronite />
       
      </main>
    </>
  );
}
