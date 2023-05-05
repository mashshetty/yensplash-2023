import React, { useEffect } from "react";
import styles from "@/styles/Home.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AOS from "aos";
import 'aos/dist/aos.css';

function welcome() {
  useEffect(() => {
    AOS.init({duration:500})

  }, [])
  
  return (
    <div className={styles.wcontainer} >
      <p data-aos="fade-left"  className={styles.welcome}>Welcome to </p>
      <h1  data-aos="fade-right"  className={styles.yen}>YenSplash 2023</h1>
      <p  data-aos="fade-left" className={styles.info}>
        <span className={styles.headtext}>Yensplash</span> 2023 is a vibrant,
        three-day inter-college techno-cultural extravaganza that celebrates the
        spirit of accomplishment and involvement. With a footfall of over 3000
        students from across the state, YenSplash is the ultimate platform to
        showcase your skills and talents. At YenSplash 2023, we aim to cultivate
        a sense of community among the youth by providing a wide range of
        activities that cater to all interests. From showcasing your
        technological expertise to indulging in literary and cultural events, or
        even testing your gaming skills, YenSplash 2023 has something for
        everyone. Come join us at YIT and let the magic of YenSplash inspire you
        to invent, create and amalgamate your cultural and traditional knowledge
        with us. So, mark your calendars and be a part of this spectacular
        celebration where you can unleash your true potential and bring out the
        best version of yourself!
      </p>
      <div className={styles.location}>
        <p data-aos="fade-right"  className={styles.date}>
          <CalendarMonthIcon className={styles.icn} /> 21,22 and 23 June
        </p>
        <p data-aos="fade-left"  className={styles.loc}>
          <LocationOnIcon className={styles.icn} /> Yenepoya Institute of Technology Moodibidhri
        </p>
      </div>
    </div>
  );
}

export default welcome;
