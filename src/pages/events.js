
import styles from "@/styles/Home.module.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
// import events from '../../public/events.json';
import { events } from "./eventDetails";

function Eventsx() {

  const data = 1;
  return (
    <div className={styles.eventContainerx}>
      <h1 className={styles.eventHeaderx}>Events</h1>
      <div className={styles.eventContainerx}>
        {events.map((item, index) => {
          return (
            <div key={index} className={styles.eventCard}>
              <div className={styles.eventImagecard}>
                <Image
                  className={styles.eventImage}
                  src={events[index].image}
                  height="500"
                  width="400"
                  alt="event image"
                ></Image>
              </div>
              <div className={styles.eventBottom}>
                <p className={styles.eventHeader}>{events[index].name}</p>
                <div className={styles.eventDetails}>
                  <span><CalendarTodayIcon className={styles.icon} />&nbsp;{events[index].schedule.day}</span>
                  <span><LocationOnIcon className={styles.icon} />&nbsp;{events[index].schedule.venue}</span>
                  <span><AccessTimeIcon className={styles.icon} />&nbsp;{events[index].schedule.time} </span>
                </div>
                <Link href={`events/${index}`}><Button className={styles.knowMore}>know more</Button></Link>
              </div>
            </div>
          )
        })},
      </div>
    </div>
  )
};


export default Eventsx;