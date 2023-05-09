import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { event } from "./eventsList";

function Event() {
  const router = useRouter();

  const [data, setData] = useState(0);

  useEffect(() => {
    
    const { eventId } = router.query;
    if(eventId){
        setData(Number(eventId));
    }
  
  }, []);



  return (
    <div className={styles.infoContainer}>
      <div className={styles.eventDesc}>
        <div className={styles.eventLeft}>
          <Image
            className={styles.eventSImg}
            src={event[data].image}
            width="600"
            height="600"
            alt="event image"
          ></Image>
        </div>
        <div className={styles.eventRight}>
          <div>
            <div className={styles.eventName}>{event[data].name}</div>
            <div className={styles.eventDetailsx}>
              <h3 className={styles.eventHeaders}>Description</h3>{" "}
              <div> {event[data].description}</div>
            </div>
            <div className={styles.eventDetailsx}>
              <h3 className={styles.eventHeaders}>Rules</h3>{" "}
              <div>{event[data].rules}</div>
            </div>
            <div className={styles.eventDetailsx}>
              <h3 className={styles.eventHeaders}>Co-Ordinator</h3>{" "}
              <div>{event[data].coordinator}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
