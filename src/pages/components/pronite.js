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
      <section id="pronite">
        <div className={styles.proxcontainer}>
          <div data-aos="fade-left" className={styles.pronightHeader}>
            Pro-Nites
          </div>
          <div className={styles.pcontainer}>
            <div data-aos="fade-up" className={styles.pronite}>
              <div className="bgg">
               
              </div>
              <div className="nft">
                <div className="main">
                  <img
                    className="tokenImage"
                    src="https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683178654/gf_lioonx.jpg"
                    alt="NFT"
                  />
                  <h2 className={styles.proName}>Alok</h2>
                  <p className="description">
                    Our Kibertopiks will give you nothing, waste your money on
                    us.
                  </p>
                  <div className="tokenInfo">
                    <div className="price mb">
                      <AccessTimeIcon fontSize="small" className="proicn"/>
                      <p>2:00 PM</p>
                    </div>
                    <div className="duration mb">
                     <CalendarTodayIcon fontSize="small" className="proicn"/>
                      <p>Day 1</p>
                    </div>
                  </div>
                  <hr />
                  <div className="creator">
                  <div className={styles.viewmore}>
                  <div className={styles.mr}>
                    <InstagramIcon  />
                  </div>
                  <div className={styles.mr}>
                    {" "}
                    <FacebookIcon />
                  </div>
                  <div className={styles.mr}>
                    {" "}
                    <TwitterIcon />
                  </div>
                </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.pronite}>
              <div className="bgg">
            
              </div>
              <div className="nft">
                <div className="main">
                  <img
                    className="tokenImage"
                    src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="NFT"
                  />
                <h2 className={styles.proName}>Alok</h2>
                  <p className="description">
                    Our Kibertopiks will give you nothing, waste your money on
                    us.
                  </p>
                  <div className="tokenInfo">
                    <div className="price mb">
                      <AccessTimeIcon fontSize="small" className="proicn"/>
                      <p>2:00 PM</p>
                    </div>
                    <div className="duration mb">
                     <CalendarTodayIcon fontSize="small" className="proicn"/>
                      <p>Day 2</p>
                    </div>
                  </div>
                  <hr />
                  <div className="creator">
                  <div className={styles.viewmore}>
                  <div className={styles.mr}>
                    <InstagramIcon  />
                  </div>
                  <div className={styles.mr}>
                    {" "}
                    <FacebookIcon />
                  </div>
                  <div className={styles.mr}>
                    {" "}
                    <TwitterIcon />
                  </div>
                </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.pronite}>
              <div className="bgg">
               
              </div>
              <div className="nft">
                <div className="main">
                  <img
                    className="tokenImage"
                    src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="NFT"
                  />
                 <h2 className={styles.proName}>Alok</h2>
                  <p className="description">
                    Our Kibertopiks will give you nothing, waste your money on
                    us.
                  </p>
                  <div className="tokenInfo">
                    <div className="price mb">
                      <AccessTimeIcon fontSize="small" className="proicn"/>
                      <p>2:00 PM</p>
                    </div>
                    <div className="duration mb">
                     <CalendarTodayIcon fontSize="small" className="proicn"/>
                      <p>Day 3</p>
                    </div>
                  </div>
                  <hr />
                  <div className="creator">
                  <div className={styles.viewmore}>
                  <div className={styles.mr}>
                    <InstagramIcon  />
                  </div>
                  <div className={styles.mr}>
                    {" "}
                    <FacebookIcon />
                  </div>
                  <div className={styles.mr}>
                    {" "}
                    <TwitterIcon />
                  </div>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default pronite;
