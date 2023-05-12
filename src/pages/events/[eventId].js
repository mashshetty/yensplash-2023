import styles from "@/styles/Home.module.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import event from '../../../public/events.json';

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
      <img
        className={styles.eventsImg}
        src="/tree.jpg"
        alt="event image"
      ></img>
      <div className={styles.eventName}>
        <p>{event[data].name} </p>
        <span>{event[data].alias} </span>
      </div>
      <div className={styles.eventDescription}>
        <div className={styles.eventDetailsContainer}>
          <div className={styles.eventDetailTitle}></div>
          <div className={styles.eventDetailsList}>{event[data].aboutEvent}</div>
        </div>
        <div className={styles.eventDetailsContainer}>
          <div className={styles.eventDetailTitle}>Event Details</div>
          <div className={styles.eventDetailsList}>
            {event[data].eventDetail.map((item, index) => (
              <li>{item}</li>
            ))}
          </div>
        </div>
        <div className={styles.eventDetailsContainer}>
          <div className={styles.eventDetailTitle}>Rules and Regulations</div>
          <div className={styles.eventDetailsList}>
            {event[data].rules.map((item, index) => (
              <li>{item}</li>
            ))}
          </div>
        </div>
        <div className={styles.eventDetailsContainer}>
          <div className={styles.eventDetailTitle}>Judging Criteria</div>
          <div className={styles.eventDetailsList}>
            {event[data].judgingCriteria.map((item, index) => (
              <li>{item}</li>
            ))}
          </div>
        </div>
        <div className={styles.eventDetailsContainer}>
          <div className={styles.eventDetailTitle}>Student Coordinators</div>
          <div className={styles.eventDetailsList}>
            {event[data].coordinators.students.map((item, index) => (
              <p>{item.name} ( <a href={`tel:${item.phone}`}>{item.phone}</a>)</p>
            ))}
          </div>
        </div>
        <div className={styles.eventDetailsContainer}>
          <div className={styles.eventDetailTitle}>Faculty Coordinators</div>
          <div className={styles.eventDetailsList}>
            {event[data].coordinators.faculty.map((item, index) => (
              <p>Prof. {item}</p>
            ))}
          </div>
        </div>

      </div>
      <div className={styles.eventSchedule}>
        <p><CalendarTodayIcon />&nbsp;&nbsp;{event[data].schedule.day}  </p>
        <p><AccessTimeIcon />&nbsp;&nbsp;{event[data].schedule.time}  </p>
        <p><LocationOnIcon />&nbsp;&nbsp;{event[data].schedule.venue} </p>
      </div>

    </div >
  );
}

export default Event;
