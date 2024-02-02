import React from "react";
import styles from "./HeroSection.module.css";
import Headphone from "../../assets/headphone.svg";

const HeroSection = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.heroImageWrapper}>
          <div className={styles.banner}>
            <h1>100 Thousand Songs, ad free</h1>
            <h1>Over thousands podcast episodes</h1>
          </div>
          <div>
            <img src={Headphone} alt="Headphone" height="212px" width="212px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

// import React from "react";
// import heroImage from "../../assets/heroimage.png";
// import styles from "./Hero.module.css";

// const Hero = () => {
//   return (
//     <div className={styles.heroWrapper}>
//       <div className={styles.heroText}>
//         <h1>100 Thousand Songs, ad-free</h1>
//         <h1>Over thousands podcast episodes</h1>
//       </div>
//       <div>
//         <img src={heroImage} alt="headphoneImage" width={212} />
//       </div>
//     </div>
//   );
// };

// export default Hero;
