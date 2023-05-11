import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Event() {
  const router = useRouter();

  const [data, setData] = useState(0);

  useEffect(() => {

    const { eventId } = router.query;
    if (eventId) {
      setData(Number(eventId));
    }

  }, []);



  return (
    <div className={styles.eventPage}>
      <image
        className={styles.eventsImg}
        src="./tree.jpg"
        alt="event image"
      ></image>
      <div className={styles.eventName}>
        <p>{event[data].name} </p>
      </div>
      <div className={styles.eventDetails}></div>
      <div className={styles.eventSchedule}></div>
      <div className={styles.eventCoordinator}></div>
    </div>

    // <div className={styles.infoContainer}>
    //   <div></div>
    //   <div className={styles.eventDesc}>
    //     <div className={styles.eventLeft}>
    //       <Image
    //         className={styles.eventSImg}
    //         src="/tree.jpg"
    //         width="600"
    //         height="600"
    //         alt="event image"
    //       ></Image>
    //       <div className={styles.schedule}>
    //         <div className={`${styles.sday} ${styles.sd}`}>
    //           {" "}
    //           <CalendarTodayIcon className="icn" /> Day {event[data].schedule.day}
    //         </div>
    //         <div className={`${styles.stime} ${styles.sd}`}>
    //           {" "}
    //           <AccessTimeIcon className="icn" /> {event[data].schedule.time}
    //         </div>
    //         <div className={`${styles.svenue} ${styles.sd}`}>
    //           {" "}
    //           <LocationOnIcon className="icn" /> {event[data].schedule.venue}
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.eventRight}>
    //       <div>
    //         <div className={styles.eventName}>{event[data].name} <span className={styles.aliasName}>{event[data].alias}</span> </div>
    //         <div className={styles.eventDetailsx}>
    //           <h3 className={styles.eventHeaders}>About the Event</h3>{" "}
    //           <div> {event[data].aboutEvent}</div>
    //         </div>
    //         <div className={styles.eventDetailsx}>
    //           <h3 className={styles.eventHeaders}>Event Details</h3>{" "}
    //           <div>{event[data].eventDetail.map((item, index) => (
    //             <li>{item}</li>
    //           ))}</div>
    //         </div>
    //         <div className={styles.eventDetailsx}>
    //           <h3 className={styles.eventHeaders}>Rules</h3>{" "}
    //           <div>{event[data].rules.map((item, index) => (
    //             <li>{item}</li>
    //           ))}</div>
    //         </div>
    //         <div className={styles.eventDetailsx}>
    //           <h3 className={styles.eventHeaders}>Co-Ordinator</h3>{" "}
    //           <div>{event[data].coordinator}</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Event;
