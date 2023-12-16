// import React, { useEffect, useState } from "react";
// import ScrollCarousel from "scroll-carousel-react";
// import "./index.scss";

// const Carousel = () => {
//    const [apiData, setApiData] = useState([])


//    useEffect(() => {
//     getData()
//    }, [])

//    async function getData() {
//     const res = await fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
//     const data = await res.json()
//     setApiData(data)
//    }
   

//   return (
//     <>
//       <section id="SliderCarousel">
//         <h4>Today</h4>
//         <div className="flashSales">
//           <h1>Flash Sales</h1>
//         </div>
//         <ScrollCarousel
//           autoplay
//           autoplaySpeed={8}
//           speed={7}
//         >
//           {apiData.slice((item) => (
//             <div
//               key={item}
//               className="bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48"
//             >
//               <img src={item} alt="" />
//             </div>
//           ))}
//         </ScrollCarousel>
//       </section>
//     </>
//   );
// };-

// export default Carousel;
