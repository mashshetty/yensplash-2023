import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Welcome from "./components/welcome";
import img from "../../public/YENSPLASH.png";
import Gallery from "./components/gallery";
import Pronite from "./components/pronite";
import bg from "../../public/bgvideo.mp4";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });
let i = 0;
export default function Home() {
  const [AddClass, setAddClass] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      TypingEffect();
    }

    const parallax = document.getElementById("parallax");
  }, []);

  function TypingEffect() {
    var txt = "EMBRACE THE LEGACY";
    var speed = 100;
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(TypingEffect, speed);
    }
    // const elem = document.getElementById("demo");
    // elem.classList.add("animate");
    console.log("toogle");
    setAddClass(true);
  }
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
            <video
              controls={false}
              autoPlay
              muted
              ref={videoRef}
              loop={true}
              className={styles.homevideo}
            >
              <source src={bg} type="video/mp4" />
            </video>
          </div>
          <div data-aos="fade-left">
            <Image
              className={styles.homeimg}
              width="100px"
              height="100px"
              src={img}
              alt="yensplash logo"
            />
          </div>

          {/* <div  data-aos="fade-right"  className={styles.quate} id="demo">EMBRACE THE  <span className={styles.legacy}>LEGACY</span> </div> */}
          <div
            // data-aos="fade-right"
            className={`${AddClass} ? ${styles.quate} ${styles.animate} : ${styles.quate}`}
            id="demo"
          >
            {" "}
          </div>
        </div>
        <Welcome />
        <Gallery />

        <Pronite />
      </main>
    </>
  );
}
