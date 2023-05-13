import React, { useEffect } from "react";
import styles from "@/styles/Home.module.css";
import img from "../../public/YENSPLASH.png";
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css';


function aboutus() {
    useEffect(() => {
        AOS.init({duration:500})  
      }, [])
      
  return (
    <div className={styles.aboutUsContainer}>
       
      <h1  data-aos="fade-up" className={styles.abtushead}>About Us</h1>
      <div className={styles.about}>
        <div className={styles.ab1}>
          <img
            className={styles.abtimg}
            src="https://clgonline.in//static/all_collages/img/yenepoya-institute-of-technology-yit-mangalore.jpg"
            alt="college_img"
          />
        </div>
        <div className={styles.ab2}>
          <h1  data-aos="fade-left" className={styles.abtushead2}>YENEPOYA INSTITUTE OF TECHNOLOGY</h1> 
          <p  data-aos="fade-left" className={styles.aboutYen} >
            Yenepoya Institute of Technology was established in 2008 with the
            monumental objective of promoting academic excellence and competence
            in students, especially in the fast-growing global domain of
            Engineering Technology and Management. The Institute made remarkable
            progress since it's inception in every aspect and gained name among
            the Institutes of Technology in the state of Karnataka due to the
            quality of education and training provided by its dedicated faculty
            and the infrastructure available. This renowned Institute is now
            owned by the Islamic Academy of Education of Yenepoya Group of
            Institutions and Yenepoya University An organization well known for
            Quality Education.
          </p>
        </div>
      </div>
     
      <h1  data-aos="fade-right" className={styles.abtushead}>About YenSplash</h1>
      <div className={styles.about}>
        <div className={styles.ab1}>
        <div  data-aos="fade-right" className={styles.aboutYen} > 
        Yensplash 2023 is a vibrant, three-day inter-college techno-cultural extravaganza that celebrates the spirit of accomplishment and involvement. With a footfall of over 3000 students from across the state, YenSplash is the ultimate platform to showcase your skills and talents. At YenSplash 2023, we aim to cultivate a sense of community among the youth by providing a wide range of activities that cater to all interests. From showcasing your technological expertise to indulging in literary and cultural events, or even testing your gaming skills, YenSplash 2023 has something for everyone. Come join us at YIT and let the magic of YenSplash inspire you to invent, create and amalgamate your cultural and traditional knowledge with us. So, mark your calendars and be a part of this spectacular celebration where you can unleash your true potential and bring out the best version of yourself!
        </div>
        </div>
        <div  data-aos="fade-left"  className={styles.ab2}>
     

        <Image width="650" height="550" className={styles.abtuslogo} src={img}  alt="logo-image"></Image>
        </div>
      </div>
    </div>
  );
}

export default aboutus;
