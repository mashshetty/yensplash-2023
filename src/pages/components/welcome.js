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
        <span className={styles.headtext}>Yensplash</span>  is an annual techno-cultural fest held at Yenepoya Institute of Technology in Mangalore, Karnataka, India. It is a 3-day attracts participants from various colleges across the region. The fest features a wide range of events, including technical competitions, cultural performances, workshops, seminars, and sports activities. The technical competitions include coding challenges, hackathons, robotics competitions, and gaming events. There are also cultural events such as music and dance performances, fashion, and talent shows. Yensplash is known for its lively and energetic atmosphere, with participants from different colleges showcasing their talents and engaging in friendly competition. The fest provides a platform for students to showcase their skills and creativity and helps to foster a sense of community and collaboration among participants.
      </p>
      <div className={styles.location}>
        <p data-aos="fade-right"  className={styles.date}>
          <CalendarMonthIcon className={styles.icn} /> 19,20 and 21 May
        </p>
        <p data-aos="fade-left"  className={styles.loc}>
          <LocationOnIcon className={styles.icn} /> Yenepoya Institute of Technology Moodibidhri
        </p>
      </div>
    </div>
  );
}

export default welcome;
