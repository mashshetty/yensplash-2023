import styles from "@/styles/Home.module.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useEffect, useState } from "react";
// import event from '../../../public/events.json';
import { useRouter } from "next/router";
import { interEvents } from "./../interCollegeDetails";


function interEvent() {
    const router = useRouter();


    const [data, setData] = useState(0);

    useEffect(() => {

        const { InterCollegeEventId } = router.query;
        if (InterCollegeEventId) {
            setData(Number(InterCollegeEventId));
        }

        console.log(InterCollegeEventId)

    }, []);

    return (
        <div className={styles.eventPage}>
            <img
                className={styles.eventsImg}
                src={`../${interEvents[data].image.src}`}
                alt="event image"
            ></img>
            <div className={styles.eventName}>
                <p>{interEvents[data].name} </p>
                <span>{interEvents[data].alias} </span>
            </div>
            <div className={styles.eventDescription}>
                <div className={styles.eventDetailsContainer}>
                    <div className={styles.eventDetailTitle}>Entry Fee</div>
                    <div className={styles.eventDetailsList}>{interEvents[data].Fee}</div>
                </div>
                <div className={styles.eventDetailsContainer}>
                    <div className={styles.eventDetailTitle}>Registration</div>
                    <div className={styles.eventDetailsList}>
                        {interEvents[data].link.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </div>
                </div>
                <div className={styles.eventDetailsContainer}>
                    <div className={styles.eventDetailTitle}></div>
                    <div className={styles.eventDetailsList}>{interEvents[data].aboutEvent}</div>
                </div>
                <div className={styles.eventDetailsContainer}>
                    <div className={styles.eventDetailTitle}>Event Details</div>
                    <div className={styles.eventDetailsList}>
                        {interEvents[data].eventDetail.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </div>
                </div>
                <div className={styles.eventDetailsContainer}>
                    <div className={styles.eventDetailTitle}>Rules and Regulations</div>
                    <div className={styles.eventDetailsList}>
                        {interEvents[data].rules.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </div>
                </div>
                <div className={styles.eventDetailsContainer}>
                    <div className={styles.eventDetailTitle}>Judging Criteria</div>
                    <div className={styles.eventDetailsList}>
                        {interEvents[data].judgingCriteria.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </div>
                </div>
                <div className={styles.eventDetailsContainer}>
                    <div className={styles.eventDetailTitle}>Student Coordinators</div>
                    <div className={styles.eventDetailsList}>
                        {interEvents[data].coordinators.students.map((item, index) => (
                            <p>{item.name} ( <a href={`tel:${item.phone}`}>{item.phone}</a>)</p>
                        ))}
                    </div>
                </div>
                <div className={styles.eventDetailsContainer}>
                    <div className={styles.eventDetailTitle}>Faculty Coordinators</div>
                    <div className={styles.eventDetailsList}>
                        {interEvents[data].coordinators.faculty.map((item, index) => (
                            <p>Prof. {item}</p>
                        ))}
                    </div>
                </div>

            </div>
            <div className={styles.eventSchedule}>
                <p><CalendarTodayIcon />&nbsp;&nbsp;{interEvents[data].schedule.day}  </p>
                <p><AccessTimeIcon />&nbsp;&nbsp;{interEvents[data].schedule.time}  </p>
                <p><LocationOnIcon />&nbsp;&nbsp;{interEvents[data].schedule.venue} </p>
            </div>

        </div >
    );
}

export default interEvent;
