import React from "react";
import styles from "@/styles/Home.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


import team1 from "../../public/vithesh.jpg";
import team2 from "../../public/vikas.jpeg";
import team3 from "../../public/thanay.jpeg";
import team4 from "../../public/mehfooz.jpeg";
import team5 from "../../public/mash.jpg";
const Team = () => {
  return (
    <div className={styles.team_container}>
      <div className={styles.profile_card_container}>
        <div className={styles.profile_img}>
          <Image width="150px" height="150px" src={team1}  alt="sponsor image"/>
        </div>
        <div className={styles.profile_info}>
          <p className={styles.profile_info1}>Vithesh</p>
          <p className={styles.profile_info2}>
            4 <sup>th</sup> YEAR CSE
          </p>
          <p>Full Stack Developer</p>
          <div className={styles.social_handles}>
          <a href="https://www.instagram.com/1___mash___1/"> <div>
              <InstagramIcon style={{ color: "black" }} />
       
            </div>
            </a>
            <a href="https://github.com/mashshetty/">
            <div>
              <GitHubIcon style={{ color: "black" }} />
            </div>
            </a>
            <a href="https://www.linkedin.com/in/vithesh-shetty-091b7a222/">
            <div>
              <LinkedInIcon style={{ color: "black" }} />
            </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.profile_card_container}>
        <div className={styles.profile_img}>
          <Image width="150px" height="150px" src={team2}  alt="sponsor image"/>
        </div>
        <div className={styles.profile_info}>
          <p className={styles.profile_info1}>Vikas</p>
          <p className={styles.profile_info2}>
            4 <sup>th</sup> YEAR CSE
          </p>
          <p>Front-End/UI UX</p>
          <div className={styles.social_handles}>
            <div>
            <InstagramIcon style={{ color: "black" }} />
            </div>
            <div>
              <GitHubIcon style={{ color: "black" }} />
            </div>
            <div>
              <LinkedInIcon style={{ color: "black" }} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profile_card_container}>
        <div className={styles.profile_img}>
          <Image width="150px" height="150px" src={team2}  alt="sponsor image"/>
        </div>
        <div className={styles.profile_info}>
          <p className={styles.profile_info1}>Vishal</p>
          <p className={styles.profile_info2}>
            4 <sup>th</sup> YEAR CSE
          </p>
          <p>Front-End/UI UX</p>
          <div className={styles.social_handles}>
            <div>
            <InstagramIcon style={{ color: "black" }} />
            </div>
            <div>
              <GitHubIcon style={{ color: "black" }} />
            </div>
            <div>
              <LinkedInIcon style={{ color: "black" }} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profile_card_container}>
        <div className={styles.profile_img}>
          <Image width="150px" height="150px" src={team3}  alt="sponsor image"/>
        </div>
        <div className={styles.profile_info}>
          <p className={styles.profile_info1}>Thanay</p>
          <p className={styles.profile_info2}>
            4 <sup>th</sup> YEAR CSE
          </p>
          <p>Front-End/UI UX</p>
          <div className={styles.social_handles}>
            <div>
            <InstagramIcon style={{ color: "black" }} />
            </div>
            <div>
              <GitHubIcon style={{ color: "black" }} />
            </div>
            <div>
              <LinkedInIcon style={{ color: "black" }} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profile_card_container}>
        <div className={styles.profile_img}>
          <Image width="150px" height="150px" src={team4}  alt="sponsor image"/>
        </div>
        <div className={styles.profile_info}>
          <p className={styles.profile_info1}>Mehfooz</p>
          <p className={styles.profile_info2}>
            4 <sup>th</sup> YEAR CSE
          </p>
          <p>Front-End/UI UX</p>
          <div className={styles.social_handles}>
            <div>
            <InstagramIcon style={{ color: "black" }} />
            </div>
            <div>
              <GitHubIcon style={{ color: "black" }} />
            </div>
            <div>
              <LinkedInIcon style={{ color: "black" }} />
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.profile_card_container}>
        <div className={styles.profile_img}>
          <Image width="150px" height="150px" src={team1}  alt="sponsor image" />
        </div>
        <div className={styles.profile_info}>
          <p className={styles.profile_info1}>Munavvar</p>
          <p className={styles.profile_info2}>
            3 <sup>rd</sup> YEAR CSE
          </p>
          <p>Full-Stack</p>
          <div className={styles.social_handles}>
            <div>
            <InstagramIcon style={{ color: "black" }} />
            </div>
            <div>
              <GitHubIcon style={{ color: "black" }} />
            </div>
            <div>
              <LinkedInIcon style={{ color: "black" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
