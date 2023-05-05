import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "@/styles/Home.module.css";

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

function events() {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);


  useEffect(() => {
    const container = containerRef.current;
    function handleScroll() {
      const delta = container.scrollLeft - scrollPosition;
      setScrollPosition(container.scrollLeft);
      if (delta > 0) {
        container.scrollLeft += 20;
      } else if (delta < 0) {
        container.scrollLeft -= 20;
      }
    }
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  

  return (
    <div className={styles.evcontainer}>
      <h1 className={styles.yenx}>Events</h1>

      <div id="mash"
        ref={containerRef}
   
        className={styles.eventContainer}
      >
        {images.map((item, index) => {
          return (
            <div key={index} className={styles.eventImg}>
              <img alt="event-images" src={item} />
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default events;
