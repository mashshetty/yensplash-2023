import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import leaves from "../../../public/leavesx.png";
import Image from "next/image";

function navbar() {
  const [show, setShow] = useState(false);

  

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.leaves}>
          {" "}
          <Image
            src={leaves}
            width={500}
            height={300}
            alt="leaves-images"
          ></Image>
        </div>

        <div className={styles.navoption}>
          {" "}
          <Link href="/">Home</Link>
        </div>
        <div className={styles.navoption}>
          <Link href="/events">Events</Link>
        </div>
        <a className={styles.navoption} href="/#pronite">
          Pronites
        </a>
        <a className={styles.navoption} href="/#gallery">
          Gallery
        </a>
        <div className={styles.navoption}> <Link href="/sponser">Sponsors</Link></div>
        <div className={styles.navoption}> <Link href="/team">Our Team</Link></div>
        <div className={styles.navoption}>
          {" "}
          <Link href="/aboutus"> About Us</Link>
        </div>
      </div>
      <div className={styles.menu}>
   {!show &&  <div className={styles.leaves}>
        
          <Image
            src={leaves}
            width={500}
            height={300}
            alt="leaves-images"
          ></Image>
        </div>}
        <span className={styles.menuicn} onClick={(e) => setShow(!show)}>
          <MenuIcon />
        </span>
        {show && (
          <div className={styles.menuitems}>
            <div onClick={e=>setShow(!show)} className={styles.navoptionx}> <Link href="/">Home</Link></div>
            <div onClick={e=>setShow(!show)}  className={styles.navoption}>  <a href="/#pronite">
          Pronites
        </a></div>
            <div onClick={e=>setShow(!show)}  className={styles.navoption}> <a href="/#gallery">
          Gallery
        </a></div>
            <div onClick={e=>setShow(!show)}  className={styles.navoption}><Link href="/events">Events</Link></div>
            <div  onClick={e=>setShow(!show)}  className={styles.navoption}> <Link href="/sponser">Sponsors</Link></div>
        <div  onClick={e=>setShow(!show)}  className={styles.navoption}> <Link href="/team">Our Team</Link></div>
            <div onClick={e=>setShow(!show)}  className={styles.navoption}>       <Link href="/aboutus"> About Us</Link></div>
          </div>
        )}
      </div>
    </>
  );
}

export default navbar;
