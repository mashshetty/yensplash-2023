import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Welcome from "./components/welcome";
import img from "../../public/YENSPLASH.png";
import Gallery from "./components/gallery";
import Pronite from "./components/pronite";
import bg from "../../public/bgvideo.mp4";
import mbg from "../../public/mobile.mp4";
import { useEffect, useRef, useState } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import EventMainpage from "./components/eventMainpage";
import legacy from "../../public/legacy.png"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  const [AddClass, setAddClass] = useState(false);

  

  useEffect(() => {
    AOS.init({duration:500})
  
   
  }, [])
  const videoRef = useRef(null);
  const mvideoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      mvideoRef.current.play();
    }

   

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
          <div className={styles.mhomepageimg}>
            <video controls={false} autoPlay muted  ref={mvideoRef} loop={true} className={styles.mhomevideo}>
              <source src={mbg} type="video/mp4" />
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
        
          <div className="wrapper">
          {/* <div
            // data-aos="fade-right"
            className={`${AddClass} ? ${styles.quate} ${styles.animate} : ${styles.quate}`}
            id="demo"
          >
            EMBRACE THE LEGACY{" "}
          </div>      */}
<Image  className={styles.imgLegacy} src={legacy} height="600" width="600" alt="embrace the legacy"></Image>
     </div>
        </div>
        <Welcome />
        <Gallery />
    
        <Pronite />
        <EventMainpage/>
    
       
      </main>
    </>
  );
}
