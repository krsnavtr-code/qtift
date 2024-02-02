import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AlbumDetails from "./pages/AlbumDetails/AlbumDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/album/:slug" element={<AlbumDetails />} />

        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;

// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import Hero from "./components/Hero/Hero";
// import Navbar from "./components/Navbar/Navbar";
// import { fetchTopAlbums } from "./api/api";
// import { useEffect, useState } from "react";
// // import Card from "./components/Card/Card";
// import Section from "./components/Section/Section";

// function App() {
//   const [topAlbums, setTopAlbums] = useState([]);
//   const getTopAlbums = async () => {
//     try {
//       const data = await fetchTopAlbums();
//       setTopAlbums(data);
//       // console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getTopAlbums();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       {/* {topAlbums.map((album) => (
//         <Card data={album} type="album" key={album.id} />
//       ))} */}
//       <Section data={topAlbums} title={"Top Albums"} type={"album"} />
//     </div>
//   );
// }

// export default App;
