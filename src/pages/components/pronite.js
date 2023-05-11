import styles from "@/styles/Home.module.css";
import Image from "next/image";
// import r from "../../../public/rdd.jpg";
// import r1 from "../../../public/r.jpg";
// import r2 from "../../../public/s.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
// import rapper from "../../../public/allok.jpg";
import tree from "../../../public/tree.jpg";

function pronite() {
  const handleDownload = (event) => {
    event.preventDefault();
    const fileUrl = '/rulebook.pdf';
    const fileName = 'myfile.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <>
      <section id="pronite">
        <div className={styles.proxcontainer}>
          <div data-aos="fade-left" className={styles.pronightHeader}>Pro-Nites</div>
          <div className={styles.pcontainer}>
            <div data-aos="fade-up" className={styles.pronite}>
              <div className={styles.pronitecard1}>
                <Image
                  height={400}
                  width={400}
                  className={styles.proimg}
                  src={tree}
                  quality={80}
                  alt="pronite-image"
                ></Image>
                <h2 className={styles.prohead}>Raghu Dixith</h2>
                <hr />
                <div className={styles.prodetails}>
                  <div className={`${styles.pday} ${styles.pd}`}>
                    {" "}
                    <CalendarTodayIcon className="icn" /> day 1
                  </div>
                  <div className={`${styles.ptime} ${styles.pd}`}>
                    {" "}
                    <AccessTimeIcon className="icn" /> 7 AM
                  </div>

                </div>
                <div className={styles.prodesc}>
                  DJ Holiday was born as Robert Avery, and he hails from Atlanta. Since his high school days, he was interested in DJing
                </div>
                <div className={styles.viewmore}>
                  <div className={styles.mr}>
                    <InstagramIcon fontSize="large" />
                  </div>
                  <div className={styles.mr}>
                    {" "}
                    <FacebookIcon fontSize="large" />
                  </div>
                  <div className={styles.mr}>
                    {" "}
                    <TwitterIcon fontSize="large" />
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-down" className={styles.pronite}>
              <div className={styles.pronitecard2}>
                <Image
                  height={400}
                  width={400}
                  className={styles.proimg}
                  src={tree}
                  quality={80}
                  alt="pronite-image"
                ></Image>
                <h2 className={styles.prohead}>Alok</h2>
                <div className={styles.prodetails}>
                  <div className={`${styles.pday} ${styles.pd}`}>
                    {" "}
                    <CalendarTodayIcon className="icn" /> day 2
                  </div>
                  <div className={`${styles.ptime} ${styles.pd}`}>
                    {" "}
                    <AccessTimeIcon className="icn" /> 4 AM
                  </div>

                </div>
                <div className={styles.prodesc}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                  fugiat ratione neque ipsa! Et corrupti labore ab amet omnis,
                  iure earum.
                </div>
                <div className={styles.viewmore}>
                  <div className={styles.mr}>
                    <InstagramIcon className="sicn" fontSize="large" />
                  </div>
                  <div className={styles.mr}>
                    {" "}
                    <FacebookIcon className="sicn" fontSize="large" />
                  </div>
                  <div className={styles.mr}>
                    {" "}
                    <TwitterIcon className="sicn" fontSize="large" />
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className={styles.pronite}>
              <div className={styles.pronitecard3}>
                <Image
                  height={400}
                  width={400}
                  className={styles.proimg}
                  src={tree}
                  quality={80}
                  alt="pronite-image"
                ></Image>
                <h2 className={styles.prohead}>marin</h2>
                <div className={styles.prodetails}>
                  <div className={`${styles.pday} ${styles.pd}`}>
                    {" "}
                    <CalendarTodayIcon className="icn" /> day 3
                  </div>
                  <div className={`${styles.ptime} ${styles.pd}`}>
                    {" "}
                    <AccessTimeIcon className="icn" /> 1 AM
                  </div>

                </div>
                <div className={styles.prodesc}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                  fugiat ratione neque ipsa! Et corrupti labore ab amet omnis,
                  iure earum.
                </div>
                <div className={styles.viewmore}>
                  <div className={styles.mr}>
                    <InstagramIcon fontSize="large" />
                  </div>
                  <div className={styles.mr}>
                    {" "}
                    <FacebookIcon fontSize="large" />
                  </div>
                  <div className={styles.mr}>
                    {" "}
                    <TwitterIcon fontSize="large" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className={styles.download}>

            <a href="/rulebook.pdf" onClick={handleDownload}>
              <span className={styles.dow}>    Download Brochure</span>

            </a>



          </div>
        </div>
      </section>
    </>
  );
}

export default pronite;
