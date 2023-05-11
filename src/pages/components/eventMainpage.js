import React from 'react'
import styles from "@/styles/Home.module.css";
import Link from "next/link"

function eventMainpage() {
  return (
    <div className={styles.container}>
        <div className={styles.evHeader}>
            Events
        </div>
        <div className={styles.info}>
        Experience a thrilling adventure that will awaken your senses to the core!
With a diverse range of offerings in music, art, sports, and technology, there's something for everyone. Come dive into the deep ocean of excitement and discover unforgettable experiences.
        </div>
      <div className={styles.exBtn}> <Link href="events"> <span className={styles.dowx}>explore</span> </Link></div> 
    </div>
  )
}

export default eventMainpage