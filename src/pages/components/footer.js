import styles from "@/styles/Home.module.css";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function footer() {
  useEffect(() => {
    AOS.init({ duration: 100 })
  }, [])
  return (
    <footer className={styles.fcontainer}>
      <p data-aos="fade-up" className={styles.yenepoya}><span>YENEPOYA</span>  <span>INSTITUTE OF TECHNOLOGY</span> </p>
      <p className={styles.subaddress}>Thodar, Mijar Post, Mangaluru Taluk -574225</p>
      <p className={styles.subaddress}> <LocalPhoneIcon className='icn' /> Tel: 08258 - 262733, 262713</p>
      <p className={styles.subaddress}><EmailIcon className='icn' /> Email: <a href="mailto:info@yit.edu.in">info@yit.edu.in</a> </p>
      <p className={styles.subaddress}><TravelExploreIcon className='icn' />Web: <a href="https://www.yit.edu.in/">www.yit.edu.in</a></p>
      <p className={styles.copyright}>Copyright @2023 Yensplash. All rights reserved</p>
    </footer>
  )
}

export default footer