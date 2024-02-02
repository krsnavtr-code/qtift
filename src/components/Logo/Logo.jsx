import React from "react";
import LogoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    <>
      <img src={LogoImage} alt="Logo" width={67} height={34} />
    </>
  );
};

export default Logo;

// import React from "react";
// import styles from "./Logo.module.css";
// import logoImage from "../../assets/logoimage.png";

// const Logo = () => {
//   return (
//     <div className={styles.logoWrapper}>
//       <img src={logoImage} alt="logo" width={67} />
//     </div>
//   );
// };

// export default Logo;
