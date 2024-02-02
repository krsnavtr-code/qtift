import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../../components/Card/Card";
import Carousel from "../Carousel/Carousel";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

const Section = ({ title, data, type, header, loadingState }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const _handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div className={styles.sectionWrapper}>
      {header === "all" ? (
        <></>
      ) : (
        <div className={styles.header}>
          <h3>{title}</h3>
          <h4 className={styles.toggleText} onClick={_handleToggle}>
            {carouselToggle ? "Show all" : "Collapse"}
          </h4>
        </div>
      )}

      {data?.length ? (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data?.map((item) => (
                <Card data={item} type={type} key={item.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderCardComponent={(item) => <Card data={item} type={type} />}
            />
          )}
        </div>
      ) : loadingState ? (
        <SkeletonLoader name={"card"} count={5} />
      ) : (
        <p>No Data found</p>
      )}
    </div>
  );
};

export default Section;

// import React, { useState } from "react";
// import styles from "./Section.module.css";
// import { CircularProgress } from "@mui/material";
// import Card from "../Card/Card";
// import Carousel from "../Carousel/Carousel";

// const Section = ({ data, title, type }) => {
//   const [carouselToggle, setCarouselToggle] = useState([true]);

//   const handleToggle = () => {
//     setCarouselToggle(!carouselToggle);
//   };
//   return (
//     <div>
//       <div className={styles.section}>
//         <h3>{title}</h3>
//         <h4 className={styles.toggleText} onClick={handleToggle}>
//           {!carouselToggle ? "Collapse" : "Show all"}
//         </h4>
//       </div>
//       {data.length === 0 ? (
//         <CircularProgress />
//       ) : (
//         <div className={styles.cardWrapper}>
//           {!carouselToggle ? (
//             <div className={styles.wrapper}>
//               {data.map((ele) => (
//                 <Card data={ele} type={type} key={ele.id} />
//               ))}
//             </div>
//           ) : (
//             <Carousel
//               data={data}
//               renderComponent={(data) => (
//                 <Card data={data} type={type} key={data.id} />
//               )}
//             />
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Section;
