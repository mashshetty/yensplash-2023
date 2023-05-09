import React, { useState } from "react";
import styles from "@/styles/Home.module.css";

import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import events from './events.json'

function Eventsx() {
  
  const data = 1;
  return (
    <>
      <div className={styles.eventContainerx}>
     <h1 className={styles.eventHeader}>Events</h1>
     </div>
    <div className={styles.eventContainerx}>
     

     {events.map((item,index)=>{
      return( <div className={styles.eventCard}>
        <div key={index} className={styles.rotatedcard}>
          <Image
            className={styles.eventImage}
            src={events[index].image}
            height="800"
            width="800"
            alt="event image"
          ></Image>
        </div>

        <div className={styles.eventBottom}>
          <h1 className={styles.eventHeader}>{events[index].name}</h1>
          <p className={styles.eventDetails}> {events[index].schedule}</p>
        <Link href={`events/${index}`}><Button className={styles.knowMore}>know more</Button></Link>  
        </div>
      </div>

)
     })}
     



    
    </div>
    </>
  );
}

export default Eventsx;
