import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import r from "../../public/rdd.jpg";
import r1 from "../../public/r.jpg";
import r2 from "../../public/s.jpg";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";

function events() {
  const [events,setEvents]=useState([1,2,3,4,5,6,7,8,9,10])
  const data = 1;
  return (
    <>
      <div className={styles.eventContainerx}>
     <h1 className={styles.pronightHeader}>Events</h1>
     </div>
    <div className={styles.eventContainerx}>
     

     {events.map((item,index)=>{
      return( <div className={styles.eventCard}>
        <div key="index" className={styles.rotatedcard}>
          <Image
            className={styles.eventImage}
            src={r2}
            height="800"
            width="800"
            alt="event image"
          ></Image>
        </div>

        <div className={styles.eventBottom}>
          <h1 className={styles.eventHeader}>Singing</h1>
          <p className={styles.eventDetails}> Day 1 || TLH 01 || 2:00 PM </p>
        <Link href={`events/${index}`}><Button className={styles.knowMore}>know more</Button></Link>  
        </div>
      </div>

)
     })}
     



    
    </div>
    </>
  );
}

export default events;
