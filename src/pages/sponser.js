import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const sponser = () => {
  const [change, setchange] = useState(true);
  return (
    <div className={styles.sponser_container}>
      <div className={styles.sponser_card}>
        <div className={styles.left_container}>
          <img
            src="https://file.kreditings.com/uploads/preview/sitting-lion-background-images-hd-for-picsart-11657445991avdajm08su.jpg"
            alt=""
          />
        </div>
        <div
          className={styles.right_container}
          style={{ left: change ? "100%" : "0%" }}
        >
          <p style={{ fontSize: "30px" }}>Sponser Name</p>
          <p style={{ fontSize: "15px", color: "orange", fontWeight: "bold" }}>
            Sponser Type
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vero
            facere cum similique voluptatibus aut, aspernatur, rerum iste
            corrupti blanditiis, aperiam impedit earum soluta debitis
            distinctio. Culpa temporibus corrupti omnis?
          </p>
          <div className={styles.social_media_icon}>
            <div>
              <FacebookIcon />
            </div>
            <div>
              <InstagramIcon />
            </div>
            <div>
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sponser_card}>
        <div className={styles.left_container}>
          <img
            src="https://file.kreditings.com/uploads/preview/sitting-lion-background-images-hd-for-picsart-11657445991avdajm08su.jpg"
            alt=""
          />
        </div>
        <div
          className={styles.right_container}
          style={{ left: change ? "100%" : "0%" }}
        >
          <p style={{ fontSize: "30px" }}>Sponser Name</p>
          <p style={{ fontSize: "15px", color: "orange", fontWeight: "bold" }}>
            Sponser Type
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vero
            facere cum similique voluptatibus aut, aspernatur, rerum iste
            corrupti blanditiis, aperiam impedit earum soluta debitis
            distinctio. Culpa temporibus corrupti omnis?
          </p>
          <div className={styles.social_media_icon}>
            <div>
              <FacebookIcon />
            </div>
            <div>
              <InstagramIcon />
            </div>
            <div>
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sponser_card}>
        <div className={styles.left_container}>
          <img
            src="https://file.kreditings.com/uploads/preview/sitting-lion-background-images-hd-for-picsart-11657445991avdajm08su.jpg"
            alt=""
          />
        </div>
        <div
          className={styles.right_container}
          style={{ left: change ? "100%" : "0%" }}
        >
          <p style={{ fontSize: "30px" }}>Sponser Name</p>
          <p style={{ fontSize: "15px", color: "orange", fontWeight: "bold" }}>
            Sponser Type
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vero
            facere cum similique voluptatibus aut, aspernatur, rerum iste
            corrupti blanditiis, aperiam impedit earum soluta debitis
            distinctio. Culpa temporibus corrupti omnis?
          </p>
          <div className={styles.social_media_icon}>
            <div>
              <FacebookIcon />
            </div>
            <div>
              <InstagramIcon />
            </div>
            <div>
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sponser_card}>
        <div className={styles.left_container}>
          <img
            src="https://file.kreditings.com/uploads/preview/sitting-lion-background-images-hd-for-picsart-11657445991avdajm08su.jpg"
            alt=""
          />
        </div>
        <div
          className={styles.right_container}
          style={{ left: change ? "100%" : "0%" }}
        >
          <p style={{ fontSize: "30px" }}>Sponser Name</p>
          <p style={{ fontSize: "15px", color: "orange", fontWeight: "bold" }}>
            Sponser Type
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vero
            facere cum similique voluptatibus aut, aspernatur, rerum iste
            corrupti blanditiis, aperiam impedit earum soluta debitis
            distinctio. Culpa temporibus corrupti omnis?
          </p>
          <div className={styles.social_media_icon}>
            <div>
              <FacebookIcon />
            </div>
            <div>
              <InstagramIcon />
            </div>
            <div>
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sponser_card}>
        <div className={styles.left_container}>
          <img
            src="https://file.kreditings.com/uploads/preview/sitting-lion-background-images-hd-for-picsart-11657445991avdajm08su.jpg"
            alt=""
          />
        </div>
        <div
          className={styles.right_container}
          style={{ left: change ? "100%" : "0%" }}
        >
          <p style={{ fontSize: "30px" }}>Sponser Name</p>
          <p style={{ fontSize: "15px", color: "orange", fontWeight: "bold" }}>
            Sponser Type
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vero
            facere cum similique voluptatibus aut, aspernatur, rerum iste
            corrupti blanditiis, aperiam impedit earum soluta debitis
            distinctio. Culpa temporibus corrupti omnis?
          </p>
          <div className={styles.social_media_icon}>
            <div>
              <FacebookIcon />
            </div>
            <div>
              <InstagramIcon />
            </div>
            <div>
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sponser;
