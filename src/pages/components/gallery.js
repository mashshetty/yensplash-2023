import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/Home.module.css";
import AOS from "aos";
import 'aos/dist/aos.css';




const images = [
  
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683177902/logori_xqmafa.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683178069/DSC_0158_1_caecuv.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683178761/dj_n3mwqm.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683178758/holy_odu48n.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683178736/holy2_kr6e7l.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683178736/rdx1_cltdbw.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683178726/holy1_ydt5xz.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683178711/mv_jrmhcw.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683178659/rdx2_ksjtrp.jpg",
    "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1683178654/gf_lioonx.jpg",


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
    {/* <Slider {...settings}>
        {images.map((image) => (
          <div key={image}>
            <img src={image} alt="" />
            
          </div>
        ))}
      </Slider> */}
      <img className={styles.galBgImg} src={images[imgIndex]} alt="img" />
<div data-aos="fade-up" className={styles.imgContainer}>

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