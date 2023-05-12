import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/Home.module.css";
import AOS from "aos";
import 'aos/dist/aos.css';




const images = [
  
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717078/image_79_jjjjyt.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717069/image_60_tmpnrn.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717077/image_77_hehli6.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717076/image_74_hauvet.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717063/image_55_optq53.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717079/image_78_aznkf2.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717075/image_73_ci5mgu.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717062/image_51_g1ivb7.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717074/image_70_f5mdez.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717032/image_4_usfhdb.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717079/image_78_aznkf2.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717061/image_42_chqtiq.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717050/image_38_spighd.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717071/image_61_c4eyno.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717049/image_40_emyog3.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717045/image_32_htt2jg.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683717037/image_19_ypacsh.jpg"



  ];
function gallery() {
  useEffect(() => {
    AOS.init({duration:500})  
  }, [])

  const [imgIndex,setIndex]=useState(0);


  useEffect(() => {
    const id = setInterval(() => {
      setIndex((imgIndex)=>(imgIndex+1)%images.length)

    }, 2000);
  
    return () => {
     clearInterval(id)
    }
  }, [imgIndex])
  
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true, // make the slider move vertically
        verticalSwiping: true, // enable vertical swiping
        autoplay: true, // enable autoplay
        autoplaySpeed: 10, // set the autoplay speed to 2 seconds
      };
  return (
    <section id="gallery">
    <div className={styles.container}>
        <h1 data-aos="fade-down" className={styles.yenx}> <span className={styles.glimpse}>Glimpses of</span>  Yenspalsh <span className={styles.year}>2022!!</span> </h1>
   
      <img className={styles.galBgImg} src={images[imgIndex]} alt="img" />
<div  className={styles.imgContainer}>

<img className={styles.galImg1} src={imgIndex!==0?  images[imgIndex-1%images.length] : images[images.length-1]} alt="img" />
<img className={styles.galImg} src={images[imgIndex]} alt="img" />
<img className={styles.galImg3} src={imgIndex!==images.length-1? images[imgIndex+1%images.length]:images[0]} alt="img" />
</div>




      {/* <div data-aos="fade-up" className={styles.explore}>view more</div> */}
    </div>
    </section>
  )
}

export default gallery