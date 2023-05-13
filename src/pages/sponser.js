import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import bite from "../../public/bite.png";
import mayuri from "../../public/mayuri.png";
import estate from "../../public/estate.png";
const sponser = () => {
  const [change, setchange] = useState(true);
  return (
    <div className={styles.sponser_container}>
      <div className={styles.sponser_card}>
        <div className={styles.left_container}>
          <img src={bite.src} alt="sponsor image" />
        </div>
        <div
          className={styles.right_container}
          style={{ left: change ? "100%" : "0%" }}
        >
          <p style={{ fontSize: "30px" }}>Bite N Eat, Moodbidri</p>
        </div>
      </div>
      <div className={styles.sponser_card}>
        <div className={styles.left_container}>
          <img src={estate.src} alt="sponsor image" />
        </div>
        <div
          className={styles.right_container}
          style={{ left: change ? "100%" : "0%" }}
        >
          <p style={{ fontSize: "30px" }}>The Estate Resort, Moodbidri</p>
        </div>
      </div>
      <div className={styles.sponser_card}>
        <div className={styles.left_container}>
          <img src={mayuri.src} alt="sponsor image" />
        </div>
        <div
          className={styles.right_container}
          style={{ left: change ? "100%" : "0%" }}
        >
          <p style={{ fontSize: "30px" }}>
            Mayuri Silks Textile & Readymades, Moodbidri
          </p>
        </div>
      </div>
    
    
    </div>
  );
};

export default sponser;
