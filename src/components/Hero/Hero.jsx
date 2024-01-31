import React from "react";
import heroImage from "../../assets/heroimage.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroText}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={heroImage} alt="headphone image" width={212} />
      </div>
    </div>
  );
};

export default Hero;
