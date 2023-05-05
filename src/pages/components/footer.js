import React, { useEffect } from 'react'
import styles from "@/styles/Home.module.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css';

function footer() {
  useEffect(() => {
    AOS.init({duration:500})  
  }, [])
  return (
    <div className={styles.fcontainer}>
     
        <p data-aos="fade-up"  className={styles.yenepoya}>YENEPOYA INSTITUTE OF TECHNOLOGY</p>
        <p className={styles.subaddress}>Thodar, Mijar P.O,Mangaluru Taluk -574225</p>
        <p className={styles.subaddress}> <LocalPhoneIcon  className='icn'/> Tel: 08258 - 262733,262713</p>
        <p className={styles.subaddress}>Fax :08258 -262733,262713</p>
        <p className={styles.subaddress}><EmailIcon className='icn'/> Email: info@yit.edu.in</p>
        <p className={styles.subaddress}><TravelExploreIcon className='icn'/>Web: www.yit.edu.in</p>
        <p className={styles.copyright}>Copyright @2023 Yenspalsh. All rights reserved</p>
        

    
    </div>
  )
}

export default footer