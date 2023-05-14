import React, { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import r from "../../../public/rdd.jpg";
import r1 from "../../../public/r.jpg";
import r2 from "../../../public/s.jpg";
import plant from "../../../public/plant.png";
import rapper from "../../../public/allok.jpg";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import pone from "../../../public/one.png";
import ptwo from "../../../public/theme.png";
import pthree from "../../../public/three-pronite.png";
function pronite() {
  // useEffect(() => {
  //   function handleScroll() {
  //     console.log('Window was scrolled');
  //   }

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <>   
      <section id="pronite" className={styles.pro_nite_containerx}>
      <div data-aos="fade-left" className={styles.pronightHeaderu}>Pro-Nites</div>
      <section id="pronite" className={styles.pro_nite_container}>
  
        {/* <div  className={styles.proxcontainer}>
   
        <div className={styles.pcontainer}>
          <div data-aos="fade-up" className={styles.pronite}>
            <div className={styles.pronitecard1}>
              <Image
                height={400}
                width={400}
                className={styles.proimg}
                src={r}
                quality={80}
                alt="pronite-image"
              ></Image>
              <h2 className={styles.prohead}>Raghu Dixith</h2>
              <hr />
              <div className={styles.prodetails}>
                <div className={`${styles.pday} ${styles.pd}`}>
                  {" "}
                  <CalendarTodayIcon className="icn" /> day 1
                </div>
                <div className={`${styles.ptime} ${styles.pd}`}>
                  {" "}
                  <AccessTimeIcon className="icn" /> 7 AM
                </div>
               
              </div>
              <div className={styles.prodesc}>
              DJ Holiday was born as Robert Avery, and he hails from Atlanta. Since his high school days, he was interested in DJing
              </div>
              <div className={styles.viewmore}>
                <div className={styles.mr}>
                  <InstagramIcon fontSize="large" />
                </div>
                <div className={styles.mr}>
                  {" "}
                  <FacebookIcon fontSize="large" />
                </div>
                <div className={styles.mr}>
                  {" "}
                  <TwitterIcon fontSize="large" />
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-down" className={styles.pronite}>
            <div className={styles.pronitecard2}>
              <Image
                height={400}
                width={400}
                className={styles.proimg}
                src={rapper}
                quality={80}
                alt="pronite-image"
              ></Image>
              <h2 className={styles.prohead}>Alok</h2>
              <div className={styles.prodetails}>
                <div className={`${styles.pday} ${styles.pd}`}>
                  {" "}
                  <CalendarTodayIcon className="icn" /> day 2
                </div>
                <div className={`${styles.ptime} ${styles.pd}`}>
                  {" "}
                  <AccessTimeIcon className="icn" /> 4 AM
                </div>
               
              </div>
              <div className={styles.prodesc}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                fugiat ratione neque ipsa! Et corrupti labore ab amet omnis,
                iure earum.
              </div>
              <div className={styles.viewmore}>
                <div className={styles.mr}>
                  <InstagramIcon fontSize="large" />
                </div>
                <div className={styles.mr}>
                  {" "}
                  <FacebookIcon fontSize="large" />
                </div>
                <div className={styles.mr}>
                  {" "}
                  <TwitterIcon fontSize="large" />
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className={styles.pronite}>
            <div className={styles.pronitecard3}>
              <Image
                height={400}
                width={400}
                className={styles.proimg}
                src={r2}
                quality={80}
                alt="pronite-image"
              ></Image>
              <h2 className={styles.prohead}>marin</h2>
              <div className={styles.prodetails}>
                <div className={`${styles.pday} ${styles.pd}`}>
                  {" "}
                  <CalendarTodayIcon className="icn" /> day 3
                </div>
                <div className={`${styles.ptime} ${styles.pd}`}>
                  {" "}
                  <AccessTimeIcon className="icn" /> 1 AM
                </div>
                
              </div>
              <div className={styles.prodesc}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                fugiat ratione neque ipsa! Et corrupti labore ab amet omnis,
                iure earum.
              </div>
              <div className={styles.viewmore}>
                <div className={styles.mr}>
                  <InstagramIcon fontSize="large" />
                </div>
                <div className={styles.mr}>
                  {" "}
                  <FacebookIcon fontSize="large" />
                </div>
                <div className={styles.mr}>
                  {" "}
                  <TwitterIcon fontSize="large" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.download}>  
        
         <span className={styles.dow}> Download Brochure</span>

         

          
          </div>
      </div> */}
           
        <div data-aos="fade-up" className={styles.card_container}>
          <div  className={styles.top_section}>
            <Image
              height={400}
              width={400}
              className={styles.proimg}
              src={pone}
              quality={80}
              alt="pronite-image"
            ></Image>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.card_container}>
          <div className={styles.top_section}>
            <Image
              height={400}
              width={400}
              className={styles.proimg}
              src={ptwo}
              quality={80}
              alt="pronite-image"
            ></Image>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.card_container}>
          <div className={styles.top_section}>
            <Image
              height={400}
              width={400}
              className={styles.proimg}
              src={pthree}
              quality={80}
              alt="pronite-image"
            ></Image>
          </div>
        </div>
      </section>
      </section>
    
    </>
  );
}

export default pronite;
